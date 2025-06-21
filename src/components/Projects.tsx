import { motion } from 'framer-motion'
import { useState } from 'react'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Site de Odontologia",
    description: "Desenvolvimento completo de site institucional com sistema de agendamento integrado e painel administrativo personalizado.",
    image: "/images/SiteDentista2.jpeg",
    tech: ["React", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
    category: "Desenvolvimento Web Full Stack"
  },
  {
    id: 2,
    title: "Site de Odontologia",
    description: "Landing page otimizada para conversão, integrada com WhatsApp e sistema de CRM para gestão de leads.",
    image: "/images/SiteDentista.jpeg",
    tech: ["React", "Next.js", "TailwindCSS", "API WhatsApp"],
    category: "Marketing Digital"
  },
  {
    id: 3,
    title: "Sistema de Barbearia",
    description: "Sistema completo de gestão para barbearia com agendamento online, controle financeiro e fidelização de clientes.",
    image: "/images/SiteBarbearia.jpeg",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    category: "Sistemas de Gestão"
  },
  {
    id: 4,
    title: "Salão de Beleza",
    description: "Landing page moderna e responsiva com sistema de agendamento integrado ao WhatsApp, Google Maps e gestão de redes sociais.",
    image: "/images/SiteSalao.jpeg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Sistemas de Gestão"
  },
  {
    id: 5,
    title: "Chatbot Inteligente",
    description: "Automação completa de atendimento via WhatsApp com IA, integração de pagamentos e sistema de agendamento.",
    image: "/images/chatbot.jpg",
    tech: ["Node.js", "WhatsApp API", "OpenAI", "MongoDB"],
    category: "Automação de atendimento"
  },
  {
    id: 6,
    title: "Sistema Financeiro",
    description: "Aplicação web para gestão financeira com relatórios personalizados e integração com APIs bancárias.",
    image: "/images/Fincontrol.jpeg",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    category: "Sistemas de gestão"
  }
]

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-dark-blue relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-gold rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-gold rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-gold to-secondary-gold bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi, combinando tecnologia e inovação para criar soluções impactantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1
              }}
              viewport={{ once: false, margin: "-100px" }}
              className={`group relative bg-dark-blue/30 rounded-xl overflow-hidden
                transform transition-all duration-500
                hover:shadow-xl hover:shadow-primary-gold/10
                ${hoveredProject === project.id ? 'scale-[1.02]' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Imagem */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 to-transparent" />
                
                {/* Categoria */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-medium text-primary-gold px-3 py-1 rounded-full bg-dark-blue/80 border border-primary-gold/20">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-dark-blue/50 text-primary-gold text-xs rounded-full border border-primary-gold/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 