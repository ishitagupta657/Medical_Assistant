const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const doctordiseaseSchema = new Schema({
    doctor_id: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    disease: { type: String, required: true }
});

const DoctorDisease = mongoose.model('DoctorDisease', doctordiseaseSchema);


module.exports = { DoctorDisease };
