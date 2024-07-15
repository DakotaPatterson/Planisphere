const Event = require('../models/Event');

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find({ user: req.user.id });
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.createEvent = async (req, res) => {
  const { title, description, date, budget } = req.body;

  try {
    const newEvent = new Event({
      title,
      description,
      date,
      budget,
      user: req.user.id,
    });

    const event = await newEvent.save();
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateEvent = async (req, res) => {
  const { title, description, date, budget } = req.body;

  // Build event object
  const eventFields = {};
  if (title) eventFields.title = title;
  if (description) eventFields.description = description;
  if (date) eventFields.date = date;
  if (budget) eventFields.budget = budget;

  try {
    let event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ msg: 'Event not found' });

    // Ensure user owns event
    if (event.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    event = await Event.findByIdAndUpdate(
      req.params.id,
      { $set: eventFields },
      { new: true }
    );

    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    let event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ msg: 'Event not found' });

    // Ensure user owns event
    if (event.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await Event.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Event removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
