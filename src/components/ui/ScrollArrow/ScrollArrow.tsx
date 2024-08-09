import scrollArrow from '@/../public/img/icons/scroll-arrow.svg'
import { useScroll } from '@/hooks/useScroll'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const ScrollArrow = () => {
  const { arrowReversed, handleArrowClick } = useScroll()

  return (
    <AnimatePresence>
      <motion.button
        className={`fixed right-[75px] transition-all hover:bottom-[30px] bottom-[20px] z-[100]`}
        onClick={() => handleArrowClick()}
        initial={{
          opacity: 0,
          transform: !arrowReversed ? 'rotate(0)' : 'rotate(180deg)',
        }}
        animate={{
          opacity: 1,
          transform: !arrowReversed ? 'rotate(0)' : 'rotate(180deg)',
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={scrollArrow} width={69} height={69} alt='Scroll' />
      </motion.button>
    </AnimatePresence>
  )
}

export default ScrollArrow
