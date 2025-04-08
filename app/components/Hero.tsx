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
                  <source src={'/spidervideo.mp4'} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </section>
            ),
            src: '/poster.webp'
          },
          {
            card: (
              <section className='relative rounded-2xl overflow-hidden h-full w-full'>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className='object-top w-full h-full object-cover rounded-2xl'
                >
                  <source src={'/call-of-duty-black-ops-6-animated-hero-mobile-01-en-22may24.mp4'} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </section>
            ),
            src: '/call-of-duty-black-ops-6-hero-desktop-01-en-21may24.webp'
          },
          {
            card: (
              <section className='relative rounded-2xl overflow-hidden h-full w-full'>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className='object-top w-full h-full object-cover rounded-2xl'
                >
                  <source src={'/Dragon-Ball-Sparking-Zero-Hero-desktop-01-03oct24.webp'} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </section>
            ),
            src: '/Dragon-Ball-Sparking-Zero-Hero-desktop-01-03oct24.webp'
          },
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
                  <source src={'/cyberpunk-2077-phantom-liberty-video-hero-01-en-11sep23.mp4'} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </section>
            ),
            src: '/cyb.webp'
          },
        ]}
      />
    </div>
  )
}
