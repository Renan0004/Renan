// Configurações globais de animações otimizadas
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" },
  viewport: { once: true, margin: "-50px" }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
  viewport: { once: true, margin: "-50px" }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
  viewport: { once: true, margin: "-50px" }
}

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.3 },
  viewport: { once: true }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: "easeOut" },
  viewport: { once: true }
}

export const staggerContainer = {
  initial: {},
  whileInView: {},
  transition: { staggerChildren: 0.05 }
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
} 