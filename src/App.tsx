import { Suspense, lazy, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Education } from './components/Education/Education'
import { Footer } from './components/Footer/Footer'
import { Hero } from './components/Hero/Hero'
import { Loader } from './components/Loader/Loader'
import { Navbar } from './components/Navbar/Navbar'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'

const BackgroundFX = lazy(() =>
  import('./components/BackgroundFX').then((module) => ({
    default: module.BackgroundFX,
  })),
)

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1100)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
      <Suspense fallback={null}>
        <BackgroundFX />
      </Suspense>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
