import React from 'react'
import MaxWidthWrapper from './defaults/MaxWidthWrapper'
import SwiperCard from './SwiperCard'

export default function Hero() {
  return (<>
  <MaxWidthWrapper >
    <SwiperCard paginationImages={[true]}  items={[{card:<div className='text-2xl font-bold '></div> ,src:'/bg2.jpg'}]}/>
  </MaxWidthWrapper>
  </>
  
  )
}
