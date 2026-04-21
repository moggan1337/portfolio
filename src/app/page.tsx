'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Categories from '@/components/Categories'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import ContributionGraph from '@/components/ContributionGraph'
import Footer from '@/components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Categories />
      <Projects />
      <Skills />
      <ContributionGraph />
      <Footer />
    </main>
  )
}
