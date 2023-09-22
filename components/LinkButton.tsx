import React, { ReactNode } from 'react';
import Link from "next/link"
import { Url } from 'next/dist/shared/lib/router/router';

interface LinkButtonType {
  children: ReactNode
  href: Url
  className?: string
}

const LinkButton = ({children, href, className}: LinkButtonType) => {
  return (
    <Link href={href} className={`${className} py-2 px-4 bg-white text-themeGreen border-2 border-white font-bold rounded-xl hover:opacity-70`}>
      {children}
    </Link>
  )
}

export default LinkButton