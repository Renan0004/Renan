import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-dark-blue/95 backdrop-blur-sm shadow-lg' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={scrollToTop}
            className="text-2xl font-bold text-white hover:text-primary-gold transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {'<Renan />'}
          </motion.button>

          {/* Links de navegação */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-primary-gold transition-colors duration-300">
              Sobre
            </a>
            <a href="#services" className="text-gray-300 hover:text-primary-gold transition-colors duration-300">
              Serviços
            </a>
            <a href="#projects" className="text-gray-300 hover:text-primary-gold transition-colors duration-300">
              Projetos
            </a>
            <a href="#contact" className="text-gray-300 hover:text-primary-gold transition-colors duration-300">
              Contato
            </a>
          </div>

          {/* Redes sociais */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Renan0004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary-gold transition-colors duration-300"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/renan-oliveira-ba7b3b1b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary-gold transition-colors duration-300"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://wa.me/5585988719491"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary-gold transition-colors duration-300"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar 