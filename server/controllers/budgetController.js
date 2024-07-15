const Budget = require('../models/Budget');
const Event = require('../models/Event');

exports.getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({ event: req.params.eventId });
    res.json(budgets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addBudget = async (req, res) => {
  const { name, amount } = req.body;

  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) return res.status(404).json({ msg: 'Event not found' });

    const newBudget = new Budget({
      name,
      amount,
      event: req.params.eventId,
    });

    const budget = await newBudget.save();
    res.json(budget);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateBudget = async (req, res) => {
  const { name, amount } = req.body;

  const budgetFields = {};
  if (name) budgetFields.name = name;
  if (amount) budgetFields.amount = amount;

  try {
    let budget = await Budget.findById(req.params.budgetId);
    if (!budget) return res.status(404).json({ msg: 'Budget not found' });

    budget = await Budget.findByIdAndUpdate(
      req.params.budgetId,
      { $set: budgetFields },
      { new: true }
    );

    res.json(budget);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteBudget = async (req, res) => {
  try {
    let budget = await Budget.findById(req.params.budgetId);
    if (!budget) return res.status(404).json({ msg: 'Budget not found' });

    await Budget.findByIdAndRemove(req.params.budgetId);

    res.json({ msg: 'Budget removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
