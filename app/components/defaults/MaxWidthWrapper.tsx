import { cn } from '@/lib/utils';
import React from 'react'

export default function MaxWidthWrapper({children ,className}: {children: React.ReactNode ;className?: string}) {
  return (
    <section className={cn("max-w-[1375px] mx-auto w-full px-5 sm:max-w-[90%] py-5", className || "")}>
        {children}
    </section>
  )
}
