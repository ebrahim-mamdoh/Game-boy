import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (<>
  <Link className=' text-xl  lg:text-2xl flex gap-2 font-semibold my-2' href={"/"}>
  <h1 className='text-rose-500'>Gaming</h1>
  <span>Boi</span>
  </Link>
  </>
  )
}
