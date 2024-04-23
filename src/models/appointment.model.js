const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
    doctor_id: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    patient_mobile_number: { type: String, required: true },
    time: { type: Date, required: true }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = { Appointment };
