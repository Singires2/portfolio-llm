'use client'
import React from 'react'
import './globals.css'
import ThemeToggle from '../components/ThemeToggle'

export const metadata = {
  title: 'My Data & ML Portfolio',
  description: 'Projects: Data Science, ML, LLMs'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24}}>
            <h1>My Data & ML Portfolio</h1>
            <div><ThemeToggle /></div>
          </header>
          <main>{children}</main>
          <footer style={{marginTop:40,color:'var(--muted)'}}>© {(new Date()).getFullYear()} • Built with Next.js</footer>
        </div>
      </body>
    </html>
  )
}
