import Hero from '@/components/Hero';
import heroImage from '@/public/7.jpg'
import image from '@/public/6.jpg'
import Image from 'next/image';

const EventPage = () => {
  return (
    <div className='text-center'>
      <Hero image={heroImage}>
        <h1 className="text-4xl md:text-5xl">Year Round Programs</h1>
      </Hero>
      <div className='p-4'>
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
      </div>
    </div>
    </div>
  );
}

export default EventPage
