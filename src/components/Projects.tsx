import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

// Importando as imagens
import imgOdontoCot from '../assets/images/OdontoCot.jpeg'
import imgAnaLinhares from '../assets/images/AnaLinhares.JPG'
import imgLais from '../assets/images/Lais.jpeg'
import imgBarbearia from '../assets/images/barbearia.jpeg'
import imgSalaoLirio from '../assets/images/SalaoLirio.jpeg'
import imgFinControl from '../assets/images/Fincontrol.jpeg'
import imgChatBot from '../assets/images/chatBot.jpg'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  featured?: boolean;
  category?: string;
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
    category: "Desenvolvimento Web Full Stack"
  },
  {
    id: 2,
    title: "Ana Linhares Odontologia",
    description: "Landing page otimizada para conversão, integrada com WhatsApp e sistema de CRM para gestão de leads.",
    image: imgAnaLinhares,
    tech: ["React", "Next.js", "TailwindCSS", "API WhatsApp"],
    link: "https://github.com/Renan0004/Site-Odontologia-DrAna",
    featured: true,
    category: "Marketing Digital"
  },
  {
    id: 3,
    title: "Dra. Laís Odontologia",
    description: "Plataforma completa com blog, área de membros e integração com sistema de pagamentos para cursos online.",
    image: imgLais,
    tech: ["React", "TypeScript", "Node.js", "Stripe", "PostgreSQL"],
    link: "https://github.com/Renan0004/Site-Odontologia-DraLais",
    featured: true,
    category: "Plataforma E-learning"
  },
  {
    id: 4,
    title: "Barbearia Lirio",
    description: "Sistema completo de gestão para barbearia com agendamento online, controle financeiro e fidelização de clientes.",
    image: imgBarbearia,
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "https://github.com/Renan0004/Barbearia-Lirio",
    category: "Sistemas de Gestão"
  },
  {
    id: 5,
    title: "Salão Lírio",
    description: "Landing page moderna e responsiva com sistema de agendamento integrado ao WhatsApp, Google Maps e gestão de redes sociais.",
    image: imgSalaoLirio,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/Renan0004/SalaoLirio",
    featured: true,
    category: "Landing Page"
  },
  {
    id: 6,
    title: "Dev_ChatBot",
    description: "Automação completa de atendimento via WhatsApp com IA, integração de pagamentos e sistema de agendamento.",
    image: imgChatBot,
    tech: ["Node.js", "WhatsApp API", "OpenAI", "MongoDB"],
    link: "https://github.com/Renan0004/",
    category: "Automação"
  },
  {
    id: 7,
    title: "FinControl",
    description: "Aplicação web para gestão financeira com relatórios personalizados e integração com APIs bancárias.",
    image: imgFinControl,
    tech: ["Node.js", "Express", "MongoDB", "React"],
    link: "https://github.com/Renan0004/FinControl",
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

                {/* Título e Links */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-gold hover:text-secondary-gold transition-colors duration-300"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                </div>

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