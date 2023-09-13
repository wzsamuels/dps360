import Image from 'next/image'
import image1 from "@/public/1.jpg"
import image2 from "@/public/2.jpg"
import image3 from "@/public/3.jpg"
import image4 from "@/public/4.jpg"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-full relative">
      <div className='bg-themeGreen box pb-64'>
        <h1 className='text-5xl text-white py-8 px-4 text-center font-bold'>Differentials Planet Soccer 360</h1>        
      </div>
      <Image src={image1} alt="Soccer Image 1" className='max-w-[600px] mx-auto w-full rounded-xl -mt-64 relative z-10'/>
      <div className='p-4'>
        <div className="flex flex-col-reverse md:flex-row my-16">
          <div className='flex-1'>
            <Image src={image2} className='rounded-xl' alt='Image 2'/>
          </div>
          <div className='flex-1 px-2 flex flex-col items-center justify-center'>
            <h2 className='text-2xl text-center py-4'>Personal Training Booking</h2>      
            <p className='text-center py-4'>Whether you are looking to perfect some skills, gain confidence, increase stamina or raise your game, we can help by carefully analyzing your personal goals, skill set and potential, and design a program that is safe, effective and specific to you.</p>        
            <Link href="/coaching" className='py-2 px-4 bg-themeGreen text-white rounded-xl'>Learn More</Link>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row-reverse my-16">
          <div className='flex-1'>
            <Image src={image3} className='rounded-xl' alt='Image 3'/>
          </div>
          <div className='flex-1 px-2'>
            <h2 className='text-2xl text-center py-4'>Community Development Initiatives</h2>
            <p className='text-center py-4'> 
              In the spirit of community development, promoting progress, inclusiveness and overall positive societal change, the following are our ongoing initiatives which would continue to be mainstay annual project the open collaborations, partnerships, and sponsorship.
            </p>
          </div>
        </div>    

        <div className="flex flex-col-reverse md:flex-row my-16">
          <div className='flex-1'>
            <Image src={image2} className='rounded-xl' alt='Image 2'/>
          </div>
          <div className='flex-1 px-2'>
            <h2 className='text-2xl text-center py-4'> Year-Round Programs</h2>      
            <p className='text-center py-4'>Soccer camps and tournments for adults and children</p>
            <Link href="/events" className='py-2 px-4 bg-themeGreen text-white rounded-xl'>Learn More</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
