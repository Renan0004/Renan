import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <span className="text-gray-300 hover:text-primary-gold transition-colors duration-300 cursor-pointer">
                Sobre
              </span>
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
              href="https://www.linkedin.com/in/renan-dirceu-de-almeida-16645025a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary-gold transition-colors duration-300"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://wa.me/5541996300822"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary-gold transition-colors duration-300"
            >
              <FaWhatsapp className="text-xl" />
            </a>
            
            {/* Botão do menu mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-primary-gold transition-colors duration-300"
            >
              {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-dark-blue/95 backdrop-blur-sm rounded-lg border border-primary-gold/20"
          >
            <div className="px-4 py-4 space-y-4">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-primary-gold transition-colors duration-300 cursor-pointer"
              >
                Início
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-primary-gold transition-colors duration-300 cursor-pointer"
              >
                Sobre
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-primary-gold transition-colors duration-300 cursor-pointer"
              >
                Serviços
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-primary-gold transition-colors duration-300 cursor-pointer"
              >
                Projetos
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-primary-gold transition-colors duration-300 cursor-pointer"
              >
                Contato
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar 