const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  amount: Number,
});

const budgetSchema = new mongoose.Schema({
  totalBudget: Number,
  categories: [categorySchema],
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;