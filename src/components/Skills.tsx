import { motion } from 'framer-motion'
import { FaCode, FaLayerGroup, FaServer, FaTools, FaCloud, FaGit } from 'react-icons/fa'

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Linguagens e Lógica de Programação",
    icon: <FaCode className="text-2xl" />,
    skills: [
      "Java",
      "C#.NET",
      "Python",
      "TypeScript",
      "Node.js",
      "POO (Programação Orientada a Objetos)"
    ]
  },
  {
    title: "Frameworks e Bibliotecas",
    icon: <FaLayerGroup className="text-2xl" />,
    skills: [
      "Spring (Boot, Web, Data JPA, Security, Cloud, Netflix)",
      "Hibernate",
      "Entity Framework",
      "React.js",
      "React Native",
      "Next.js"
    ]
  },
  {
    title: "Banco de Dados",
    icon: <FaServer className="text-2xl" />,
    skills: [
      "SQL (MySQL, SQL Server, PostgreSQL)",
      "NoSQL (MongoDB)"
    ]
  },
  {
    title: "Infraestrutura, DevOps e Cloud",
    icon: <FaCloud className="text-2xl" />,
    skills: [
      "Docker",
      "AWS (EC2, ECS, API Gateway, S3, SNS, SQS, Lambda, CloudWatch, DynamoDB, RDS, ECR, WAF, IAM)",
      "CI/CD com GitHub Actions",
      "Terraform",
      "Datadog"
    ]
  },
  {
    title: "Ferramentas e Versionamento",
    icon: <FaGit className="text-2xl" />,
    skills: [
      "Git",
      "GitHub",
      "BitBucket"
    ]
  },
  {
    title: "Metodologias Ágeis e Gestão",
    icon: <FaTools className="text-2xl" />,
    skills: [
      "Scrum",
      "JIRA"
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-light-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-gold to-secondary-gold bg-clip-text text-transparent">
              Tecnologias e Habilidades
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Conjunto de tecnologias e habilidades que domino e utilizo para desenvolver soluções robustas e escaláveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-blue/50 rounded-xl p-6 hover:bg-dark-blue/60 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-gold/10 rounded-lg text-primary-gold">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-gold">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-gold/50" />
                    <span className="text-gray-300 text-sm sm:text-base">
                      {skill}
                    </span>
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