'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mode, setMode] = useState<'light'|'dark'>('dark')

  useEffect(() => {
    const html = document.documentElement
    html.classList.toggle('dark', mode === 'dark')
  }, [mode])

  return (
    <button onClick={() => setMode(m => (m === 'dark' ? 'light' : 'dark'))}>
      Toggle theme
    </button>
  )
}
