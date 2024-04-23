const express = require('express');
const doctorController = require('../../controllers/doctor.controller');

const router = express.Router();

router
  .route('/')
  .get(doctorController.getAllDoctors)
  .patch(doctorController.rateDoctor)

module.exports = router;