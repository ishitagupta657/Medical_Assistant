const express = require('express');
const appointmentRoute = require('./appointment.route');
const diseaseRoute = require('./disease.route');
const doctorRoute = require('./doctor.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/disease',
    route: diseaseRoute,
  },
  {
    path: '/appointment',
    route: appointmentRoute,
  },
  {
    path: '/doctor',
    route: doctorRoute,
  },
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
