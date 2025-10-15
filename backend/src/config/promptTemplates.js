export function buildPrompt(userText) {
  const system = `You are a careful medical-knowledge summarizer for educational purposes only. 
You must NOT provide definitive medical diagnoses. Output MUST be valid JSON EXACTLY matching this schema:
{
  "conditions": [{"name":"string","confidence":0.0,"explanation":"string"}],
  "recommendations": ["string"],
  "disclaimer": "string"
}
Return up to 2 conditions, with confidence 0.0–1.0. Always include red-flag recommendations when appropriate.`;

  const user = `Patient symptoms: "${userText}".
List possible conditions with explanations and confidence levels, followed by educational next steps.
Output ONLY JSON following the schema.`;

  return { system, user };
}