import { Divider } from '@heroui/divider'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex text-center flex-col"
    >
      <Divider />
      <h1 className="2xl:text-[18rem] xl:text-[14rem] lg:text-[10rem] md:text-[9rem] text-[4rem] font-bold uppercase">
        The Blog
      </h1>
      <Divider />
    </motion.div>
  )
}

export default Hero
