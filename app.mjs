import 'dotenv/config';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import budgetRoutes from './routes/budgetRoutes.mjs';
import { connectToMongo } from './config/dbConfig.mjs';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.static(join(__dirname, 'public')));
app.use('/styles', express.static(join(__dirname, 'styles')));
app.use('/js', express.static(join(__dirname, 'js')));

// connect DB
connectToMongo();

// routes
app.use('/api/budgets', budgetRoutes);

// homepage
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.listen(3000);