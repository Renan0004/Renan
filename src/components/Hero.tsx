import { motion } from 'framer-motion'
import eu from '../assets/images/eu.png'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [ mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-dark-blue relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      {/* Padrão de fundo animado com partículas */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Partículas flutuantes - Escondidas em dispositivos móveis para melhor performance */}
      <div className="hidden md:block">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Conteúdo */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-primary-gold to-secondary-gold bg-clip-text text-transparent">
                Desenvolvedor Full Stack
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transformando ideias em experiências digitais memoráveis através de código limpo e design inovador.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
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
            </motion.div>
          </motion.div>

          {/* Imagem com efeitos avançados */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center items-center relative mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              perspective: 1000
            }}
          >
            {/* Círculos decorativos animados - Ajustados para responsividade */}
            <motion.div
              className="absolute w-[280px] sm:w-[380px] lg:w-[520px] h-[280px] sm:h-[380px] lg:h-[520px] border-4 border-primary-gold/20 rounded-full"
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div
              className="absolute w-[260px] sm:w-[360px] lg:w-[480px] h-[260px] sm:h-[360px] lg:h-[480px] border-4 border-primary-gold/10 rounded-full"
              animate={{ 
                rotate: -360,
                scale: [1.05, 1, 1.05]
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* Container da imagem com efeitos 3D */}
            <motion.div 
              className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]"
              style={{
                transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="w-full h-full rounded-3xl overflow-hidden relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradiente de sobreposição */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-blue/80 z-10" />
                
                {/* Código animado de fundo - Escondido em dispositivos móveis */}
                <motion.div
                  className="absolute inset-0 opacity-20 text-primary-gold overflow-hidden hidden md:block"
                  initial={{ y: 0 }}
                  animate={{ y: [-500, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {Array(20).fill('').map((_, i) => (
                    <div key={i} className="whitespace-nowrap font-mono text-xs sm:text-sm">
                      const dev = {'{'}name: "Renan", skills: ["React", "Node", "TypeScript"]{'}'}
                    </div>
                  ))}
                </motion.div>
                
                {/* Imagem principal com efeitos */}
                <motion.img
                  src={eu}
                  alt="Renan Desenvolvedor"
                  className="w-full h-full object-cover object-center relative z-0"
                  initial={{ scale: 1 }}
                  animate={{
                    scale: [1, 1.02, 1],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Borda com efeito suave */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-white/10 z-30"
                  animate={{
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Partículas ao redor da imagem - Escondidas em dispositivos móveis */}
            <div className="hidden md:block">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary-gold/40 rounded-full"
                  style={{
                    left: `${50 + 35 * Math.cos(2 * Math.PI * i / 8)}%`,
                    top: `${50 + 35 * Math.sin(2 * Math.PI * i / 8)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 