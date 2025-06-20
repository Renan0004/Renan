import eu from '../assets/images/eu.jpeg'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-dark-blue relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Conteúdo */}
          <div 
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            >
              <span className="bg-gradient-to-r from-primary-gold to-secondary-gold bg-clip-text text-transparent">
                Desenvolvedor Full Stack
              </span>
            </h1>
            
            <p 
              className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Transformando ideias em experiências digitais memoráveis através de código limpo e design inovador.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto bg-gradient-to-r from-primary-gold to-secondary-gold text-dark-blue px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:brightness-110 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                Iniciar Projeto
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto border-2 border-primary-gold text-primary-gold px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-primary-gold hover:text-dark-blue transition-all duration-300 transform hover:scale-105 text-center"
              >
                Ver Projetos
              </a>
            </div>
          </div>

          {/* Imagem simplificada e bem posicionada */}
          <div 
            className="w-full lg:w-1/2 flex justify-center items-center relative mt-12 lg:mt-0"
          >
            {/* Círculo decorativo simples */}
            <div className="absolute w-[280px] sm:w-[380px] lg:w-[480px] h-[280px] sm:h-[380px] lg:h-[480px] border-4 border-primary-gold/20 rounded-full" />
            
            {/* Container da imagem */}
            <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                {/* Gradiente de sobreposição suave */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-blue/50 z-10" />
                
                {/* Imagem principal */}
                <img
                  src={eu}
                  alt="Renan Desenvolvedor"
                  className="w-full h-full object-cover object-top rounded-full border-4 border-primary-gold shadow-lg"
                />
                
                {/* Borda elegante */}
                <div className="absolute inset-0 rounded-full border-2 border-primary-gold/50 z-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero