import React from 'react'
import './carousel.css'

interface carouselProps{
    images:string[]
}

const Carousel = ({images}:carouselProps) => {


  return (
  <>
    <div className='w-full h-[14.5rem] flex py-2 overflow-x-auto my-[5rem] gap-4 scrollbar-hide'>
          {images?.length > 0 &&
    images.map((img: string, index) => (
      <div key={index} className={` ${index%2==0?"-rotate-2":"rotate-2"} min-w-[200px] h-full flex-shrink-0 rounded-2xl overflow-hidden`}>
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
    ))}
</div>


  </>
  )
}

export default Carousel