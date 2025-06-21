import { motion } from 'framer-motion'
import { FaLaptopCode, FaUserTie, FaLightbulb, FaCheck } from 'react-icons/fa'
import { Link } from 'react-scroll'
import euPolo from '../assets/images/EuPolo.png'

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-light-blue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-gold rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-secondary-gold rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-primary-gold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sobre Mim
        </motion.h2>

        {/* Conteúdo principal */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Imagem na lateral com efeito de destaque */}
          <motion.div 
            className="lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              {/* Círculo decorativo atrás da imagem */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-gold/20 to-secondary-gold/20 blur-md"></div>
              
              {/* Efeito de borda animada */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-gold via-secondary-gold to-primary-gold rounded-2xl opacity-70 blur-sm group-hover:opacity-100 transition duration-500 group-hover:blur-md animate-pulse"></div>
              
              {/* Container da imagem */}
              <div className="relative z-10 rounded-xl overflow-hidden border-4 border-primary-gold/30 shadow-[0_0_30px_rgba(255,215,0,0.4)]">
                <img 
                  src={euPolo} 
                  alt="Renan Desenvolvedor" 
                  className="w-full max-w-sm md:max-w-md h-auto object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Efeito de brilho no canto superior */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary-gold/30 rounded-full blur-xl"></div>
              </div>
              
              {/* Efeito de reflexo */}
              <div className="absolute bottom-2 w-4/5 h-4 mx-auto left-0 right-0 bg-primary-gold/20 blur-md rounded-full"></div>
            </div>
          </motion.div>
          
          {/* Informações ao lado */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Perfil */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="p-2 md:p-3 bg-primary-gold/10 rounded-lg">
                  <FaUserTie className="text-2xl md:text-3xl text-primary-gold" />
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-primary-gold">Perfil</h3>
              </div>
              <div className="pl-4 border-l-2 border-primary-gold/30">
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
              </div>
            </div>

            {/* Experiência */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="p-2 md:p-3 bg-primary-gold/10 rounded-lg">
                  <FaLaptopCode className="text-2xl md:text-3xl text-primary-gold" />
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-primary-gold">Experiência</h3>
              </div>
              <div className="space-y-4 md:space-y-6 pl-4 border-l-2 border-primary-gold/30">
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
              </div>
            </div>

            {/* Diferenciais */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="p-2 md:p-3 bg-primary-gold/10 rounded-lg">
                  <FaLightbulb className="text-2xl md:text-3xl text-primary-gold" />
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-primary-gold">Diferenciais</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4 border-l-2 border-primary-gold/30">
                <motion.div 
                  className="flex items-center gap-3 bg-dark-blue/50 p-2 rounded-lg hover:bg-primary-gold/10 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <FaCheck className="text-primary-gold" />
                  <span className="text-gray-300 text-sm md:text-base">Resolução criativa de problemas</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 bg-dark-blue/50 p-2 rounded-lg hover:bg-primary-gold/10 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <FaCheck className="text-primary-gold" />
                  <span className="text-gray-300 text-sm md:text-base">Comunicação efetiva em equipe</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 bg-dark-blue/50 p-2 rounded-lg hover:bg-primary-gold/10 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <FaCheck className="text-primary-gold" />
                  <span className="text-gray-300 text-sm md:text-base">Aprendizado rápido</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 bg-dark-blue/50 p-2 rounded-lg hover:bg-primary-gold/10 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <FaCheck className="text-primary-gold" />
                  <span className="text-gray-300 text-sm md:text-base">Gestão eficiente de tempo</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 bg-dark-blue/50 p-2 rounded-lg hover:bg-primary-gold/10 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <FaCheck className="text-primary-gold" />
                  <span className="text-gray-300 text-sm md:text-base">Adaptabilidade</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Chamada para ação */}
        <motion.div
          className="text-center mt-10 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl text-gray-300 italic mb-6">
            "Transformando desafios em oportunidades de inovação através do código."
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
            className="inline-block px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-primary-gold to-secondary-gold text-dark-blue rounded-full font-bold hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Vamos Conversar
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default About 