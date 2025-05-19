import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loading from './components/Loading'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0)
    
    // Simula o carregamento da página
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // Aumentado para 2.5s para mostrar mais da animação

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loading />}
      </AnimatePresence>

      <div className="bg-dark-blue min-h-screen text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}

export default App 