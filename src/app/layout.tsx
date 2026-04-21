import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '@moggan1337 | Software Engineer & Open Source Enthusiast',
  description: 'Portfolio of moggan1337 - Software Engineer, Open Source Enthusiast. 150+ repos, AI/ML, DevOps, Databases, and more.',
  keywords: ['software engineer', 'open source', 'portfolio', 'github', 'AI/ML', 'DevOps'],
  authors: [{ name: 'moggan1337' }],
  openGraph: {
    title: '@moggan1337 | Software Engineer & Open Source Enthusiast',
    description: 'Portfolio of moggan1337 - Software Engineer, Open Source Enthusiast',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="grid-background min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
