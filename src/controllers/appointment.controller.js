const catchAsync = require('../utils/catchAsync');
const { Appointment } = require('../models/appointment.model');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const getAppointment = catchAsync(async (req, res) => {
  const { doctor_id, patient_mobile_number } = req.query;

  let filters = {}
  if (patient_mobile_number) {
    filters['patient_mobile_number'] = patient_mobile_number
  }
  if (doctor_id) {
    filters['doctor_id'] = doctor_id
  }
  const appointments = Object.keys(filters).length > 0
    ? await Appointment.find(filters)
    : await Appointment.find();
  if (!appointments) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Appointments not found');
  }
  res.send(appointments);
});

const createAppointment = catchAsync(async (req, res) => {
  const { doctor_id, patient_mobile_number, time } = req.body;

  if (!doctor_id || !patient_mobile_number || !time) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Missing required fields');
  }

  const newAppointment = new Appointment({
    doctor_id,
    patient_mobile_number,
    time
  });

  await newAppointment.save();

  res.status(httpStatus.CREATED).json(newAppointment);
});

const deleteAppointment = catchAsync(async (req, res) => {
  const { id } = req.query;

  console.log({id}, req.query)
  if (!id) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Appointment ID is required');
  }

  const appointment = await Appointment.findById({_id:id});
  if (!appointment) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Appointment not found');
  }

  await appointment.remove();
  res.status(httpStatus.NO_CONTENT).end();
});

module.exports = {
  getAppointment,
  deleteAppointment,
  createAppointment
};
