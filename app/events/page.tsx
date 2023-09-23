'use client'

import Image from 'next/image';
import event1 from '@/public/event01.jpg'
import event2 from '@/public/event02.jpg'
import event3 from '@/public/event03.jpg'
import event4 from '@/public/about05.jpg'
import stadium1 from "@/public/stadium1.jpg"
import stadium2 from "@/public/stadium2.jpg"
import stadium3 from "@/public/stadium4.jpg"
import tasl1 from "@/public/tasl1.jpg"
import { Teko } from 'next/font/google';
import { Fade, Slide } from 'react-awesome-reveal';

const teko = Teko({ subsets: ['latin'], weight: '400' })

const EventPage = () => {
  return (
    <div className='text-center p-2 md:p-4'>
      <Slide direction='down'>
        <h1 className={`${teko.className} text-5xl md:text-6xl my-6`}>Year Round Programs</h1>      
      </Slide>
      <Fade>
        <Image src={event1} className='w-full h-full rounded-xl mx-auto max-w-5xl' alt='Image 1'/>
      </Fade>

      <section className='my-12'>
        <Slide direction='right'>
          <h2 className={`${teko.className} text-4xl md:text-5xl my-8`}>Summer Classics Tournament</h2>
        </Slide>
        <Slide direction='left'>
          <p className='text-xl md:text-2xl my-8'>RDU Soccer Stars Vs Marsh Creek Bombers</p>
        </Slide>
        <Fade>
          <Image src={event2} alt="image" className='w-full h-full rounded-xl mx-auto my-8 max-w-2xl'/>
        </Fade>
      </section>

      <section className='my-12'>
        <Slide direction='left'>
          <h2 className={`${teko.className} text-4xl md:text-5xl my-8`}>Summer Soccer Camps for All Ages</h2>
        </Slide>
        <Slide direction='right'>
          <p className='text-xl md:text-2xl my-8'>Registrations are open all year round for kids of different ages for 2 weeks camp. Check in for more information.</p>
        </Slide>
        <Fade>
          <Image src={event3} alt="image" className='w-full h-full rounded-xl mx-auto my-8 max-w-4xl'/>
          <Image src={event4} alt="image" className='w-full h-full rounded-xl mx-auto my-8 max-w-4xl'/>
          </Fade>
      </section>

      <section className='my-12'>
        <Slide direction='right'>
          <h2 className={`${teko.className} text-4xl md:text-5xl my-8`}>TASL Participation Sponsorship</h2>
        </Slide>
        <Slide direction='left'>
          <p className='text-xl md:text-2xl my-4'>Triangle Adult Soccer League individual participation sponsorship can be secured on first come first served basis. Contact us for inquiries and application.</p>
        </Slide>
        <Fade>
          <Image src={tasl1} alt="image" className='w-full h-full rounded-xl mx-auto my-8 max-w-lg'/>
        </Fade>
      </section>

      <section className='my-12'>
        <Slide direction='left'>
          <h2 className={`${teko.className} text-4xl md:text-5xl my-8`}>Stadium Spotlight Soccer Game Experience</h2>
        </Slide>
        <Fade>
          <Image src={stadium1} alt="image" className='w-full h-full rounded-xl mx-auto my-8 max-w-4xl'/>
          <Image src={stadium2} alt="image" className='w-full h-full rounded-xl mx-auto my-8 max-w-4xl'/>
          <Image src={stadium3} alt="image" className='w-full h-full rounded-xl mx-auto my-8 max-w-4xl'/>
        </Fade>
      </section>      
    </div>
  );
}

export default EventPage
