import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaArrowUp, FaMapMarkerAlt, FaCode } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      href: "https://github.com/Renan0004",
      label: "GitHub",
      color: "hover:text-[#2ea44f]"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      href: "https://www.linkedin.com/in/renan-dirceu-de-almeida-16645025a",
      label: "LinkedIn",
      color: "hover:text-[#0077b5]"
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      href: "https://wa.me/5541996300822",
      label: "WhatsApp",
      color: "hover:text-[#25D366]"
    }
  ]

  const quickLinks = [
    { name: "Início", to: "hero" },
    { name: "Sobre", to: "about" },
    { name: "Serviços", to: "services" },
    { name: "Projetos", to: "projects" },
    { name: "Contato", to: "contact" }
  ]

  const stats = [
    { label: "Anos de Experiência", value: "3+" },
    { label: "Projetos Concluídos", value: "50+" },
    { label: "Clientes Satisfeitos", value: "30+" }
  ]

  return (
    <footer className="bg-dark-blue relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Conteúdo do Footer com z-index para garantir que fique acima do background */}
      <div className="relative z-10">
        {/* Estatísticas */}
        <div className="container mx-auto px-4 py-8 border-b border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-3xl font-bold text-primary-gold mb-2">{stat.value}</h4>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Coluna 1 - Sobre */}
            <div className="relative">
              <motion.div
                className="flex items-center gap-2 mb-4"
                whileHover={{ x: 5 }}
              >
                <FaCode className="text-primary-gold text-2xl" />
                <h3 className="text-2xl font-bold text-primary-gold">
                  Renan Dirceu
                </h3>
              </motion.div>
              <p className="text-gray-400 mb-6">
                Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-primary-gold transition-all duration-300 ${link.color} relative`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.icon}
                    {hoveredLink === link.label && (
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-dark-blue px-2 py-1 rounded whitespace-nowrap"
                      >
                        {link.label}
                      </motion.span>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Coluna 2 - Links Rápidos */}
            <div className="relative">
              <h3 className="text-xl font-bold text-primary-gold mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-primary-gold"></span>
                Links Rápidos
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={800}
                      className="text-gray-400 hover:text-primary-gold transition-colors duration-300 block cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 - Contato */}
            <div className="relative">
              <h3 className="text-xl font-bold text-primary-gold mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-primary-gold"></span>
                Conecte-se
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:tatusage@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary-gold transition-all duration-300 group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <span className="bg-primary-gold/10 p-2 rounded-full group-hover:bg-primary-gold/20 transition-colors duration-300">
                    <FaEnvelope />
                  </span>
                  <span className="text-gray-400">tatusage@gmail.com</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/5541996300822"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary-gold transition-all duration-300 group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <span className="bg-primary-gold/10 p-2 rounded-full group-hover:bg-primary-gold/20 transition-colors duration-300">
                    <FaWhatsapp />
                  </span>
                  <span className="text-green-400">(41) 99630-0822</span>
                </motion.a>
                <motion.div
                  className="flex items-center gap-3 text-gray-400 group"
                  whileHover={{ x: 5 }}
                >
                  <span className="bg-primary-gold/10 p-2 rounded-full group-hover:bg-primary-gold/20 transition-colors duration-300">
                    <FaMapMarkerAlt />
                  </span>
                  Curitiba, PR - Brasil
                </motion.div>
              </div>
            </div>
          </div>

          {/* Linha Divisória */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Renan Dirceu. Todos os direitos reservados.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  className="inline-flex items-center gap-2 bg-primary-gold/10 text-primary-gold px-6 py-2 rounded-full hover:bg-primary-gold hover:text-dark-blue transition-all duration-300 cursor-pointer"
                >
                  Iniciar Projeto
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Botão Voltar ao Topo */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-primary-gold text-dark-blue w-12 h-12 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg z-50 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Footer 