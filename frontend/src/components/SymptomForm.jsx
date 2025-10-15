
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { motion } from 'framer-motion'

export default function SymptomForm({ setLoading, setResult }) {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data) => {
    setResult(null)
    setLoading(true)
    try {
      const res = await axios.post(import.meta.env.VITE_API_URL, { text: data.symptoms })
      setResult(res.data)
    } catch (err) {
      console.error(err)
      alert('Error connecting to API. Check console for details.')
    } finally {
      setLoading(false)
      reset()
    }
  }

  return (
    <motion.form 
      onSubmit={handleSubmit(onSubmit)}
      className="card p-6 rounded-2xl shadow-lg w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <label className="block text-lg font-medium mb-2">Enter your symptoms:</label>
      <textarea
  {...register('symptoms', { required: true })}
  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
  rows="4"
  placeholder="e.g., I have a headache and mild fever"
></textarea>


      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
      >
        Check Symptoms
      </button>
    </motion.form>
  )
}
