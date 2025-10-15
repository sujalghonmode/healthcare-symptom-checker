import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.MODEL || 'gemini-1.5-flash';

export async function callGemini(promptPackage) {
  if (!API_KEY) throw new Error('GEMINI_API_KEY not set in .env');

  const payload = {
    contents: [
      {
        role: 'user',
        parts: [{ text: `${promptPackage.system}\n\n${promptPackage.user}` }]
      }
    ]
  };

  const url = `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent?key=${API_KEY}`;

  try {
    const res = await axios.post(url, payload, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 200000
    });

    const text = res?.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error('Empty Gemini response');
    return text;
  } catch (err) {
    console.error('Gemini API error:', err.response?.data || err.message);
    throw new Error('Gemini API call failed');
  }
}