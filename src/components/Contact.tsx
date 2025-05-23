import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      await emailjs.send(
        'service_p2xw3ok',
        'template_levcuwc',
        {
          nome: formData.nome,
          email: formData.email,
          mensagem: formData.mensagem,
        },
        'yWD3Cj-Bqqxz6Kts-'
      )

      toast.success('Mensagem enviada com sucesso!')
      setFormData({ nome: '', email: '', mensagem: '' })
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      toast.error('Erro ao enviar mensagem. Tente novamente.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-dark-blue">
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
              Contato
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e parcerias. Entre em contato através de qualquer um dos canais abaixo:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-light-blue/10 p-6 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-white mb-2">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark-blue/50 border border-primary-gold/20 rounded-lg text-white focus:outline-none focus:border-primary-gold transition-colors duration-300"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark-blue/50 border border-primary-gold/20 rounded-lg text-white focus:outline-none focus:border-primary-gold transition-colors duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-white mb-2">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-dark-blue/50 border border-primary-gold/20 rounded-lg text-white focus:outline-none focus:border-primary-gold transition-colors duration-300 resize-none"
                  placeholder="Sua mensagem"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-primary-gold to-secondary-gold text-dark-blue font-bold rounded-lg hover:opacity-90 transition-opacity duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>

          {/* Links de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/5541996300822"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-light-blue/10 rounded-xl hover:bg-light-blue/20 transition-all duration-300 group"
            >
              <FaWhatsapp className="text-4xl text-primary-gold group-hover:scale-110 transition-transform duration-300" />
              <div className="ml-6">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-gold transition-colors duration-300">WhatsApp</h3>
                <p className="text-gray-300">Disponível para chat</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Renan0004"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-light-blue/10 rounded-xl hover:bg-light-blue/20 transition-all duration-300 group"
            >
              <FaGithub className="text-4xl text-primary-gold group-hover:scale-110 transition-transform duration-300" />
              <div className="ml-6">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-gold transition-colors duration-300">GitHub</h3>
                <p className="text-gray-300">Veja meus projetos</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/renan-dirceu-de-almeida-16645025a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-light-blue/10 rounded-xl hover:bg-light-blue/20 transition-all duration-300 group"
            >
              <FaLinkedin className="text-4xl text-primary-gold group-hover:scale-110 transition-transform duration-300" />
              <div className="ml-6">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-gold transition-colors duration-300">LinkedIn</h3>
                <p className="text-gray-300">Conecte-se comigo</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 