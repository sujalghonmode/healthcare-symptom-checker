
import React,{ useEffect, useState } from 'react'
import SymptomForm from './components/SymptomForm'
import ResultCard from './components/ResultCard'
import Loader from './components/Loader'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function App() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // read saved theme or prefer light
    const saved = localStorage.getItem('theme')
    if (saved) setTheme(saved)
    else setTheme('light')
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <header className="w-full max-w-4xl flex items-center justify-between mb-6">
        <motion.h1 
          className="text-2xl md:text-3xl font-bold text-blue-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🩺 Symptom Checker
        </motion.h1>

        <div className="flex items-center gap-3">
          <motion.button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md border card shadow-sm"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}
          </motion.button>
        </div>
      </header>

      <main className="w-full max-w-4xl">
        <SymptomForm setLoading={setLoading} setResult={setResult} />
        {loading && <Loader />}
        {result && <ResultCard result={result} />}
      </main>
    </div>
  )
}
