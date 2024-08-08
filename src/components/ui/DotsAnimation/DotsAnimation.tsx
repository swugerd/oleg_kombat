import { IDotsAnimationProps } from '@/types/props'
import { FC } from 'react'

const DotsAnimation: FC<IDotsAnimationProps> = ({ className, dotColor }) => {
  const rows = 6
  const cols = 16
  const dots = Array.from({ length: rows * cols })

  return (
    <div
      className={`flex justify-center items-center absolute z-[100] ${className || ''}`}
    >
      <div className='grid grid-cols-16 gap-4'>
        {dots.map((_, index) => (
          <div
            key={index}
            className={`w-[4px] h-[4px] rounded-full ${dotColor || 'bg-[#D2CCFF]'}`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default DotsAnimation
