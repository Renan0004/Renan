import eu from '../assets/images/eu.jpeg'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-dark-blue relative overflow-hidden px-3 py-8 sm:px-4 md:px-6 lg:px-8">
      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
          {/* Conteúdo */}
          <div 
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            >
              <span className="text-primary-gold text-4xl sm:text-5xl lg:text-6xl block mb-2 font-bold">
                <span className="relative inline-block">
                  Renan
                  <span className="text-secondary-gold ml-2 font-medium">Almeida</span>
                </span>
              </span>
              <span className="bg-gradient-to-r from-primary-gold to-secondary-gold bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl font-medium">
                Desenvolvedor Full Stack
              </span>
            </h1>
            
            <p 
              className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Transformando ideias em experiências digitais memoráveis através de código limpo e design inovador.
            </p>

            <div 
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full max-w-md mx-auto lg:mx-0"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                className="flex-1 xs:flex-none xs:w-auto bg-gradient-to-r from-primary-gold to-secondary-gold text-dark-blue px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:brightness-110 transition-all duration-300 transform hover:scale-105 shadow-lg text-center cursor-pointer text-sm sm:text-base"
              >
                Iniciar Projeto
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                className="flex-1 xs:flex-none xs:w-auto border-2 border-primary-gold text-primary-gold px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-primary-gold hover:text-dark-blue transition-all duration-300 transform hover:scale-105 text-center cursor-pointer text-sm sm:text-base"
              >
                Ver Projetos
              </Link>
            </div>
          </div>

          {/* Imagem simplificada e bem posicionada */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center items-center relative mt-8 sm:mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            {/* Círculo decorativo animado */}
            <motion.div 
              className="absolute w-[240px] h-[240px] xs:w-[280px] xs:h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] border-4 border-primary-gold/20 rounded-full"
              animate={{ 
                scale: [1, 1.05, 1],
                borderColor: ["rgba(255,215,0,0.2)", "rgba(255,215,0,0.4)", "rgba(255,215,0,0.2)"]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            
            {/* Container da imagem */}
            <motion.div 
              className="relative w-[220px] h-[220px] xs:w-[260px] xs:h-[260px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full rounded-full overflow-hidden relative group">
                {/* Gradiente de sobreposição suave */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10" />
                
                {/* Efeito de brilho */}
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-primary-gold/30 to-secondary-gold/30 rounded-full z-0 opacity-0 group-hover:opacity-100"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Imagem principal */}
                <motion.img
                  src={eu}
                  alt="Renan Desenvolvedor"
                  className="w-full h-full object-cover object-top rounded-full border-4 border-primary-gold shadow-lg relative z-10"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: [1, 1.03, 1],
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Borda elegante */}
                <div className="absolute inset-0 rounded-full border-2 border-primary-gold/50 z-30" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero