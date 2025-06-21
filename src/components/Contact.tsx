import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = () => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await emailjs.send(
        'service_p2xw3ok',
        'template_levcuwc',
        {
          nome: formData.name,
          email: formData.email,
          mensagem: formData.message,
        },
        'yWD3Cj-Bqqxz6Kts-'
      )

      toast.success('Mensagem enviada com sucesso!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      toast.error('Erro ao enviar mensagem. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      id: 1,
      icon: <FaWhatsapp className="text-2xl" />,
      label: "WhatsApp",
      description: "Disponível para chat",
      href: "https://wa.me/5541996300822",
      color: "hover:text-green-400"
    },
    {
      id: 2,
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      description: "Veja meus projetos",
      href: "https://github.com/Renan0004",
      color: "hover:text-white"
    },
    {
      id: 3,
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      description: "Conecte-se comigo",
      href: "https://www.linkedin.com/in/renan-dirceu-de-almeida-16645025a",
      color: "hover:text-blue-400"
    }
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-dark-blue relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-gold rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-gold rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-primary-gold to-secondary-gold bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Estou sempre aberto a novas oportunidades e parcerias. Entre em contato através de qualquer um dos canais abaixo:
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="bg-dark-blue/30 rounded-2xl p-6 sm:p-8 border border-primary-gold/10"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base bg-dark-blue/50 border ${
                    errors.name ? 'border-red-500' : 'border-primary-gold/20'
                  } text-white placeholder-gray-400 focus:outline-none focus:border-primary-gold transition-colors`}
                  placeholder="Seu nome"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs sm:text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base bg-dark-blue/50 border ${
                    errors.email ? 'border-red-500' : 'border-primary-gold/20'
                  } text-white placeholder-gray-400 focus:outline-none focus:border-primary-gold transition-colors`}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs sm:text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base bg-dark-blue/50 border ${
                    errors.message ? 'border-red-500' : 'border-primary-gold/20'
                  } text-white placeholder-gray-400 focus:outline-none focus:border-primary-gold transition-colors resize-none`}
                  placeholder="Sua mensagem"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs sm:text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2.5 sm:py-4 rounded-xl text-sm sm:text-base font-medium text-dark-blue
                  bg-gradient-to-r from-primary-gold to-secondary-gold
                  transform transition-all duration-300
                  hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-gold/20
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${isSubmitting ? 'animate-pulse' : ''}`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-center mt-4 text-sm sm:text-base">
                  Mensagem enviada com sucesso!
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center mt-4 text-sm sm:text-base">
                  Erro ao enviar mensagem. Tente novamente.
                </p>
              )}
            </form>
          </motion.div>

          {/* Links Sociais */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="space-y-4 sm:space-y-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: false }}
                className={`group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-dark-blue/30 border border-primary-gold/10
                  transform transition-all duration-300
                  hover:border-primary-gold/30 hover:shadow-lg hover:shadow-primary-gold/5`}
              >
                <div className={`p-3 sm:p-4 rounded-xl bg-dark-blue/50 border border-primary-gold/20 
                  group-hover:border-primary-gold/40 transition-colors ${link.color}`}>
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5 sm:mb-1 group-hover:text-primary-gold transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400">
                    {link.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 