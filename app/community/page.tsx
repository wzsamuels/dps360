'use client'

import {useState} from 'react'

import Image, { StaticImageData } from "next/image";
import community1 from "@/public/community01.jpg"
import community2 from "@/public/community02.jpg"
import community3 from "@/public/community03.jpg"
import community4 from "@/public/community04.jpg"
import community5 from "@/public/community05.jpg"
import community6 from "@/public/community06.jpg"
import community7 from "@/public/community07.jpg"
import community8 from "@/public/community08.jpg"
import community9 from "@/public/community09.jpg"
import { Teko } from 'next/font/google';
import { Fade, Slide } from 'react-awesome-reveal';

const teko = Teko({ subsets: ['latin'], weight: '400' })

const CommunityPage = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<StaticImageData | null>(null)

  return (
    <div className='text-center p-0 sm:p-2 md:p-4 '>
      <section className='my-12'>
        <Slide direction='down'>
          <h1 className={`${teko.className} text-5xl md:text-6xl my-6`}>Community Development Initiatives</h1>
        </Slide>
        <Fade fraction={0.25} duration={2000} damping={0.5}>
          <Image src={community1} alt="image" className='w-full h-full rounded-none sm:rounded-xl mx-auto my-4 max-w-5xl'/>
        </Fade>
      </section>

      <section className='my-12'>
        <Slide direction='left'>
          <p className='text-xl md:text-2xl my-8'> In the spirit of community development, promoting progress, inclusiveness and overall positive societal change are central to our activities and  the following are our ongoing initiatives which would continue to be mainstay annual projects with open collaborations, partnerships, and sponsorship.</p>
        </Slide>
        <Fade fraction={0.25} duration={2000} damping={0.5}>
          <Image src={community7} alt="Image 1" className="w-full max-w-2xl h-auto mx-auto my-4"/>
          <Image src={community8} alt="Image 1" className="w-full max-w-2xl h-auto mx-auto my-4"/>
        </Fade>
      </section>

      <section className='my-12'>
        <Slide direction='right'>
          <h2 className={`${teko.className} text-4xl md:text-5xl my-8`}>Pick Up Soccer</h2>
        </Slide>
        <Slide direction='left'>
        <p className='text-xl md:text-2xl my-8'>Join us at CM Herndon Park (511 Scott King Rd, Durham) for some good soccer flex, every Tuesday @6pm and Saturdays @8am.</p>
        </Slide>
        <Fade fraction={0.25} duration={2000} damping={0.5}>
          <Image src={community3} alt="Image 1"  className='w-full h-full rounded-none sm:rounded-xl mx-auto my-4 max-w-5xl'/>
          <Image src={community9} alt="Image 1"  className='w-full h-full rounded-none sm:rounded-xl mx-auto my-4 max-w-5xl'/>
        </Fade>
      </section>

      <section className='my-12'>
        <Slide direction='left'>
          <h2 className={`${teko.className} text-4xl md:text-5xl my-8`}>City of Durham Neighborhood Improvement Services International Soccer Tournament</h2>
        </Slide>
        <Fade fraction={0.25} duration={2000} damping={0.5}>
          <Image src={community2} alt="Image 1"  className='w-full h-full rounded-none sm:rounded-xl mx-auto my-4 max-w-5xl'/>
          <Image src={community6} alt="Image 1"  className='w-full h-full rounded-none sm:rounded-xl mx-auto my-4 max-w-5xl'/>
          <Image src={community4} alt="Image 1"  className='w-full h-full rounded-none sm:rounded-xl mx-auto my-4 max-w-5xl'/>
          <Image src={community5} alt="Image 1"  className='w-full h-full rounded-none sm:rounded-xl mx-auto my-4 max-w-5xl'/>        
        </Fade>
      </section>
    </div>
  );
}

export default CommunityPage