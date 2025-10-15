
import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="flex justify-center items-center mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
      ></motion.div>
    </motion.div>
  )
}
