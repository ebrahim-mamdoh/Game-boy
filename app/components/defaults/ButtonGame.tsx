'use client';
import React, { ReactNode } from 'react';
import ButtonSvg from '../ButtonSvg';
import Link from 'next/link';
import { log } from 'console';
import Spinner from './Spinner';
export default function ButtonGame({
  className,
  onClick,
  link,
  text,
  icon,disabled=false,
}: {
  className?: string;
  onClick?: () => void;
  link?: string;
  text?: string;
  icon?: React.ReactNode;disabled?:boolean
}) {
  return (
    <button
    disabled={disabled}
    onClick={() => onClick?.()}

      className={`relative px-4 flex-initial min-w-[100px] gap-2 py-3 text-center m-auto hover:text-rose-400 duration-150 cursor-pointer border-2 border-transparent  ${className || ""}`}
    >
      {ButtonSvg(false)}
      <span className="relative flex justify-center  " >
        {disabled?<Spinner/>:link ? <Link href={link}>{text}</Link> : text}
      </span>
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}
