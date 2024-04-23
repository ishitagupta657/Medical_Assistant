const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name: { type: String, required: true },
    avg_rating: { type: Number, default: 0 },
    total_rating: { type: Number, default: 0 }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = { Doctor };
