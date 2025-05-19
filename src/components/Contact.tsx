import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  })

  useEffect(() => {
    // Inicializa o EmailJS
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return

    setIsSubmitting(true)
    
    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      if (response.status === 200) {
        toast.success('Mensagem enviada com sucesso!')
        form.current.reset()
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      toast.error('Erro ao enviar mensagem. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: 'WhatsApp',
      value: '+55 (41) 99630-0822',
      link: 'https://wa.me/5541996300822',
      color: 'hover:text-green-500'
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      value: 'tatusage@gmail.com',
      link: 'mailto:tatusage@gmail.com',
      color: 'hover:text-red-500'
    },
    {
      icon: <FaGithub className="text-2xl" />,
      title: 'GitHub',
      value: 'github.com/Renan0004',
      link: 'https://github.com/Renan0004',
      color: 'hover:text-gray-400'
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      title: 'LinkedIn',
      value: 'Renan Dirceu',
      link: 'https://www.linkedin.com/in/renan-dirceu-de-almeida-16645025a',
      color: 'hover:text-blue-500'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-dark-blue">
      <div className="container">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-primary-gold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contato
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-light-blue border border-gray-700 text-gray-200 focus:outline-none focus:border-primary-gold transition-colors"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-light-blue border border-gray-700 text-gray-200 focus:outline-none focus:border-primary-gold transition-colors"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="assunto" className="block text-gray-300 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-light-blue border border-gray-700 text-gray-200 focus:outline-none focus:border-primary-gold transition-colors"
                  placeholder="Assunto da mensagem"
                  value={formData.assunto}
                  onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-light-blue border border-gray-700 text-gray-200 focus:outline-none focus:border-primary-gold transition-colors resize-none"
                  placeholder="Sua mensagem..."
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-primary-gold text-dark-blue hover:bg-secondary-gold'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-500 text-center">
                  Mensagem enviada com sucesso!
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center">
                  Erro ao enviar mensagem. Tente novamente.
                </p>
              )}
            </form>
          </motion.div>

          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-gray-300 text-lg">
              Estou sempre aberto a novas oportunidades e parcerias. 
              Entre em contato através de qualquer um dos canais abaixo:
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 text-gray-300 transition-colors duration-300 ${method.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-primary-gold">
                    {method.icon}
                  </span>
                  <div>
                    <h3 className="font-medium">{method.title}</h3>
                    <p className="text-sm text-gray-400">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-12 p-6 bg-light-blue rounded-lg">
              <h3 className="text-xl font-bold text-primary-gold mb-4">
                Horário de Atendimento
              </h3>
              <p className="text-gray-300">
                todos os dias e horários
                <br />
                <br />
                fique a vontade para me mandar uma mensagem
                <br />
                <br />
              </p>
              <p className="text-gray-400 mt-2 text-sm">
                * Respondo mensagens fora desse horário assim que possível
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 