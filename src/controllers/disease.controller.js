const fs = require('fs');
const csv = require('csv-parser');
const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['en'] });
const catchAsync = require('../utils/catchAsync');
const { DoctorDisease } = require('../models/doctor-disease.model');
const httpStatus = require('http-status');

fs.createReadStream('./symptom2disease.csv')
  .pipe(csv())
  .on('data', (row) => {
    const { label: disease, text: symptoms } = row;
    manager.addDocument('en', symptoms, disease);
    const symptomVariations = symptoms.split(', ').map((symptom) => symptom.trim());
    symptomVariations.forEach((variation) => {
      manager.addDocument('en', variation, disease);
    });
  })
  .on('end', () => {
    manager.train();
    manager.save('./trained_model.nlp', (err) => {
      if (err) {
        console.error('Error saving trained model:', err);
      } else {
        console.log('Model trained and saved successfully.');
      }
    });
  });



const getProblemName = catchAsync(async (req, res) => {
  const symptoms = req.body.symptoms;
  manager.process('en', symptoms).then((response) => {
    const { classifications, symptoms } = response;
    console.log({classifications, symptoms})
    const possibleIllnesses = classifications.map((classification) => classification.intent);
    res.json({ illnesses: possibleIllnesses });
  }).catch((error) => {
    console.error('Error processing symptoms:', error);
    res.status(500).json({ error: 'Internal server error' });
  });
});


const getDoctorsByDisease = catchAsync(async (req, res) => {
  const { disease } = req.query;
  if (!disease) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Disease parameter is required');
  }

  const doctors = await DoctorDisease.aggregate([
    { $match: { disease: disease } },
    {
      $lookup: {
        from: 'doctors',
        localField: 'doctor_id',
        foreignField: '_id',
        as: 'doctor'
      }
    },
    { $unwind: '$doctor' },
    { $sort: { 'doctor.avg_rating': -1 } }
  ]);

  res.send(doctors);
});


module.exports = {
  getDoctorsByDisease,
  getProblemName,
};
