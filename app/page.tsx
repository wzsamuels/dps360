import Image from 'next/image'
import image1 from "@/public/1.jpg"
import image2 from "@/public/2.jpg"
import image3 from "@/public/3.jpg"
import image4 from "@/public/4.jpg"

export default function Home() {
  return (
    <main className="w-full">
      <div>
        <h1 className='text-5xl text-white'>Differentials Planet Soccer 360</h1>
        <Image src={image1} alt="Soccer Image 1" className='max-w-[600px] w-full rounded-xl'/>
      </div>
      <div className="flex flex-col md:flex-row">
        <Image src={image2} className='max-w-[50%]'/>
        <div>
          <h2>Personal Training Booking</h2>      
          <p></p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className='flex-1'>
          <h2>Community Development Initiatives</h2>
          <p>        
          </p>
        </div>
        <div className=' flex-1'>
          <Image src={image3}/>
          </div>
      </div>    
    </main>
  )
}
