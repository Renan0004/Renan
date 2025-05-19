import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'

const Loading = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-dark-blue z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative">
        {/* Círculos animados */}
        <div className="absolute -inset-8">
          <motion.div
            className="w-full h-full rounded-full border-4 border-primary-gold/20"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        <div className="absolute -inset-16">
          <motion.div
            className="w-full h-full rounded-full border-4 border-primary-gold/10"
            animate={{
              rotate: -360,
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Container central */}
        <motion.div
          className="relative bg-dark-blue/80 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Ícone */}
          <motion.div
            className="text-primary-gold text-4xl mb-4"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaCode />
          </motion.div>

          {/* Logo */}
          <motion.div
            className="text-4xl font-bold text-primary-gold mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {'<Renan />'}
            <motion.span
              className="absolute -right-4 top-0 text-primary-gold"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              _
            </motion.span>
          </motion.div>

          {/* Barra de progresso */}
          <div className="w-48 h-2 bg-light-blue/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-gold to-secondary-gold"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Texto de carregamento */}
          <motion.p
            className="mt-4 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Carregando experiências incríveis...
          </motion.p>
        </motion.div>

        {/* Partículas decorativas */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-gold rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Loading 