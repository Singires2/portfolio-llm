import './globals.css'
import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'

const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), {
  ssr: false,
})

export const metadata = {
  title: 'My Data & ML Portfolio',
  description: 'Projects: Data Science, ML, LLMs',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <ThemeToggle />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
