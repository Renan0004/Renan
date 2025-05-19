import { motion } from 'framer-motion'
import { FaLaptopCode, FaUserTie, FaLightbulb } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="py-20 bg-light-blue">
      <div className="container">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-primary-gold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sobre Mim
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Experiência */}
          <motion.div
            className="bg-dark-blue rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <FaLaptopCode className="text-3xl text-primary-gold" />
              <h3 className="text-xl font-bold text-primary-gold">Experiência</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <h4 className="text-secondary-gold font-medium">Desenvolvedor Full Stack</h4>
                <p className="text-gray-400">Freelancer | 2022 - Atual</p>
                <p className="text-gray-300 mt-2">
                  Desenvolvimento de aplicações web completas, desde o backend até o frontend, 
                  com foco em performance e experiência do usuário.
                </p>
              </li>
              <li>
                <h4 className="text-secondary-gold font-medium">Desenvolvedor Back-End</h4>
                <p className="text-gray-400">Projetos Independentes | 2021 - 2022</p>
                <p className="text-gray-300 mt-2">
                  Criação de APIs RESTful, integração com serviços externos e 
                  desenvolvimento de sistemas escaláveis.
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Perfil */}
          <motion.div
            className="bg-dark-blue rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <FaUserTie className="text-3xl text-primary-gold" />
              <h3 className="text-xl font-bold text-primary-gold">Perfil</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Desenvolvedor apaixonado por tecnologia com mais de 2 anos de experiência 
              em desenvolvimento de software. Especializado em criar soluções eficientes 
              e escaláveis usando as melhores práticas do mercado.
            </p>
            <p className="text-gray-300">
              Comprometido com aprendizado contínuo e sempre buscando novos desafios 
              para expandir meus conhecimentos e habilidades técnicas.
            </p>
          </motion.div>

          {/* Diferenciais */}
          <motion.div
            className="bg-dark-blue rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <FaLightbulb className="text-3xl text-primary-gold" />
              <h3 className="text-xl font-bold text-primary-gold">Diferenciais</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-gold rounded-full"></span>
                <span className="text-gray-300">Resolução criativa de problemas</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-gold rounded-full"></span>
                <span className="text-gray-300">Comunicação efetiva em equipe</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-gold rounded-full"></span>
                <span className="text-gray-300">Aprendizado rápido</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-gold rounded-full"></span>
                <span className="text-gray-300">Gestão eficiente de tempo</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-gold rounded-full"></span>
                <span className="text-gray-300">Adaptabilidade</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Chamada para ação */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-300 italic">
            "Transformando desafios em oportunidades de inovação através do código."
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 px-8 py-3 bg-primary-gold text-dark-blue rounded-lg font-medium hover:bg-secondary-gold transition-colors duration-300"
          >
            Vamos Conversar
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About 