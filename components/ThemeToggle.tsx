'use client'
import React, { useEffect, useState } from 'react'
export default function ThemeToggle(){
  const [theme,setTheme] = useState('dark')
  useEffect(()=>{
    const t = localStorage.getItem('theme') || 'dark'
    setTheme(t)
    document.documentElement.classList.toggle('light', t === 'light')
  },[])
  const toggle = () => {
    const t = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', t)
    document.documentElement.classList.toggle('light', t === 'light')
    setTheme(t)
  }
  return <button onClick={toggle}>{theme === 'dark' ? 'Switch to light' : 'Switch to dark'}</button>
}
