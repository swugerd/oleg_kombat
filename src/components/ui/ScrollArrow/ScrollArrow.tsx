import scrollArrow from '@/../public/img/icons/scroll-arrow.svg'
import Image from 'next/image'

const ScrollArrow = () => {
  return (
    <button className='absolute right-[75px] bottom-[20px] transition-all hover:bottom-[30px]'>
      <Image src={scrollArrow} width={69} height={69} alt='Scroll' />
    </button>
  )
}

export default ScrollArrow
