console.log("USER MODEL LOADED");

import { client } from '../config/dbconfig.mjs';


const db = client.db('cis486');
const users = db.collection('users');

export const createUser = (user) => users.insertOne(user);

export const findUserByUsername = (username) =>
  users.findOne({ username });