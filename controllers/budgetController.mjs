import * as Budget from '../models/budgetModel.mjs';

export async function create(req, res) {
  try {
    const data = req.body;

    if (!data.name || !data.income) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const result = await Budget.createBudget(data);
    res.json({ message: 'Budget recorded!', id: result.insertedId });

  } catch {
    res.status(500).json({ error: 'Failed to record budget' });
  }
}

export async function getAll(req, res) {
  try {
    const budgets = await Budget.getAllBudgets();
    res.json(budgets);
  } catch {
    res.status(500).json({ error: 'Failed to get budget records' });
  }
}

export async function update(req, res) {
  try {
    const result = await Budget.updateBudget(req.params.id, req.body);

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'budget not found' });
    }

    res.json({ message: 'Budget updated!' });

  } catch {
    res.status(500).json({ error: 'Failed to update budget' });
  }
}

export async function remove(req, res) {
  try {
    const result = await Budget.deleteBudget(req.params.id);

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'budget not found' });
    }

    res.json({ message: 'Budget deleted!' });

  } catch {
    res.status(500).json({ error: 'Failed to delete budget' });
  }
}