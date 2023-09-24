'use client'

import Image from "next/image"
import coaching1 from "@/public/coaching01.jpg"
import coaching2 from "@/public/coaching02.jpg"
import coaching4 from "@/public/coaching04.jpg"
import coaching5 from "@/public/coaching05.jpg"

import { Teko } from "next/font/google"
import { Fade, Slide } from "react-awesome-reveal"
const teko = Teko({ subsets: ['latin'], weight: '400' })

const CoachingPage = () => {
  return (
    <div className='text-center p-0 sm:p-2 md:p-4 flex flex-col items-center'>
      <Slide direction='down'>
        <h1 className={`${teko.className} text-5xl md:text-6xl my-6`}>Individiual and Team Coaching</h1>
      </Slide>
      <Fade>

        <Image src={coaching1} className='w-full h-full rounded-none sm:rounded-xl mx-auto max-w-5xl' alt='Image 1'/>
      </Fade>

      <section className='my-12 max-w-5xl'>
        <Slide direction='right'>
          <h2 className={`${teko.className} text-4xl md:text-5xl my-8`}>Interested in setting up a Personal Training Session? Would you like to discuss your needs with a Personal Trainer?</h2>
        </Slide>
        <Slide>
        <p className='text-xl md:text-2xl my-8'>      
            Whether you are looking to perfect some skills, gain confidence, increase stamina or raise your game, we can help by carefully analyzing your personal goals, skill set and potential, and design a program that is safe, effective and specific to you. 
          </p>
        </Slide>
        <Fade>
          <video autoPlay loop controls muted className='w-full h-full rounded-none sm:rounded-xl mx-auto max-w-5xl'>
            <source src={"training.mov"} type="video/mp4" />
          </video>
        </Fade>
      </section>

      <section className="z-10">
        <Slide direction="down">
          <h2 className={`${teko.className} text-4xl md:text-5xl my-8`}>Individual Rates</h2>    
          </Slide>
        <Slide direction="up">
          <div className="grid grid-cols-3 grid-rows-3 rounded-md border-white border-4 max-w-xl">
            <div className="bg-green-700 text-white py-2 px-4"></div>
            <div className="bg-green-700 text-white font-bold py-2 px-4">30 Minute Session</div>
            <div className="bg-green-700 text-white font-bold py-2 px-4">1 Hour Session</div>
            <div className="bg-green-600 p-2">Once Weekly</div>
            <div className="bg-green-600 p-2">$45 per Session</div>
            <div className="bg-green-600 p-2">$80 per session</div>
            <div className="bg-green-700 p-2 text-white">Twice Weekly</div>
            <div className="bg-green-700 p-2 text-white">$40 per session</div>
            <div className="bg-green-700 p-2 text-white">$70 per session</div>
          </div>
        </Slide>
      </section>

      <Fade>
        <Image src={coaching5} className='w-full h-full rounded-none sm:rounded-xl mx-auto my-8 max-w-5xl' alt='Image 1'/>
      </Fade>

      <section className="z-10">
        <Slide direction="down">
          <h2 className={`${teko.className} text-4xl md:text-5xl my-8`}>Team Rates</h2>
        </Slide>
        <Slide direction="up">
          <div className="grid grid-cols-3 grid-rows-3 rounded-md border-white border-4 max-w-xl">
            <div className="bg-green-700 text-white py-2 px-4"></div>
            <div className="bg-green-700 text-white font-bold py-2 px-4">30 Minute Session</div>
            <div className="bg-green-700 text-white font-bold py-2 px-4">1 Hour Session</div>
            <div className="bg-green-600 p-2">1 - 11 Players</div>
            <div className="bg-green-600 p-2">$80 per Session</div>
            <div className="bg-green-600 p-2">$150 per Session</div>
            <div className="bg-green-700 p-2 text-white">11+ Players</div>
            <div className="bg-green-700 p-2 text-white">$120 per session</div>
            <div className="bg-green-700 p-2 text-white">$250 per session</div>
          </div>
        </Slide>
      </section>

      <Fade className="my-16">
        <Image src={coaching4} className='w-full h-full rounded-none sm:rounded-xl mx-auto my-8 max-w-5xl' alt="Coaching image w-full h-full "/>
      </Fade>
    </div>
  )
}

export default CoachingPage