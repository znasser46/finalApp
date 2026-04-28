import express from 'express';
import bcrypt from 'bcryptjs';
import { createUser, findUserByUsername } from '../models/userModel.mjs';
import { generateToken } from '../utility/authorization.mjs';

const router = express.Router();

// Register new users
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const exists = await findUserByUsername(username);
  if (exists) {
    return res.status(400).json({ error: 'User exists' });
  }

  const hashed = await bcrypt.hash(password, 10);

  await createUser({
    username,
    password: hashed,
    createdAt: new Date()
  });

  res.json({ message: 'User created' });
});

// Login for existing users
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await findUserByUsername(username);
  if (!user) {
    return res.status(400).json({ error: 'Invalid login' });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ error: 'Invalid login' });
  }

  const token = generateToken(user);

  res.json({
    token,
    user: {
      id: user._id,
      username: user.username
    }
  });
});

export default router;
