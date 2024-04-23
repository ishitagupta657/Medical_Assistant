const express = require('express');
const diseaseController = require('../../controllers/disease.controller');

const router = express.Router();

router
  .route('/')
  .get(diseaseController.getDoctorsByDisease)
  .post(diseaseController.getProblemName)

module.exports = router;