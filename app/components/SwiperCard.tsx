'use client'

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import Image from 'next/image'
import { Autoplay } from 'swiper/modules'

export default function SwiperCard({
  items,
  paginationImages,
  className,
}:{
  
  items: { card: React.ReactNode; src: string }[];
  paginationImages?: boolean[];
  className?: string;
}) {
  const [swiper ,setSwiper]= useState<SwiperType | null>(null)
  useEffect(() => {}, [swiper])

  // catch the progress of the swiper and use it at paginnation
  const [progress ,setProgress]= useState(0)
  // console.log(progress);

  // update progress every second 
  useEffect(() => {
 const interval= setTimeout(() => {
    setProgress((prev)=>(prev >= 100? 100 : prev+3.7))
  }, 110)
  return () => clearInterval(interval) // تنظيف بعد كل إعادة تشغيل

  }, [progress])

// return progress to zero when slide change
useEffect(() => {
  swiper?.on('slideChange', () => {
    setProgress(0)
  });
   },[swiper]);


  return (

    <div className='flex flex-col gap-4 w-full h-full'>
      <Swiper
      autoplay={{delay: 3000}}
      modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        className={`w-full ${className || 'h-96'}`}
        // onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) =>setSwiper(swiper)}
      >
        {items.map(({ card }, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full rounded-2xl overflow-hidden">
              {card}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Thumbnails */}
      {paginationImages && (
        <div className='flex gap-4'>
          {items.map(({ src }, i) => (
            
            <div 
            onClick={() => swiper?.slideTo(i)}
            className={`${swiper?.realIndex===i && "shadow-md -translate-y-5 border-rose-500 border-2 opacity-90"} relative cursor-pointer hover:-translate-y-5 hover:-shadow-md duration-200 opacity-90  z-4 h-40  rounded-2xl max-w-lg w-full m overflow-hidden`} key={i}>
    
        {/* paginnation effect  */}          
          {swiper?.realIndex === i && (
            <div style={{width:`${progress}%`}} className='absolute duration-200   inset-0 w-0  bg-gray-600 opacity-50 z-10'></div>
          )}
              <Image
                alt='image pagination'
                src={src}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover'
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
