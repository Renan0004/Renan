import { motion } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaTools, FaGitAlt } from 'react-icons/fa'
import { useState } from 'react'

const skillCategories = [
  {
    title: "Linguagens e Lógica de Programação",
    icon: <FaCode className="text-2xl" />,
    description: "Desenvolvimento de aplicações robustas e escaláveis",
    skills: [
      {
        name: "JavaScript/TypeScript",
        description: "React, Next.js, Node.js, Express, Styled Components, TailwindCSS, Framer Motion"
      },
      {
        name: "Java",
        description: "Spring Boot, Spring Security, JPA/Hibernate, Maven, JUnit"
      },
      {
        name: "C#.NET",
        description: ".NET Core, Entity Framework, ASP.NET MVC, LINQ"
      },
      {
        name: "Python",
        description: "Django, FastAPI, Pandas, NumPy, Selenium"
      }
    ]
  },
  {
    title: "Frontend",
    icon: <FaServer className="text-2xl" />,
    description: "Desenvolvimento de interfaces modernas e responsivas",
    skills: [
      {
        name: "React Ecosystem",
        description: "React.js, Context API, Redux, React Query, React Hook Form"
      },
      {
        name: "Next.js",
        description: "App Router, Server Components, API Routes, Static/Dynamic Rendering"
      },
      {
        name: "Estilização",
        description: "TailwindCSS, Styled Components, SASS, CSS Modules, Material-UI"
      },
      {
        name: "UI/UX",
        description: "Framer Motion, Radix UI, Headless UI, Storybook"
      }
    ]
  },
  {
    title: "Backend",
    icon: <FaServer className="text-2xl" />,
    description: "Desenvolvimento de APIs e serviços",
    skills: [
      {
        name: "Node.js",
        description: "Express, NestJS, Prisma, TypeORM, JWT Authentication"
      },
      {
        name: "Spring Boot",
        description: "Spring Security, Spring Data JPA, Spring Cloud, Microservices"
      },
      {
        name: "APIs",
        description: "REST, GraphQL, WebSockets, Swagger/OpenAPI"
      }
    ]
  },
  {
    title: "Banco de Dados",
    icon: <FaDatabase className="text-2xl" />,
    description: "Gerenciamento e modelagem de dados",
    skills: [
      {
        name: "Relacionais",
        description: "PostgreSQL, MySQL, SQL Server, Modelagem de Dados"
      },
      {
        name: "NoSQL",
        description: "MongoDB, Redis, Firebase Realtime Database"
      },
      {
        name: "ORMs",
        description: "Prisma, TypeORM, Sequelize, Entity Framework"
      }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: <FaTools className="text-2xl" />,
    description: "Infraestrutura e deploy de aplicações",
    skills: [
      {
        name: "Containerização",
        description: "Docker, Docker Compose, Kubernetes básico"
      },
      {
        name: "Cloud Services",
        description: "AWS (EC2, S3, RDS, Lambda), Vercel, Railway"
      },
      {
        name: "CI/CD",
        description: "GitHub Actions, AWS CodePipeline, Jenkins"
      }
    ]
  },
  {
    title: "Ferramentas & Práticas",
    icon: <FaGitAlt className="text-2xl" />,
    description: "Desenvolvimento e colaboração",
    skills: [
      {
        name: "Versionamento",
        description: "Git, GitHub, GitFlow, Conventional Commits"
      },
      {
        name: "Testing",
        description: "Jest, React Testing Library, JUnit, Cypress"
      },
      {
        name: "Metodologias",
        description: "Scrum, Kanban, Code Review, Clean Code"
      },
      {
        name: "Ferramentas",
        description: "JIRA, Figma, Postman, VS Code, IntelliJ"
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