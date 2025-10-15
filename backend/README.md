# Healthcare Symptom Checker (Gemini API)

## Overview
Backend for the Healthcare Symptom Checker using **Google Gemini API**.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and add your **GEMINI_API_KEY**.
3. Run server:
   ```bash
   npm run dev
   ```

## Endpoint
**POST /api/symptoms**
```json
{ "text": "I have fever and body ache" }
```

Response:
```json
{
  "conditions": [{"name":"Viral fever","confidence":0.8,"explanation":"..."}],
  "recommendations":["Stay hydrated","Rest","See doctor if fever lasts >48h"],
  "disclaimer":"Educational only — not medical advice."
}
```

## Safety
Outputs are educational summaries, not medical advice.
