const express = require('express');
const Application = require('../models/Application');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Apply to a job (Candidate only)
router.post('/:jobId/apply', authMiddleware, async (req, res) => {
    if (req.user.role !== 'Candidate') {
        return res.status(403).send({ error: 'Access denied' });
    }

    const { resume } = req.body;
    const application = new Application({ candidate: req.user._id, job: req.params.jobId, resume });

    try {
        await application.save();
        res.status(201).send(application);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get applications for a job (Company only)
router.get('/:jobId/applications', authMiddleware, async (req, res) => {
    if (req.user.role !== 'Company') {
        return res.status(403).send({ error: 'Access denied' });
    }

    try {
        const applications = await Application.find({ job: req.params.jobId }).populate('candidate');
        res.send(applications);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
