import { motion } from 'framer-motion'
import { FaGlobe, FaMobileAlt, FaCogs } from 'react-icons/fa'
import { Link } from 'react-scroll'

const services = [
  {
    icon: <FaGlobe />,
    title: "Criação de Sites",
    description: "Sites responsivos e otimizados para SEO, garantindo a melhor experiência para seus usuários.",
    features: [
      "Design Responsivo",
      "Otimização SEO",
      "Performance Otimizada",
      "Integração com APIs"
    ]
  },
  {
    icon: <FaMobileAlt />,
    title: "Desenvolvimento de Apps",
    description: "Aplicativos nativos para iOS e Android usando React Native, com foco em performance.",
    features: [
      "Apps iOS e Android",
      "UI/UX Intuitiva",
      "Integração Backend",
      "Push Notifications"
    ]
  },
  {
    icon: <FaCogs />,
    title: "Projetos Personalizados",
    description: "Sistemas, APIs e automações desenvolvidos sob medida para seu negócio.",
    features: [
      "Sistemas Web",
      "APIs RESTful",
      "Automação de Processos",
      "Dashboards Analíticos"
    ]
  }
]

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-20 bg-dark-blue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-gold rounded-full blur-[100px]" />
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-secondary-gold rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <span className="text-primary-gold uppercase tracking-wider text-sm font-semibold mb-4 block">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-gold">
            Soluções Completas
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Oferecemos um conjunto abrangente de serviços para impulsionar sua presença digital, desde o desenvolvimento até a implementação e manutenção.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 + (index * 0.1),
                type: "spring",
                bounce: 0.4
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-dark-blue-light p-8 rounded-2xl border border-primary-gold/20 group hover:bg-primary-gold/5 transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + (index * 0.1),
                  type: "spring",
                  bounce: 0.4
                }}
                className="text-5xl text-primary-gold mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                {service.icon}
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                className="text-2xl font-bold text-primary-gold mb-4"
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                className="text-gray-300 mb-6"
              >
                {service.description}
              </motion.p>

              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                className="space-y-3"
              >
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) + (featureIndex * 0.05) }}
                    className="flex items-center text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-gold mr-2" />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-300 mb-6">Pronto para começar seu projeto?</p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            className="inline-block px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-primary-gold to-secondary-gold text-dark-blue rounded-full font-bold hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Iniciar Projeto
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 