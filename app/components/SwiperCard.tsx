'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'

export default function SwiperCard({
  items,
  paginationImages,
  className,
}: {
  items: { card: React.ReactNode; src: string }[];
  paginationImages?: boolean[];
  className?: string;
}) {
  return (
    <div className='flex flex-col gap-4 w-full h-full'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        className={`w-full ${className || 'h-96'}`}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
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
            <div className='cursor-pointer hover:-translate-y-5 hover:-shadow-md duration-200 opacity-90  z-4 h-40 relative rounded-2xl max-w-lg w-full m overflow-hidden' key={i}>
              <Image
                alt='image pagination'
                src={src}
                fill
              
                className='object-cover'
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
