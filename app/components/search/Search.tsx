import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

export default function Search() {
  return (<>
    <div className='w-full flex relative  group items-center gap-2 justify-between px-4 border border-input  rounded-xl md:w-[40%] bg-main'>
    <Input className="py-2 text-base w-full bg-transparent text-gray-50 border-none outline-none ring-0 !border-none !outline-none !ring-0 placeholder:text-gray-400" />
    <SearchIcon className='w-5 h-5 cursor-pointer  duration-150 group-hover:text-rose-400'/>
    </div>
  </>
  )
}
