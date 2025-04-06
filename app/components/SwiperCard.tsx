'use client'

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'

export default function SwiperCard ({
  items,
  paginationImages
}: {
  items: { card: React.ReactNode; src: string }[]
  paginationImages?: boolean[]
}) {

  return (
    <>
      <div className='flex flex-col gap-4 '>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          {items.map(({ card, src }, i) => (
            <SwiperSlide key={i}>{card}</SwiperSlide>
          ))}
        </Swiper>

        {paginationImages &&
          items.map(({ src }, i) => (
            <div className='w-40 h-40 relative' key={i}>
              <Image
                alt='image pagination'
                src={src}
                fill
                className='object-cover'
              />
            </div>
          ))}
      </div>
    </>
  )
}
