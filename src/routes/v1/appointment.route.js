const express = require('express');
const appointmentController = require('../../controllers/appointment.controller');
const router = express.Router();

router
  .route('/')
  .get(appointmentController.getAppointment)
  .post(appointmentController.createAppointment)
  .delete(appointmentController.deleteAppointment);

module.exports = router;