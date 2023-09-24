'use client'

import Image from "next/image"
import about1 from "@/public/about01.jpg"
import about2 from "@/public/about02.jpg"
import about3 from "@/public/about03.jpg"
import about4 from "@/public/about04.jpg"
import about5 from "@/public/about05.jpg"
import about6 from "@/public/about06.jpg"
import about7 from "@/public/about07.jpg"
import about8 from "@/public/about08.jpg"
import about9 from "@/public/about09.jpg"
import { Teko } from "next/font/google"
import { Fade, Slide } from "react-awesome-reveal"
const teko = Teko({ subsets: ['latin'], weight: '400' })

const AboutPage = () => {
  return (
    <div className='text-center p-0 sm:p-2 md:p-4 w-full mx-auto max-w-5xl'>
      <section className='my-12'>
        <Slide direction='down'>
          <h1 className={`${teko.className} text-5xl md:text-6xl my-6`}>Who We Are</h1>
        </Slide>
        <Slide direction='up'>
        <p className='text-lg md:text-xl my-8'>
          At Differentials Planet Soccer360 (DPSoccer360), we know that the buildings and the roads we see are not the society but the people who live in it. Our mission is therefore to continue to promote the unity and growth of the society by helping players of all ages, skill sets, and backgrounds find success and fulfilment in the game of soccer.
        </p>
        </Slide>
        <Fade>
          <Image src={about1} className='w-full h-full rounded-xl mx-auto my-8 max-w-4xl' alt='Image 1'/>
          <Image src={about5} className='w-full h-full rounded-xl mx-auto my-8 max-w-4xl' alt='Image 1'/>
        </Fade>
      </section>

      <section className='my-12'>
        <Slide direction="left">      
          <h2 className={`${teko.className} text-4xl md:text-5xl my-8`}>How we do it:</h2>
        </Slide>
        <Slide direction="right">
          <p className='text-xl md:text-2xl my-8'>
            We provide the platform for weekly peak up games that bring together players of different age range and social background. Participants have the rare opportunity to connect and network with others through our post games discussions.
          </p>
        </Slide>
        <Fade>
          <Image src={about2} alt="" className='w-full h-full rounded-xl mx-auto my-8 max-w-4xl'/>
          <Image src={about6} className='w-full h-full rounded-xl mx-auto my-8 max-w-4xl' alt='Image 1'/>
        </Fade>
      </section>

      <section className='my-12'>
        <Slide direction="right">
          <h2 className={`${teko.className} text-4xl md:text-5xl my-8`}>Our Vision:</h2>
        </Slide>
        <Slide direction="left">
          <p className='text-xl md:text-2xl my-8'>
            We believe in game centered application of the technical, tactical, mental, and physical components of soccer, as such our trainings and games are focused on continuous improvements.
          </p>
        </Slide>
        <Fade>
          <Image src={about3} alt="" className='w-full h-full rounded-xl mx-auto my-8 max-w-4xl'/>
          <Image src={about4} alt="" className='w-full h-full rounded-xl mx-auto my-8 max-w-4xl'/>
        </Fade>
      </section>

      <section className='my-12'>
        <Slide direction="left">
          <h2 className={`${teko.className} text-4xl md:text-5xl my-8`}>Our Mission:</h2>
        </Slide>
        <Slide direction="right">
          <p className='text-xl md:text-2xl my-8'>
            We are convinced that everyone can reach their potential as athletes and can flourish with proper communication, socialization, and application of our mission. We provide an encouraging environment that cultivates passion, respect, integrity, maturity, and enthusiasm through soccer.
          </p>
        </Slide>
        <Fade>
          <Image src={about7} className='w-full h-full rounded-xl mx-auto my-8 max-w-4xl' alt='Image 1'/>
          <Image src={about8} className='w-full h-full rounded-xl mx-auto my-8 max-w-4xl' alt='Image 1'/>
          <Image src={about9} className='w-full h-full rounded-xl mx-auto my-8 max-w-4xl' alt='Image 1'/>
        </Fade>
      </section>
    </div>
  )
}

export default AboutPage