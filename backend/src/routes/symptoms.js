import express from 'express';
import { buildPrompt } from '../config/promptTemplates.js';
import { callGemini } from '../services/gemini.js';
import { recoverJSON } from '../services/jsonRecover.js';
import { validateSymptomResponse } from '../utils/validator.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || typeof text !== 'string' || text.trim().length < 3) {
      return res.status(400).json({ error: 'Please provide valid symptom text (min 3 chars).' });
    }

    const prompt = buildPrompt(text);
    const rawResponse = await callGemini(prompt);
    const jsonStr = await recoverJSON(rawResponse, callGemini, prompt);
    const parsed = JSON.parse(jsonStr);

    const validation = validateSymptomResponse(parsed);
    if (!validation.valid) {
      return res.status(502).json({ error: 'Invalid JSON schema returned from model.' });
    }

    parsed.disclaimer =
      parsed.disclaimer || 'Educational only — not medical advice. Consult a healthcare professional.';

    res.json(parsed);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

export default router;