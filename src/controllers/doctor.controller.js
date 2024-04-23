const catchAsync = require('../utils/catchAsync');
const { Doctor } = require('../models/doctor.model');
const httpStatus = require('http-status');

const getAllDoctors = catchAsync(async (req, res) => {
  const user = await Doctor.find()
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Doctors not found');
  }
  res.send(user);
});

const rateDoctor = catchAsync(async (req, res) => {
  const { doctor_id } = req.params;
  const { rating } = req.body;

  if (rating < 1 || rating > 5) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Rating must be between 1 and 5');
  }
  const doctor = await Doctor.findById(doctor_id);
  if (!doctor) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Doctor not found');
  }
  doctor.avg_rating = (doctor.avg_rating ?? 0 * doctor.total_rating + rating) / (doctor.total_rating + 1);
  doctor.total_rating += 1;
  await doctor.save();

  res.status(httpStatus.CREATED).json({ message: 'Rating saved successfully' });
});

module.exports = {
  getAllDoctors,
  rateDoctor
};
