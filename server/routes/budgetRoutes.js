const express = require('express');
const { getBudgets, addBudget, updateBudget, deleteBudget } = require('../controllers/budgetController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/:eventId', auth, getBudgets);
router.post('/:eventId', auth, addBudget);
router.put('/:eventId/:budgetId', auth, updateBudget);
router.delete('/:eventId/:budgetId', auth, deleteBudget);

module.exports = router;
