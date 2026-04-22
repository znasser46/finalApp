import { client } from '../config/dbconfig.mjs';
import { ObjectId } from 'mongodb';

const db = client.db('cis486');
const collection = db.collection('budgets');

export async function createBudget(data) {
  const result = await collection.insertOne({
    name: data.name,
    income: data.income,
    transportation: data.transportation,
    rent: data.rent,
    groceries: data.groceries,
    utility: data.utility,
    household: data.household,
    entertainment: data.entertainment,
    clothes: data.clothes,
    healthcare: data.healthcare,
    totalExpenses: data.totalExpenses,
    remaining: data.remaining,
    userId: data.userId,
    timestamp: new Date()
  });

  return result;
}

export async function getAllBudgets() {
  return await collection.find({}).toArray();
}


export async function updateBudget(id, data) {
  return await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { ...data, updatedAt: new Date() } }
  );
}

export async function deleteBudget(id) {
  return await collection.deleteOne({ _id: new ObjectId(id) });
}

export async function getBudgetsByUser(userId, search) {
  let query = {
    userId
  };

  if (search) {
    query.name = { $regex: search, $options: "i" };
  }
  return await collection.find(query).toArray();
}
