import { motion } from 'framer-motion'
import { FaGraduationCap, FaCertificate, FaCode } from 'react-icons/fa'

interface Education {
  id: number
  type: 'graduation' | 'certificate' | 'course'
  title: string
  institution: string
  period: string
  description: string
}

const Education = () => {
  const educationItems: Education[] = [
    {
      id: 1,
      type: 'graduation',
      title: 'Tecnologia (CST), técnico em desenvolvimento de sistemas',
      institution: 'Serviço Nacional de Aprendizagem Industrial - SENAI',
      period: 'jul de 2023 - dez de 2024',
      description: 'Desenvolvimento de sistema integrado para gestão de festas de aniversário, implementação de APIs externas, criação de interfaces responsivas, modelagem de banco de dados, programação em C#.'
    },
    {
      id: 2,
      type: 'graduation',
      title: 'Curso Superior de Tecnologia (CST), Tecnólogo Analise Desenvolvimento de Sistemas',
      institution: 'Universidade Positivo - UP',
      period: 'abr de 2025 - dez de 2027',
      description: 'Formação superior com foco em análise e desenvolvimento de sistemas.'
    }
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case 'graduation':
        return <FaGraduationCap className="text-2xl sm:text-3xl" />
      case 'certificate':
        return <FaCertificate className="text-2xl sm:text-3xl" />
      case 'course':
        return <FaCode className="text-2xl sm:text-3xl" />
      default:
        return null
    }
  }

  return (
    <section id="education" className="py-16 sm:py-20 bg-light-blue">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary-gold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Formação Acadêmica
        </motion.h2>

        <div className="space-y-6">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Card com gradiente na borda */}
              <div className="relative bg-dark-blue rounded-xl p-0.5 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-gold to-secondary-gold opacity-20"></div>
                
                {/* Conteúdo do card */}
                <div className="relative bg-dark-blue rounded-xl p-6">
                  {/* Cabeçalho com ícone e título */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary-gold/10 rounded-lg p-3">
                      <span className="text-primary-gold">
                        {getIcon(item.type)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-primary-gold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-secondary-gold text-base sm:text-lg">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  {/* Período */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-0.5 w-12 bg-primary-gold/30"></div>
                    <p className="text-gray-400 text-sm">
                      {item.period}
                    </p>
                  </div>

                  {/* Descrição */}
                  <p className="text-gray-300 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Linha conectora entre cards */}
              {index < educationItems.length - 1 && (
                <div className="absolute left-8 bottom-0 w-0.5 h-6 bg-gradient-to-b from-primary-gold/20 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education 