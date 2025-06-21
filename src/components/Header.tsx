import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { name: 'Início', to: 'hero' },
    { name: 'Sobre', to: 'about' },
    { name: 'Habilidades', to: 'skills' },
    { name: 'Serviços', to: 'services' },
    { name: 'Projetos', to: 'projects' },
    { name: 'Formação', to: 'education' },
    { name: 'Contato', to: 'contact' }
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-blue/95 backdrop-blur-sm shadow-lg py-2 sm:py-3' : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-xl sm:text-2xl font-bold cursor-pointer flex items-center group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="relative">
              <span className="text-primary-gold">&lt;</span>
              <span className="text-white group-hover:text-primary-gold transition-colors duration-300">code</span>
              <span className="text-primary-gold">/&gt;</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-gold to-secondary-gold group-hover:w-full transition-all duration-500"></span>
            </span>
            <span className="ml-2 bg-gradient-to-r from-primary-gold to-secondary-gold bg-clip-text text-transparent">
              Dev
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-sm lg:text-base text-white hover:text-primary-gold transition-colors duration-300 cursor-pointer"
                  activeClass="text-primary-gold"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-primary-gold transition-colors duration-300 p-2"
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        className={`md:hidden bg-dark-blue/95 backdrop-blur-sm absolute w-full left-0 top-full shadow-lg ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <ul className="container mx-auto px-4 py-4 space-y-2">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block py-3 px-4 text-white hover:text-primary-gold transition-colors duration-300 cursor-pointer rounded-lg hover:bg-white/5"
                activeClass="text-primary-gold bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </header>
  )
}

export default Header 