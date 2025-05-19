import { motion } from 'framer-motion'
import { 
  FaServer, 
  FaReact, 
  FaDatabase, 
  FaTools,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaHtml5,
  FaCss3,
  FaJs,
  FaDocker,
  FaGitAlt
} from 'react-icons/fa'
import { 
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiPostman
} from 'react-icons/si'

interface SkillCategory {
  title: string
  icon: JSX.Element
  skills: {
    name: string
    icon: JSX.Element
  }[]
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Back-End",
      icon: <FaServer className="text-3xl" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Python", icon: <FaPython /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "Prisma", icon: <SiPrisma /> }
      ]
    },
    {
      title: "Front-End",
      icon: <FaReact className="text-3xl" />,
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3 /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> }
      ]
    },
    {
      title: "Banco de Dados",
      icon: <FaDatabase className="text-3xl" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Firebase", icon: <SiFirebase /> }
      ]
    },
    {
      title: "Ferramentas & DevOps",
      icon: <FaTools className="text-3xl" />,
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Postman", icon: <SiPostman /> }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-dark-blue">
      <div className="container">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-primary-gold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Habilidades Técnicas
        </motion.h2>

        <motion.p
          className="text-gray-300 text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Com mais de 2 anos de experiência em desenvolvimento, domino diversas tecnologias 
          e estou sempre em busca de aprender mais. Minha stack principal inclui Node.js, 
          React e TypeScript, mas tenho experiência com várias outras tecnologias.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-light-blue rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-primary-gold">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-gold">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 bg-dark-blue rounded-lg hover:bg-hover-blue transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-xl text-primary-gold">
                      {skill.icon}
                    </span>
                    <span className="text-gray-200">
                      {skill.name}
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