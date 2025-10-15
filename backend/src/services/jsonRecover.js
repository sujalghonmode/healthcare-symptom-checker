export async function recoverJSON(rawText, llmCaller, originalPrompt) {
  const extractJSON = (s) => {
    const first = s.indexOf('{');
    const last = s.lastIndexOf('}');
    if (first === -1 || last === -1) return null;
    return s.slice(first, last + 1);
  };

  try {
    const block = extractJSON(rawText);
    JSON.parse(block);
    return block;
  } catch {
    const fixPrompt = {
      system: originalPrompt.system,
      user: `Your previous response was invalid JSON. Please output only valid JSON following the schema and nothing else.`
    };

    const fixed = await llmCaller(fixPrompt);
    const block2 = extractJSON(fixed);
    if (!block2) throw new Error('Failed to recover JSON.');
    JSON.parse(block2);
    return block2;
  }
}