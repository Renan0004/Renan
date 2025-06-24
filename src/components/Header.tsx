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
        isScrolled ? 'bg-dark-blue/95 backdrop-blur-sm shadow-lg py-2 sm:py-3' : 'bg-transparent py-3 sm:py-4 md:py-5'
      }`}
    >
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 flex justify-between items-center max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-lg xs:text-xl sm:text-2xl font-bold cursor-pointer flex items-center group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="relative flex items-center">
              <span className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 bg-primary-gold rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <svg 
                  className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-dark-blue" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </span>
            </span>
            <span className="hidden sm:block ml-3 text-white font-bold text-base xs:text-lg sm:text-xl tracking-tight">
              <span className="group-hover:text-primary-gold transition-colors duration-300">Renan</span>
              <br className="sm:hidden" />
              <span className="sm:ml-1 group-hover:text-secondary-gold transition-colors duration-300">Almeida</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-sm xl:text-base text-white hover:text-primary-gold transition-colors duration-300 cursor-pointer relative group"
                  activeClass="text-primary-gold"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-gold to-secondary-gold group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white hover:text-primary-gold transition-colors duration-300 p-1.5 xs:p-2 rounded-lg hover:bg-white/10"
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
        className={`lg:hidden bg-dark-blue/95 backdrop-blur-sm absolute w-full left-0 top-full shadow-lg border-t border-primary-gold/20 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <ul className="container mx-auto px-3 xs:px-4 sm:px-6 py-4 space-y-1 max-w-7xl">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
            >
                              <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2.5 xs:py-3 px-3 xs:px-4 text-sm xs:text-base text-white hover:text-primary-gold transition-colors duration-300 cursor-pointer rounded-lg hover:bg-white/10 border border-transparent hover:border-primary-gold/20"
                  activeClass="text-primary-gold bg-white/10 border-primary-gold/30"
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