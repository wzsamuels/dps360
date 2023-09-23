import Nav from '@/components/Nav'
import './globals.css'
import type { Metadata } from 'next'
import {Montserrat } from 'next/font/google'
 
const monst = Montserrat({ subsets:  ['latin']})

export const metadata: Metadata = {
  title: 'DPS 360',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${monst.className} min-h-screen relative bg-themeGreen text-white overflow-x-hidden`}>
        <Nav/>
        <main className="pb-16">
          {children}
        </main>
        <footer className='text-center absolute bottom-0 w-full text-[.9rem] md:text-base p-1 md:p-4 '>
          Differentials Planet Soccer 360 | 508 Felicia Street Durham NC 27704 | info@dpsoccer360.com | (336) 417-7759
        </footer>
      </body>
    </html>
  )
}