const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    status: { type: String, enum: ['Applied', 'Reviewed', 'Rejected'], default: 'Applied' },
    resume: { type: String, required: true }
});

module.exports = mongoose.model('Application', applicationSchema);
