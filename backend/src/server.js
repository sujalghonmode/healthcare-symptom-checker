import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import symptomsRouter from './routes/symptoms.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: '10kb' }));

app.get('/', (req, res) => {
  res.json({ ok: true, message: 'Healthcare Symptom Checker API (Gemini version)' });
});

app.use('/api/symptoms', symptomsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));