import { motion } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaTools, FaGitAlt } from 'react-icons/fa'
import { useState } from 'react'

const skillCategories = [
  {
    title: "Back-End",
    icon: <FaCode className="text-2xl" />,
    description: "Desenvolvimento de aplicações robustas e escaláveis",
    skills: [
      {
        name: "Node.js",
        description: "Express, APIs RESTful, desenvolvimento de servidores"
      },
      {
        name: ".NET",
        description: "C#, ASP.NET, Entity Framework, desenvolvimento de aplicações"
      },
      {
        name: "PHP",
        description: "Desenvolvimento web, integração com bancos de dados"
      },
      {
        name: "Delphi",
        description: "Desenvolvimento de aplicações desktop e sistemas legados"
      },
      {
        name: "Python",
        description: "Automação, scripts e desenvolvimento de aplicações"
      },
      {
        name: "C#",
        description: "Desenvolvimento de aplicações Windows e web"
      }
    ]
  },
  {
    title: "Front-End",
    icon: <FaServer className="text-2xl" />,
    description: "Desenvolvimento de interfaces modernas e responsivas",
    skills: [
      {
        name: "JavaScript",
        description: "Desenvolvimento de aplicações web dinâmicas"
      },
      {
        name: "React.js",
        description: "Desenvolvimento de interfaces modernas e componentes reutilizáveis"
      },
      {
        name: "Next.js",
        description: "Aplicações React com SSR, SSG e otimizações de performance"
      },
      {
        name: "TypeScript",
        description: "JavaScript tipado para desenvolvimento mais seguro"
      },
      {
        name: "HTML5",
        description: "Estruturação semântica de páginas web"
      },
      {
        name: "CSS3",
        description: "Estilização e responsividade de interfaces"
      },
      {
        name: "Tailwind CSS",
        description: "Framework CSS utilitário para desenvolvimento rápido"
      }
    ]
  },
  {
    title: "Banco de Dados",
    icon: <FaDatabase className="text-2xl" />,
    description: "Gerenciamento e modelagem de dados",
    skills: [
      {
        name: "PostgreSQL",
        description: "Banco de dados relacional robusto e escalável"
      },
      {
        name: "MySQL",
        description: "Sistema de gerenciamento de banco de dados"
      },
      {
        name: "Firebird",
        description: "Banco de dados relacional para sistemas legados"
      },
      {
        name: "SQL Server",
        description: "Sistema de gerenciamento de banco de dados da Microsoft"
      },
      {
        name: "SQLite",
        description: "Banco de dados leve e portável"
      }
    ]
  },
  {
    title: "Infraestrutura",
    icon: <FaTools className="text-2xl" />,
    description: "Infraestrutura e deploy de aplicações",
    skills: [
      {
        name: "AWS",
        description: "Serviços em nuvem da Amazon Web Services"
      },
      {
        name: "GitHub",
        description: "Controle de versão e colaboração em código"
      },
      {
        name: "GitHub Actions",
        description: "Automação de CI/CD e workflows"
      },
      {
        name: "GitLab CI/CD",
        description: "Integração e entrega contínua"
      },
      {
        name: "Postman",
        description: "Teste e documentação de APIs"
      },
      {
        name: "Docker & Docker Compose",
        description: "Containerização e orquestração de aplicações"
      }
    ]
  },
  {
    title: "Automação de Servidores",
    icon: <FaGitAlt className="text-2xl" />,
    description: "Automação e administração de sistemas",
    skills: [
      {
        name: "Linux Terminal",
        description: "Automação de processos críticos e administração de servidores"
      }
    ]
  }
]

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-dark-blue relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary-gold rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-secondary-gold rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-gold to-secondary-gold bg-clip-text text-transparent">
              Tecnologias e Habilidades
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Conjunto de tecnologias e habilidades que domino e utilizo para desenvolver soluções robustas e escaláveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.05 }}
              viewport={{ once: true }}
              className="bg-dark-blue/30 rounded-xl p-6 hover:bg-dark-blue/40 transition-all duration-300 
                border border-primary-gold/10 hover:border-primary-gold/30 hover:shadow-lg hover:shadow-primary-gold/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-gold/10 rounded-lg text-primary-gold">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-gold">
                  {category.title}
                </h3>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">
                {category.description}
              </p>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between p-2 rounded-lg bg-dark-blue/20 
                      hover:bg-dark-blue/30 transition-all duration-300 group cursor-help">
                      <span className="text-white group-hover:text-primary-gold transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>

                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute z-10 w-64 p-3 mt-2 bg-dark-blue/95 backdrop-blur-sm rounded-lg 
                          shadow-lg border border-primary-gold/20"
                      >
                        <p className="text-sm text-gray-300">
                          {skill.description}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 