import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaMobile, FaServer, FaRobot, FaChartLine } from 'react-icons/fa'

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <FaCode className="text-4xl" />,
    title: "Desenvolvimento Web Full Stack",
    description: "Criação de sites e aplicações web completas, desde o design até a implementação.",
    features: [
      "Sites institucionais e landing pages",
      "Sistemas web personalizados",
      "Integrações com APIs e serviços",
      "SEO e performance otimizada"
    ]
  },
  {
    icon: <FaMobile className="text-4xl" />,
    title: "Aplicações Web Responsivas",
    description: "Desenvolvimento de interfaces modernas e adaptáveis para todos os dispositivos.",
    features: [
      "Design responsivo e mobile-first",
      "PWAs e aplicações offline-first",
      "Animações e interações suaves",
      "Otimização de performance"
    ]
  },
  {
    icon: <FaServer className="text-4xl" />,
    title: "Desenvolvimento Backend",
    description: "Construção de APIs robustas e sistemas escaláveis para sua aplicação.",
    features: [
      "APIs RESTful e GraphQL",
      "Bancos de dados SQL e NoSQL",
      "Autenticação e segurança",
      "Arquitetura de microserviços"
    ]
  },
  {
    icon: <FaRobot className="text-4xl" />,
    title: "Automação e ChatBots",
    description: "Automatização de processos e criação de bots inteligentes para seu negócio.",
    features: [
      "Bots para WhatsApp e Telegram",
      "Automação de processos",
      "Integração com IA",
      "Sistemas de atendimento"
    ]
  },
  {
    icon: <FaRocket className="text-4xl" />,
    title: "Consultoria Técnica",
    description: "Orientação especializada para seu projeto ou equipe de desenvolvimento.",
    features: [
      "Arquitetura de software",
      "Melhores práticas e padrões",
      "Code review e mentoria",
      "Planejamento técnico"
    ]
  },
  {
    icon: <FaChartLine className="text-4xl" />,
    title: "Sistemas de Gestão",
    description: "Desenvolvimento de sistemas empresariais para otimizar seus processos.",
    features: [
      "ERPs personalizados",
      "CRMs e gestão de leads",
      "Dashboards e relatórios",
      "Integrações com sistemas existentes"
    ]
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-dark-blue to-light-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-primary-gold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Serviços
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Soluções completas em desenvolvimento de software para transformar sua ideia em realidade
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-dark-blue rounded-xl p-8 hover:bg-light-blue/20 transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-primary-gold mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-primary-gold rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-primary-gold text-dark-blue px-8 py-4 rounded-full font-medium hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Orçamento <FaRocket className="text-xl" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 