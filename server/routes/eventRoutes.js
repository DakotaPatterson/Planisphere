const express = require('express');
const {getEvents, createEvent, updateEvent, deleteEvent} = require('../controllers/eventController');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/', getEvents);
router.post('/', auth, createEvent);
router.put('/:id', auth, updateEvent);
router.delete('/:id', auth, deleteEvent);

module.exports = router;
