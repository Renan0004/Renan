import { motion } from 'framer-motion'

// Importando as imagens
import imgSiteDentista2 from '@/assets/images/SiteDentista2.jpeg'
import imgSiteDentista from '@/assets/images/SiteDentista.jpeg'
import imgSiteBarbearia from '@/assets/images/SiteBarbearia.jpeg'
import imgSiteSalao from '@/assets/images/SiteSalao.jpeg'
import imgFinControl from '@/assets/images/Fincontrol.jpeg'
import imgChatBot from '@/assets/images/chatbot.jpg'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  featured?: boolean;
  category?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Site de Odontologia",
    description: "Desenvolvimento completo de site institucional com sistema de agendamento integrado e painel administrativo personalizado.",
    image: imgSiteDentista2,
    tech: ["React", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
    featured: true,
    category: "Desenvolvimento Web Full Stack"
  },
  {
    id: 2,
    title: "Site de Odontologia",
    description: "Landing page otimizada para conversão, integrada com WhatsApp e sistema de CRM para gestão de leads.",
    image: imgSiteDentista,
    tech: ["React", "Next.js", "TailwindCSS", "API WhatsApp"],
    featured: true,
    category: "Marketing Digital"
  },
  {
    id: 4, 
    title: "Barbearia",
    description: "Sistema completo de gestão para barbearia com agendamento online, controle financeiro e fidelização de clientes.",
    image: imgSiteBarbearia,
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    category: "Sistemas de Gestão"
  },
  {
    id: 5,
    title: "Salão de Beleza",
    description: "Landing page moderna e responsiva com sistema de agendamento integrado ao WhatsApp, Google Maps e gestão de redes sociais.",
    image: imgSiteSalao,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    featured: true,
    category: "Landing Page"
  },
  {
    id: 6,
    title: "Dev_ChatBot",
    description: "Automação completa de atendimento via WhatsApp com IA, integração de pagamentos e sistema de agendamento.",
    image: imgChatBot,
    tech: ["Node.js", "WhatsApp API", "OpenAI", "MongoDB"],
    category: "Automação"
  },
  {
    id: 7,
    title: "FinControl",
    description: "Aplicação web para gestão financeira com relatórios personalizados e integração com APIs bancárias.",
    image: imgFinControl,
    tech: ["Node.js", "Express", "MongoDB", "React"],
    category: "Aplicações Web"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-dark-blue">
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
              Projetos
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi, combinando tecnologia e inovação para criar soluções impactantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-light-blue/10 rounded-xl overflow-hidden group hover:bg-light-blue/20 transition-all duration-300"
            >
              {/* Imagem do Projeto */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 to-transparent opacity-60" />
              </div>

              {/* Conteúdo do Projeto */}
              <div className="p-6">
                {/* Categoria */}
                <div className="mb-3">
                  <span className="text-sm font-medium text-primary-gold">
                    {project.category}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-white group-hover:text-primary-gold transition-colors duration-300 mb-3">
                  {project.title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-300 mb-4 line-clamp-2 text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-dark-blue/50 text-primary-gold text-xs sm:text-sm rounded-full border border-primary-gold/20"
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