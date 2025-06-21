import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { Link as ScrollLink } from 'react-scroll'

interface Statistic {
  value: string
  label: string
}

interface QuickLink {
  label: string
  to: string
}

const statistics: Statistic[] = [
  {
    value: "3+",
    label: "Anos de Experiência"
  },
  {
    value: "50+",
    label: "Projetos Concluídos"
  },
  {
    value: "30+",
    label: "Clientes Satisfeitos"
  }
]

const quickLinks: QuickLink[] = [
  { label: "Início", to: "hero" },
  { label: "Sobre", to: "about" },
  { label: "Habilidades", to: "skills" },
  { label: "Serviços", to: "services" },
  { label: "Projetos", to: "projects" },
  { label: "Formação", to: "education" },
  { label: "Contato", to: "contact" }
]

const Footer = () => {
  return (
    <footer className="bg-dark-blue relative overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-10">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-gold rounded-full filter blur-[100px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-gold rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Estatísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="text-center p-4 sm:p-6 bg-dark-blue/30 rounded-xl border border-primary-gold/10"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-gold mb-2">
                {stat.value}
              </h3>
              <p className="text-sm sm:text-base text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Informações */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="text-xl sm:text-2xl font-bold"
            >
              <span className="bg-gradient-to-r from-primary-gold to-secondary-gold bg-clip-text text-transparent">
                {'</'} Renan Dirceu {'>'}
              </span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-sm sm:text-base text-gray-400 max-w-md"
            >
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/Renan0004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-gold hover:text-white transition-colors duration-300"
              >
                <FaGithub className="text-xl sm:text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/renan-dirceu-de-almeida-16645025a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-gold hover:text-white transition-colors duration-300"
              >
                <FaLinkedin className="text-xl sm:text-2xl" />
              </a>
              <a
                href="https://wa.me/5541996300822"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-gold hover:text-white transition-colors duration-300"
              >
                <FaWhatsapp className="text-xl sm:text-2xl" />
              </a>
            </motion.div>
          </div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Links Rápidos</h3>
            <nav className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <ScrollLink
                  key={link.label}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-sm sm:text-base text-gray-400 hover:text-primary-gold transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </ScrollLink>
              ))}
            </nav>
          </motion.div>

          {/* Conecte-se */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Conecte-se</h3>
            <div className="space-y-4">
              <a
                href="mailto:tatusage@gmail.com"
                className="flex items-center gap-3 text-sm sm:text-base text-gray-400 hover:text-primary-gold transition-colors duration-300"
              >
                <MdEmail className="text-lg sm:text-xl" />
                <span>tatusage@gmail.com</span>
              </a>
              <a
                href="https://wa.me/5541996300822"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm sm:text-base text-gray-400 hover:text-primary-gold transition-colors duration-300"
              >
                <FaWhatsapp className="text-lg sm:text-xl" />
                <span>(41) 99630-0822</span>
              </a>
              <div className="flex items-center gap-3 text-sm sm:text-base text-gray-400">
                <MdLocationOn className="text-lg sm:text-xl" />
                <span>Curitiba, PR - Brasil</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center pt-6 sm:pt-8 border-t border-gray-800"
        >
          <p className="text-sm sm:text-base text-gray-400">
            © 2025 Renan Dirceu. Todos os direitos reservados.
          </p>
        </motion.div>

        {/* Botão Iniciar Projeto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: false }}
          className="fixed left-4 sm:left-8 bottom-4 sm:bottom-8 z-30"
        >
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full
              bg-gradient-to-r from-primary-gold to-secondary-gold
              text-dark-blue text-sm sm:text-base font-medium cursor-pointer
              transform transition-all duration-300
              hover:scale-105 hover:shadow-lg hover:shadow-primary-gold/20"
          >
            Iniciar Projeto
          </ScrollLink>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 