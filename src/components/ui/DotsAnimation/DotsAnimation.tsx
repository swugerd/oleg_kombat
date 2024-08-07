import { IDotsAnimationProps } from '@/types/props'
import { FC } from 'react'

const DotsAnimation: FC<IDotsAnimationProps> = ({ color }) => {
  const rows = 6
  const cols = 16
  const dots = Array.from({ length: rows * cols })

  return (
    <div className='flex justify-center items-center absolute bottom-[20px] right-[180px] z-[100]'>
      <div className='grid grid-cols-16 gap-4'>
        {dots.map((_, index) => (
          <div
            key={index}
            className={`w-[4px] h-[4px] bg-[#D2CCFF] rounded-full`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default DotsAnimation
