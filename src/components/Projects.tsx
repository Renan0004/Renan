import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

// Importando as imagens
import imgOdontoCot from '../assets/images/OdontoCot.jpeg'
import imgAnaLinhares from '../assets/images/AnaLinhares.JPG'
import imgLais from '../assets/images/Lais.jpeg'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  featured?: boolean;
  category?: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "OdontoCot",
    description: "Desenvolvimento completo de site institucional com sistema de agendamento integrado e painel administrativo personalizado.",
    image: imgOdontoCot,
    tech: ["React", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
    link: "https://github.com/Renan0004/Site-OdontoCot",
    featured: true,
    category: "Desenvolvimento Web Full Stack",
    github: "https://github.com/Renan0004/Site-OdontoCot"
  },
  {
    id: 2,
    title: "Ana Linhares Odontologia",
    description: "Landing page otimizada para conversão, integrada com WhatsApp e sistema de CRM para gestão de leads.",
    image: imgAnaLinhares,
    tech: ["React", "Next.js", "TailwindCSS", "API WhatsApp"],
    link: "https://github.com/Renan0004/Site-Odontologia-DrAna",
    featured: true,
    category: "Marketing Digital",
    github: "https://github.com/Renan0004/Site-Odontologia-DrAna"
  },
  {
    id: 3,
    title: "Dra. Laís Odontologia",
    description: "Plataforma completa com blog, área de membros e integração com sistema de pagamentos para cursos online.",
    image: imgLais,
    tech: ["React", "TypeScript", "Node.js", "Stripe", "PostgreSQL"],
    link: "https://github.com/Renan0004/Site-Odontologia-DraLais",
    featured: true,
    category: "Plataforma E-learning",
    github: "https://github.com/Renan0004/Site-Odontologia-DraLais"
  },
  {
    id: 4,
    title: "Dev_ChatBot",
    description: "Automação completa de atendimento via WhatsApp com IA, integração de pagamentos e sistema de agendamento.",
    image: "https://via.placeholder.com/400x300?text=ChatBot",
    tech: ["Node.js", "WhatsApp API", "OpenAI", "MongoDB"],
    link: "https://github.com/Renan0004",
    category: "Automação",
    demo: "https://dev_chatbot.com"
  },
  {
    id: 5,
    title: "Barbearia Lirio",
    description: "Sistema completo de gestão para barbearia com agendamento online, controle financeiro e fidelização de clientes.",
    image: "https://via.placeholder.com/400x300?text=Barbearia",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "https://github.com/Renan0004/Barbearia-Lirio",
    category: "Sistemas de Gestão",
    github: "https://github.com/Renan0004/Barbearia-Lirio"
  },
  {
    id: 6,
    title: "FinControl",
    description: "Aplicação web para gestão financeira com relatórios personalizados e integração com APIs bancárias.",
    image: "https://via.placeholder.com/400x300?text=FinControl",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    link: "https://github.com/Renan0004/FinControl",
    category: "Aplicações Web",
    github: "https://github.com/Renan0004/FinControl"
  }
]

// Componente de projetos
const Projects = () => {
  // Estado para selecionar a categoria de projetos
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos')

  return (
    // Seção de projetos
    <section id="projects" className="py-20 bg-dark-blue">
      {/* Container de projetos */}
      <div className="container mx-auto px-4">
        {/* Título e descrição */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Título principal */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-gold to-secondary-gold bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Serviços & Projetos
          </motion.h2>
          {/* Descrição */}
          <motion.p
            className="text-gray-300 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            >
            Desenvolvimento de soluções digitais completas e personalizadas para o seu negócio
          </motion.p>
        </div>

        {/* Projetos em Destaque */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.filter(p => p.featured).map((project) => (
            <motion.div
              key={project.id}
              className="group relative bg-gradient-to-b from-light-blue/20 to-dark-blue/90 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-dark-blue/50 to-transparent opacity-60" />

                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-primary-gold to-secondary-gold text-dark-blue px-8 py-4 rounded-full font-medium flex items-center gap-3 hover:brightness-110 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Ver Detalhes <FaArrowRight />
                  </a>
                </motion.div>
              </div>

              <div className="p-8">
                {/* Categoria */}
                <span className="bg-gradient-to-r from-primary-gold to-secondary-gold bg-clip-text text-transparent text-sm font-medium mb-2 block">
                  {project.category}
                </span>
                <div className="flex items-start justify-between mb-4">
                  {/* Título */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  {/* Link do GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-gold hover:text-secondary-gold transition-colors duration-300"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                </div>
                {/* Descrição */}
                <p className="text-gray-300 mb-6 line-clamp-2 text-lg">
                  {project.description}
                </p>
                {/* Tecnologias */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-dark-blue/50 text-primary-gold text-sm rounded-full border border-primary-gold/20 hover:border-primary-gold transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outros Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-light-blue/10 rounded-lg p-8 hover:bg-light-blue/20 transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-primary-gold to-secondary-gold bg-clip-text text-transparent text-sm font-medium mb-2 block">
                {project.category}
              </span>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-gold hover:text-secondary-gold transition-colors duration-300"
                >
                  <BiLinkExternal className="text-2xl" />
                </a>
              </div>
              <p className="text-gray-300 text-lg mb-6 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-dark-blue/50 text-primary-gold text-sm rounded-full border border-primary-gold/20 hover:border-primary-gold transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 