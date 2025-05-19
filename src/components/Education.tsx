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
        return <FaGraduationCap className="text-2xl" />
      case 'certificate':
        return <FaCertificate className="text-2xl" />
      case 'course':
        return <FaCode className="text-2xl" />
      default:
        return null
    }
  }

  return (
    <section id="education" className="py-20 bg-light-blue">
      <div className="container">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-primary-gold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Formação Acadêmica
        </motion.h2>

        <div className="relative">
          {/* Linha vertical central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-gold/20"></div>

          {/* Items da timeline */}
          {educationItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Conteúdo */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-dark-blue rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary-gold">
                      {getIcon(item.type)}
                    </span>
                    <h3 className="text-xl font-bold text-primary-gold">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-secondary-gold mb-2">
                    {item.institution}
                  </p>
                  <p className="text-gray-400 text-sm mb-3">
                    {item.period}
                  </p>
                  <p className="text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Ponto na linha do tempo */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-gold rounded-full">
                <div className="absolute w-8 h-8 bg-primary-gold/20 rounded-full -left-2 -top-2 animate-ping"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education 