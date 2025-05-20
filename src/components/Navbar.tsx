import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-dark-blue/95 backdrop-blur-sm shadow-lg' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-2xl font-bold text-white hover:text-primary-gold transition-colors duration-300 cursor-pointer"
          >
            {'<Renan />'}
          </Link>

          {/* Links de navegação */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-gray-300 hover:text-primary-gold transition-colors duration-300 cursor-pointer"
            >
              Início
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-gray-300 hover:text-primary-gold transition-colors duration-300 cursor-pointer"
            >
              Sobre
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-gray-300 hover:text-primary-gold transition-colors duration-300 cursor-pointer"
            >
              Serviços
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-gray-300 hover:text-primary-gold transition-colors duration-300 cursor-pointer"
            >
              Projetos
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-gray-300 hover:text-primary-gold transition-colors duration-300 cursor-pointer"
            >
              Contato
            </Link>
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