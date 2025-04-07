import React from 'react'
import MaxWidthWrapper from './defaults/MaxWidthWrapper'
import SwiperCard from './SwiperCard'

export default function Hero () {
  return (
    <div className='mt-8'>
      <SwiperCard
        className='h-[30rem] '
        paginationImages={[true]}
        items={[
          {
            card: (
              <section className='relative rounded-2xl overflow-hidden h-full w-full'>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className='w-full h-full object-cover rounded-2xl'
                >
                  <source src='/spidervideo.mp4' type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </section>
            ),
            src: '/bg2.jpg'
          }
        ]}
      />
    </div>
  )
}
