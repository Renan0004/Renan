import { motion } from 'framer-motion'
import { FaLaptopCode, FaUserTie, FaLightbulb, FaCheck } from 'react-icons/fa'
import { Link } from 'react-scroll'
import euPolo from '../assets/images/EuPolo.png'

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-dark-blue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-gold rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-secondary-gold rounded-full blur-[100px]" />
      </div>
      
      <div className="container relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-primary-gold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Sobre Mim
        </motion.h2>

        {/* Conteúdo principal */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Imagem na lateral com efeito de destaque */}
          <motion.div 
            className="lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative group">
              {/* Container da imagem */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 rounded-xl overflow-hidden border-2 border-primary-gold/20"
              >
                <img 
                  src={euPolo} 
                  alt="Renan Desenvolvedor" 
                  className="w-full max-w-sm md:max-w-md h-auto object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Informações ao lado */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Perfil */}
            <motion.div 
              className="mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.span 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="p-2 md:p-3 bg-primary-gold/10 rounded-lg"
                >
                  <FaUserTie className="text-2xl md:text-3xl text-primary-gold" />
                </motion.span>
                <h3 className="text-xl md:text-2xl font-bold text-primary-gold">Perfil</h3>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pl-4 border-l-2 border-primary-gold/20"
              >
                <p className="text-gray-300 mb-3 text-base md:text-lg">
                  Desenvolvedor apaixonado por tecnologia com mais de 3 anos de experiência 
                  em desenvolvimento de software. Especializado em criar soluções eficientes 
                  e escaláveis usando as melhores práticas do mercado.
                </p>
                <p className="text-gray-300 text-base md:text-lg">
                  Comprometido com aprendizado contínuo e sempre buscando novos desafios 
                  para expandir meus conhecimentos e habilidades técnicas. Focado em 
                  transformar ideias em soluções inovadoras.
                </p>
              </motion.div>
            </motion.div>

            {/* Experiência */}
            <motion.div 
              className="mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.span 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="p-2 md:p-3 bg-primary-gold/10 rounded-lg"
                >
                  <FaLaptopCode className="text-2xl md:text-3xl text-primary-gold" />
                </motion.span>
                <h3 className="text-xl md:text-2xl font-bold text-primary-gold">Experiência</h3>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-4 md:space-y-6 pl-4 border-l-2 border-primary-gold/20"
              >
                <div>
                  <h4 className="text-lg md:text-xl text-secondary-gold font-medium">Desenvolvedor Full Stack</h4>
                  <p className="text-gray-300 mt-1 text-base md:text-lg">
                    Especialista em desenvolvimento web moderno, criando soluções completas 
                    que unem robustez no backend com experiências envolventes no frontend. 
                    Foco em arquiteturas escaláveis e práticas de código limpo.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl text-secondary-gold font-medium">Arquiteto de Soluções</h4>
                  <p className="text-gray-300 mt-1 text-base md:text-lg">
                    Experiência em projetar e implementar sistemas distribuídos, 
                    integrações com APIs externas e otimização de performance. 
                    Comprometido com segurança e qualidade de código.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Diferenciais */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.span 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="p-2 md:p-3 bg-primary-gold/10 rounded-lg"
                >
                  <FaLightbulb className="text-2xl md:text-3xl text-primary-gold" />
                </motion.span>
                <h3 className="text-xl md:text-2xl font-bold text-primary-gold">Diferenciais</h3>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4 border-l-2 border-primary-gold/20"
              >
                {[
                  "Resolução criativa de problemas",
                  "Comunicação efetiva em equipe",
                  "Aprendizado rápido",
                  "Gestão eficiente de tempo",
                  "Adaptabilidade"
                ].map((skill, index) => (
                  <motion.div 
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                    className="flex items-center gap-3 bg-dark-blue-light p-2 rounded-lg hover:bg-primary-gold/10 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <FaCheck className="text-primary-gold" />
                    <span className="text-gray-300 text-sm md:text-base">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Chamada para ação */}
        <motion.div
          className="text-center mt-10 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-xl md:text-2xl text-gray-300 italic mb-6"
          >
            "Transformando desafios em oportunidades de inovação através do código."
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="inline-block px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-primary-gold to-secondary-gold text-dark-blue rounded-full font-bold hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Vamos Conversar
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 