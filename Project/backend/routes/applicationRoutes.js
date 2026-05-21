const express = require('express');
const router = express.Router();
const {
    getApplications,
    setApplication,
    updateApplication,
    deleteApplication,
} = require('../controllers/applicationController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getApplications).post(protect, setApplication);
router.route('/:id').put(protect, updateApplication).delete(protect, deleteApplication);

module.exports = router;
