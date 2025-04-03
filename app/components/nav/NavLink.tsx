"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactElement } from 'react';

export default function NavLink({ navlink }: { navlink: { link: string; label: string; icon: ReactElement } }) {
  const pathName= usePathname();
  console.log();
  const isActive = pathName === navlink.link;
  
  return (
    <> 
      <Link href={navlink.link} className={`flex ${isActive?"text-rose-400 " : "text-gray-900"}
      hover:text-rose-400  my-2 duration-150 gap-2 items-center p-2 rounded-md`}>
        {React.cloneElement(navlink.icon, { className: "w-5 h-5" })}
        <span>{navlink.label}</span>
      </Link>
    </>
  );
}
