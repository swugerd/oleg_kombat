import { socialItems } from '@/components/modules/MainSection/socials.data'
import { IObserverProps } from '@/types/props'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

const SocialsList: FC<IObserverProps> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      <motion.ul
        className={`absolute flex gap-[30px] flex-col sm:top-[240px] top-[205px]`}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        {socialItems.map((item, index) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={
              isVisible
                ? {
                    duration: 0.5,
                    delay: 1.5 + index * 0.2,
                  }
                : {}
            }
          >
            <a href={item.link} target='_blank'>
              <Image
                width={32}
                height={32}
                src={item.icon}
                alt={item.title}
                className='hover:opacity-70 transition-opacity'
              />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </AnimatePresence>
  )
}

export default SocialsList
