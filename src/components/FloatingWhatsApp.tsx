import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/5541996300822"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 xs:bottom-6 xs:right-6 z-50 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative">
        {/* Botão principal */}
        <div className="bg-green-500 hover:bg-green-600 text-white p-3 xs:p-4 rounded-full shadow-lg transition-colors duration-300">
          <FaWhatsapp className="text-2xl xs:text-3xl" />
        </div>

        {/* Efeito de ping */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></div>
        
        {/* Tooltip - apenas em telas maiores */}
        <div className="hidden sm:block absolute right-full mr-3 xs:mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 xs:px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none text-sm">
          Fale comigo no WhatsApp!
        </div>
      </div>
    </motion.a>
  )
}

export default FloatingWhatsApp 