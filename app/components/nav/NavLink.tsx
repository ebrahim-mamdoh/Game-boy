import Link from 'next/link';
import React, { ReactElement } from 'react';

export default function NavLink({ navlink }: { navlink: { link: string; label: string; icon: ReactElement } }) {
  return (
    <> 
      <Link href={navlink.link} className="flex gap-2 items-center p-2 rounded-md">
        {React.cloneElement(navlink.icon, { className: "w-5 h-5" })}
        <span>{navlink.label}</span>
      </Link>
    </>
  );
}
