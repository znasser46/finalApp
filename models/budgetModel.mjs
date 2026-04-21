import { client } from '../config/dbConfig.mjs';
import { ObjectId } from 'mongodb';

const db = client.db('cis486');
const collection = db.collection('budgets');

export async function createBudget(data) {
  const result = await collection.insertOne({
    ...data,
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