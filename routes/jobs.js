const express = require('express');
const Job = require('../models/Job');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create job (Company only)
router.post('/', authMiddleware, async (req, res) => {
    if (req.user.role !== 'Company') {
        return res.status(403).send({ error: 'Access denied' });
    }

    const { title, description, location, salary } = req.body;
    const job = new Job({ title, description, location, salary, postedBy: req.user._id });

    try {
        await job.save();
        res.status(201).send(job);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find({});
        res.send(jobs);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update job (Company only)
router.patch('/:id', authMiddleware, async (req, res) => {
    if (req.user.role !== 'Company') {
        return res.status(403).send({ error: 'Access denied' });
    }

    try {
        const job = await Job.findOneAndUpdate({ _id: req.params.id, postedBy: req.user._id }, req.body, { new: true });
        if (!job) {
            return res.status(404).send();
        }
        res.send(job);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete job (Company only)
router.delete('/:id', authMiddleware, async (req, res) => {
    if (req.user.role !== 'Company') {
        return res.status(403).send({ error: 'Access denied' });
    }

    try {
        const job = await Job.findOneAndDelete({ _id: req.params.id, postedBy: req.user._id });
        if (!job) {
            return res.status(404).send();
        }
        res.send(job);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
