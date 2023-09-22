'use client'

import {Fade} from "react-awesome-reveal";

import Image from 'next/image'
import image1 from "@/public/1.jpg"
import image2 from "@/public/5.jpg"
import image3 from "@/public/9.jpg"
import image4 from "@/public/10.jpg"
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

import {Teko, Montserrat } from 'next/font/google'
import LinkButton from "@/components/LinkButton";
 
// If loading a variable font, you don't need to specify the font weight
const teko = Teko({ subsets: ['latin'], weight: '400' })
const monst = Montserrat({ subsets:  ['latin']})

export default function Home() {
  return (
    <main className={`w-full relative p-4 ${monst.className}`}>
      <Fade className="flex flex-col-reverse md:flex-row-reverse my-16">
        <div className='flex-1 px-2 py-4 flex flex-col items-center justify-center'>
          <h2 className={`${teko.className} text-4xl text-center py-4`}>Helping players of all ages, skill sets, and backgrounds find success and fulfilment in the game of soccer.</h2>      
        </div>
        <div className='w-full max-w-[1800px] mx-auto'>
          <Image src={image1} className='w-full h-full rounded-xl' alt='Image 1'/>
        </div>        
      </Fade>

      <Fade>        
        <div className="my-16">
          <h2 className='text-2xl text-center py-4'>Personal Training Booking</h2>      
          <p className='text-center py-4'>We have customized trainings that meet your needs or align with your developmental journey. Working with us gives that safety and most impact on your way to achieving your fitness goals and being a better player. </p>        
          <div className="flex w-full justify-center  my-4">
            <LinkButton href="/coaching" >Learn More</LinkButton>
          </div>
          <div className='w-full max-w-[1800px] mx-auto'>
            <Image src={image2} className='w-full h-full rounded-xl' alt='Image 2'/>
          </div>
        </div>
      </Fade>

      <Fade>        
        <div className="my-16">    
          <h2 className='text-2xl text-center py-4'>Community Development Initiatives</h2>      
          <p className='text-center py-4'>Ongoing, annual initiatives including open collaborations, partnerships, and sponsorships.</p>
          <div className="flex w-full justify-center my-4">    
            <LinkButton href="/coaching" >Learn More</LinkButton>
          </div>
          <div className='w-full max-w-[1800px] mx-auto'>
            <Image src={image3} className='w-full h-full rounded-xl' alt='Image 3'/>
          </div>
        </div>
      </Fade>

      <Fade>        
        <div className="my-16">      
          <h2 className='text-2xl text-center py-4'>Year-Round Programs</h2>      
          <p className='text-center py-4'>Soccer camps and tournments for adults and children.</p>        
          <div className="flex w-full justify-center my-4">
            <Link href="/coaching" className='py-2 px-4 bg-themeGreen border border-white text-white rounded-xl hover:opacity-80'>Learn More</Link>
          </div>
          <div className='w-full max-w-[1800px] mx-auto'>
            <Image src={image4} className='w-full h-full rounded-xl' alt='Image 4'/>
          </div>
        </div>
      </Fade>

      <Fade className="w-full flex justify-center">
        <div className="p-4 max-w-lg w-full">
          <h1 className="text-3xl text-center">Contact Us</h1>
          <p className="text-center">
            We&apos;d love to hear from you!
          </p>
          <p className="text-center">
            Feel free to contact us with any questions or concerns.
          </p>
          <p className="text-center"></p>
          <ContactForm/>
        </div>
      </Fade>
    </main>
  )
}
