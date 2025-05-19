import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="uppercase text-sm tracking-widest text-gray-600">
              VAMOS CONSTRUIR ALGO JUNTOS
            </p>
            <h1 className="py-4 text-gray-700">
              Olá, eu sou <span className="text-[#5651e5]">Renan</span>
            </h1>
            <div className="py-2 text-gray-700">
              <TypeAnimation
                sequence={[
                  'Desenvolvedor Front-End',
                  2000,
                  'Desenvolvedor Web',
                  2000,
                  'UI/UX Designer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
              Sou um desenvolvedor front-end focado em construir experiências digitais excepcionais.
              Atualmente, estou focado em construir aplicações web responsivas e acessíveis.
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <a
                href="https://www.linkedin.com/in/renan-desenvolvedor/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Renan0004"
                target="_blank"
                rel="noreferrer"
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/5511973029094"
                target="_blank"
                rel="noreferrer"
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero 