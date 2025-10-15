
import { motion } from 'framer-motion'

export default function ResultCard({ result }) {
  return (
    <motion.div 
      className="card mt-6 p-6 rounded-2xl shadow-lg w-full max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Possible Conditions</h2>
      <ul className="space-y-3">
        {result.conditions?.map((c, idx) => (
          <li key={idx} className="border-b pb-2">
            <div className="flex justify-between">
              <span className="font-medium">{c.name}</span>
              <span className="text-sm text-gray-500">{Math.round(c.confidence * 100)}%</span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{c.explanation}</p>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-600">Recommendations</h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1">
        {result.recommendations?.map((r, idx) => (
          <li key={idx}>{r}</li>
        ))}
      </ul>

      <p className="mt-6 text-xs text-gray-500 border-t pt-2">{result.disclaimer}</p>
    </motion.div>
  )
}
