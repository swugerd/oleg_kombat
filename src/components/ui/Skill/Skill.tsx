import { useObserver } from '@/hooks/useObserver'
import { ISkillProps } from '@/types/props'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC, useRef } from 'react'

const Skill: FC<ISkillProps> = ({ item }) => {
  const ref = useRef<HTMLLIElement>(null)
  const { isVisible } = useObserver(ref)

  return (
    <motion.li
      className='flex flex-col items-center py-[15px] px-[45px] rounded-[10px] border border-light-gray mx-[10px] my-[15px] box-border max-w-[134px]'
      initial={{ opacity: 0, y: 75 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 75,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      ref={ref}
    >
      <Image
        src={item.icon}
        alt={item.title}
        width={48}
        height={48}
        className='mb-[15px]'
      />
      <h5 className='text-white text-[18px] leading-[27px] font-extrabold text-nowrap'>
        {item.title}
      </h5>
    </motion.li>
  )
}

export default Skill
