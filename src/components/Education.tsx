import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

interface Education {
  id: number
  title: string
  institution: string
  period: string
  description: string
  status: 'cursando' | 'concluido'
}

const educationData: Education[] = [
  {
    id: 1,
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Positivo - UP",
    period: "2025 - Cursando",
    status: 'cursando',
    description: "Formação superior com foco em análise e desenvolvimento de sistemas."
  },
  {
    id: 2,
    title: "Técnico em Desenvolvimento de Sistemas",
    institution: "Senai - PR",
    period: "2024 - Concluído",
    status: 'concluido',
    description: "Formação técnica em desenvolvimento de sistemas com foco em programação e análise de sistemas."
  }
]

const Education = () => {
  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 bg-dark-blue relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-gold rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-gold rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-primary-gold to-secondary-gold bg-clip-text text-transparent">
              Formação Acadêmica
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.7,
                type: "spring",
                bounce: 0.3
              }}
              viewport={{ once: false, margin: "-100px" }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6 bg-dark-blue/30 rounded-2xl p-6 sm:p-8 border border-primary-gold/10
                transform transition-all duration-300 hover:border-primary-gold/30 hover:shadow-xl hover:shadow-primary-gold/5">
                {/* Lado Esquerdo - Ícone e Status */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-dark-blue/50 border-2 border-primary-gold flex items-center justify-center">
                    <FaGraduationCap className="text-2xl sm:text-3xl text-primary-gold" />
                  </div>
                  <div className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium 
                    ${education.status === 'cursando' 
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                      : 'bg-green-500/20 text-green-400 border border-green-500/30'}`}>
                    {education.status === 'cursando' ? 'Cursando' : 'Concluído'}
                  </div>
                </div>

                {/* Linha Separadora Vertical */}
                <div className="hidden md:block w-px h-full bg-gradient-to-b from-primary-gold/30 via-primary-gold/10 to-transparent" />

                {/* Lado Direito - Conteúdo */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    {education.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="text-base sm:text-lg text-primary-gold font-medium">
                      {education.institution}
                    </span>
                    <span className="hidden sm:block text-gray-400">•</span>
                    <span className="text-sm sm:text-base text-gray-400">
                      {education.period}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {education.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education 