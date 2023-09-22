import heroImage from '@/public/7.jpg'
import image from '@/public/6.jpg'
import Image from 'next/image';
import stadium1 from "@/public/stadium1.jpg"
import stadium2 from "@/public/stadium2.jpg"
import stadium3 from "@/public/stadium4.jpg"
import tasl1 from "@/public/tasl1.jpg"

const EventPage = () => {
  return (
    <div className='text-center p-4'>
      <h1 className="text-4xl md:text-5xl py-6">Year Round Programs</h1>
      <Image src={heroImage} alt="image" className='mx-auto h-full w-full max-w-[1800px] py-4'/>
      <div className='py-4'>
        <h2 className='text-2xl py-2'>Summer Classics Tournament</h2>
        <p>RDU Soccer Stars Vs Marsh Creek Bombers</p>
      </div>
      <Image src={image} alt="image" className='mx-auto h-full w-full max-w-2xl'/>
      <div className='py-4'>
        <h2 className='text-2xl py-2'>Summer Soccer Camps for All Ages</h2>
        <p>Registrations are open all year round for kids of different ages for 2 weeks camp. Check in for more information.</p>
      </div>
      <div className='py-4'>
        <h2 className='text-2xl py-2'>TASL Participation Sponsorship</h2>
        <p>Triangle Adult Soccer League individual participation sponsorship can be secured on first come first served basis. Contact us for inquiries and application.</p>
        <Image src={tasl1} alt="image" className='mx-auto h-full w-full max-w-xl py-4'/>
      </div>
      <div className='py-4'>
        <h2 className='text-2xl py-2'>Stadium Spotlight Soccer Game Experience</h2>
        <Image src={stadium1} alt="image" className='mx-auto h-full w-full max-w-4xl py-4'/>
        <Image src={stadium2} alt="image" className='mx-auto h-full w-full max-w-4xl py-4'/>
        <Image src={stadium3} alt="image" className='mx-auto h-full w-full max-w-4xl py-4'/>
      </div>      
    </div>
  );
}

export default EventPage
