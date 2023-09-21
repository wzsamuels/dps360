'use client'

import {Fade} from "react-awesome-reveal";

import Image from 'next/image'
import image1 from "@/public/1.jpg"
import image2 from "@/public/5.jpg"
import image3 from "@/public/9.jpg"
import image4 from "@/public/10.jpg"
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main className="w-full relative">
      <div className='bg-themeGreen text-center flex flex-col items-center justify-center font-bold text-white  box pb-64'>
        <p className='text-3xl max-w-xl w-full py-4 md:py-6'>Helping players of all ages, skill sets, and backgrounds find success and fulfilment in the game of soccer. </p>     
      </div>
      <Image src={image1} alt="Soccer Image 1" className='max-w-3xl mx-auto w-full rounded-none md:rounded-xl -mt-64 relative z-10'/>
      <div className='p-4'>

        <Fade className="flex flex-col-reverse md:flex-row my-16">
          <div className='flex-1'>
            <Image src={image2} className='rounded-xl' alt='Image 2'/>
          </div>
          <div className='flex-1 px-2 py-4 flex flex-col items-center justify-center'>
            <h2 className='text-2xl text-center py-4'>Personal Training Booking</h2>      
            <p className='text-center py-4'>We have customized trainings that meet your needs or align with your developmental journey. Working with us gives that safety and most impact on your way to achieving your fitness goals and being a better player. </p>        
            <Link href="/coaching" className='py-2 px-4 bg-themeGreen text-white rounded-xl'>Learn More</Link>
          </div>
        </Fade>

        <Fade className="flex flex-col-reverse md:flex-row-reverse my-16">
          <div className='flex-1'>
            <Image src={image3} className='rounded-xl' alt='Image 3'/>
          </div>
          <div className='flex-1 px-2 py-4 flex flex-col items-center justify-center'>
            <h2 className='text-2xl text-center py-4'>Community Development Initiatives</h2>
            <p className='text-center py-4'> 
              Ongoing, annual initiatives including open collaborations, partnerships, and sponsorships.
            </p>
            <Link href="/community" className='py-2 px-4 bg-themeGreen text-white rounded-xl'>Learn More</Link>
          </div>
        </Fade>    

        <Fade className="flex flex-col-reverse md:flex-row my-16">
          <div className='flex-1'>
            <Image src={image4} className='rounded-xl' alt='Image 2'/>
          </div>
          <div className='flex-1 px-2 py-4 flex flex-col items-center justify-center'>
            <h2 className='text-2xl text-center py-4'> Year-Round Programs</h2>      
            <p className='text-center py-4'>Soccer camps and tournments for adults and children.</p>
            <Link href="/events" className='py-2 px-4 bg-themeGreen text-white rounded-xl'>Learn More</Link>
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
      </div>
    </main>
  )
}
