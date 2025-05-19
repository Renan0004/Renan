import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
//import { BiLinkExternal } from 'react-icons/bi'

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
    title: "Dev_ChatBot",
    description: "Automação completa de atendimento via WhatsApp com IA, integração de pagamentos e sistema de agendamento.",
    image: "https://via.placeholder.com/400x300?text=ChatBot",
    tech: ["Node.js", "WhatsApp API", "OpenAI", "MongoDB"],
    link: "https://github.com/Renan0004",
    category: "Automação"
  },
  {
    id: 5,
    title: "Barbearia Lirio",
    description: "Sistema completo de gestão para barbearia com agendamento online, controle financeiro e fidelização de clientes.",
    image: "https://via.placeholder.com/400x300?text=Barbearia",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "https://github.com/Renan0004/Barbearia-Lirio",
    category: "Sistemas de Gestão"
  },
  {
    id: 6,
    title: "FinControl",
    description: "Aplicação web para gestão financeira com relatórios personalizados e integração com APIs bancárias.",
    image: "https://via.placeholder.com/400x300?text=FinControl",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    link: "https://github.com/Renan0004/FinControl",
    category: "Aplicações Web"
  }
]

// Componente de projetos
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Projetos
          </p>
          <h2 className="py-4">O que eu construí</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  className="rounded-xl group-hover:opacity-10 h-full w-full object-cover"
                  src={project.image}
                  alt={project.title}
                />
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <h3 className="text-2xl text-white tracking-wider text-center">
                    {project.title}
                  </h3>
                  <p className="pb-4 pt-2 text-white text-center">
                    {project.description}
                  </p>
                  <div className="flex justify-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects 