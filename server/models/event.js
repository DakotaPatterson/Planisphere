const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  budget: {
    type: Number,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
});

module.exports = mongoose.model('event', EventSchema);
