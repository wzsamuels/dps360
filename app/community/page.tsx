'use client'

import {useState} from 'react'

import Hero from "@/components/Hero";
import heroImage from "@/public/9.jpg"
import image1 from "@/public/event1.jpg"
import image2 from "@/public/event2.jpg"
import Image, { StaticImageData } from "next/image";
import community1 from "@/public/community01.jpg"
import community2 from "@/public/community02.jpg"
import community3 from "@/public/community03.jpg"
import community4 from "@/public/community04.jpg"
import community5 from "@/public/community05.jpg"
import Modal from '@/components/Modal';

const CommunityPage = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<StaticImageData | null>(null)

  return (
    <div className="text-center">
      <Hero image={heroImage}>
        <h1 className="text-3xl md:text-4xl">Community Development Initiatives</h1>
      </Hero>
      <div className="p-4 mx-auto">
        <p className="py-4 text-2xl"> In the spirit of community development, promoting progress, inclusiveness and overall positive societal change are central to our activities and  the following are our ongoing initiatives which would continue to be mainstay annual projects with open collaborations, partnerships, and sponsorship.</p>
        <Image src={image1} alt="Image 1" className="w-full max-w-2xl h-auto mx-auto"/>
        <Image src={image2} alt="Image 1" className="w-full max-w-2xl h-auto mx-auto"/>
        <h2 className="py-4 text-3xl max-w-2xl mx-auto my-8">City of Durham Neighborhood Improvement Services International Soccer Tournament</h2>
        <Image src={community2} alt="Image 1" className="w-full max-w-2xl h-auto mx-auto"/>
        <div className="flex flex-wrap justify-center items-center gap-4 my-4 max-w-[1200px] mx-auto">
          <Image onClick={() => {setModalOpen(true); setModalContent(community1)}} src={community1} alt="Image 1" className="w-full max-w-xl h-full max-h-[36rem] object-cover aspect-square hover:cursor-pointer hover:opacity-80"/>
          <Image onClick={() => {setModalOpen(true); setModalContent(community5)}} src={community5} alt="Image 1" className="w-full max-w-xl h-full max-h-[36rem] object-cover aspect-square hover:cursor-pointer hover:opacity-80"/>
          <Image onClick={() => {setModalOpen(true); setModalContent(community3)}} src={community3} alt="Image 1" className="w-full max-w-xl h-full max-h-[36rem] object-cover aspect-square hover:cursor-pointer hover:opacity-80"/>
          <Image onClick={() => {setModalOpen(true); setModalContent(community4)}} src={community4} alt="Image 1" className="w-full max-w-xl h-full max-h-[36rem] object-cover aspect-square hover:cursor-pointer hover:opacity-80"/>
        </div>
      </div>
      {
        modalOpen && modalContent && (
          <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
            <Image src={modalContent} alt="Image 1" className="w-full h-full object-cover"/>         
          </Modal>
        )
      }
    </div>
  );
}

export default CommunityPage