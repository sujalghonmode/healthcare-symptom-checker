import Ajv from 'ajv';
const ajv = new Ajv({ allErrors: true });

const schema = {
  type: 'object',
  properties: {
    conditions: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          confidence: { type: 'number', minimum: 0, maximum: 1 },
          explanation: { type: 'string' }
        },
        required: ['name', 'confidence', 'explanation']
      }
    },
    recommendations: { type: 'array', items: { type: 'string' } },
    disclaimer: { type: 'string' }
  },
  required: ['conditions', 'recommendations', 'disclaimer']
};

const validate = ajv.compile(schema);

export function validateSymptomResponse(obj) {
  const valid = validate(obj);
  return { valid, errors: valid ? null : validate.errors };
}