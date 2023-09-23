'use client'

import {Fade, Slide} from "react-awesome-reveal";
import ContactForm from '@/components/ContactForm'
import {Teko} from 'next/font/google'
import LinkButton from "@/components/LinkButton";

import Image from 'next/image'
import image1 from "@/public/hero.jpg"
import image2 from "@/public/coaching01.jpg"
import image3 from "@/public/community01.jpg"
import image4 from "@/public/event01.jpg"


const teko = Teko({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <div className='text-center p-2 md:p-4'>
      <section className="my-12">
        <h1 className={`${teko.className} text-4xl md:text-5xl text-center my-4`}>Helping players of all ages, skill sets, and backgrounds find success and fulfilment in the game of soccer.</h1>      
        <Fade>
          <Image src={image1}  className='w-full h-full rounded-xl mx-auto my-6 max-w-5xl' alt='Image 1'/>
        </Fade>
      </section>

      <section className="my-12">
        <Slide direction="left">
          <h2 className={`${teko.className} text-4xl text-center my-4`}>Personal Training Booking</h2>      
        </Slide>
        <Slide direction="right">
          <p className='text-center py-4'>We have customized trainings that meet your needs or align with your developmental journey. Working with us gives that safety and most impact on your way to achieving your fitness goals and being a better player. </p>        
        </Slide>
        <Slide direction="down" className="flex w-full justify-center my-4">
          <LinkButton href="/coaching" >Learn More</LinkButton>
        </Slide>
        <Fade>
          <Image src={image2} className='w-full h-full rounded-xl mx-auto my-4 max-w-5xl' alt='Image 1'/>
        </Fade>
      </section>

      <section className="my-12">
        <Slide direction="right">
          <h2 className={`${teko.className} text-4xl text-center py-4`}>Community Development Initiatives</h2>      
        </Slide>
        <Slide direction="left">
          <p className='text-center py-4'>Ongoing, annual initiatives including open collaborations, partnerships, and sponsorships.</p>
        </Slide>
        <Slide direction="down" className="flex w-full justify-center my-4">    
          <LinkButton href="/community" >Learn More</LinkButton>
        </Slide>
        <Fade className='w-full max-w-[1800px] mx-auto'>
          <Image src={image3} className='w-full h-full rounded-xl' alt='Image 3'/>
        </Fade>
      </section>

      <section className="my-12">
        <Slide direction="left">
          <h2 className={`${teko.className} text-4xl text-center py-4`}>Year-Round Programs</h2>      
        </Slide>
        <Slide direction="right">
          <p className='text-center py-4'>Soccer camps and tournments for adults and children.</p>        
        </Slide>
        <Slide direction="down"  className="flex w-full justify-center my-4">
          <LinkButton href="/events">Learn More</LinkButton>
        </Slide>
        <Fade className='w-full max-w-[1800px] mx-auto'>
          <Image src={image4} className='w-full h-full rounded-xl' alt='Image 4'/>
        </Fade>
      </section>

      <Fade className="w-full flex justify-center">
        <div className="p-4 max-w-lg w-full">
          <h3 className={`${teko.className} text-5xl text-center`}>Contact Us</h3>
          <p className="text-center my-2">We&apos;d love to hear from you!</p>
          <p className="text-center">Feel free to contact us with any questions or concerns.</p>
          <ContactForm/>
        </div>
      </Fade>
    </div>
  )
}
