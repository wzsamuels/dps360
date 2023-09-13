'use client'

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-dark.png" 
import logoLight from "@/public/logo-white.png" 
import { useEffect, useState } from 'react'

const navItems = [
  {
    text: "Contact",
    href: "/contact"
  },
  {
    text: "Events",
    href: "/events"
  },
  {
    text: "Coaching",
    href: "/coaching"
  }
]

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    console.log(scrollPosition);
    setScrollPosition(scrollPosition);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = scrollPosition > 0 ? "bg-white text-themeGreen" : "bg-themeGreen text-white";
  return (
    <nav className={`${navClass} w-full flex h-16 sticky top-0 transition-all duration-300 z-20`}>
      <Link href='/'>
        {
          scrollPosition > 0 ?
          <Image src={logoLight} className='h-full w-auto' alt="DPS Logo"/>
          :
          <Image src={logo} className='h-full w-auto' alt="DPS Logo"/>
        }
      </Link>
      <div className='flex items-center justify-center w-full'>
        {navItems.map(item => 
          <Link className='px-4 py-2 hover:text-gray-200'  href={item.href} key={item.text}>{item.text}</Link>
        )}
      </div>
    </nav>
  )
}

export default Nav;