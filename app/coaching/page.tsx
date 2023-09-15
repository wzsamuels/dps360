import Image from "next/image"
import hero from "@/public/3.jpg"

const CoachingPage = () => {
  return (
    <div className="w-full flex flex-col items-center pb-8">
      <div className="relative w-full h-full md:h-[500px]">
        <Image src={hero} alt="hero" className="w-full h-full object-cover object-top"/>
        <div className="w-full h-full absolute top-0 bg-black opacity-40"/>
        <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">          
          <h1 className="text-4xl text-center py-4">Individiual and Team Coaching</h1>
        </div>
      </div>
      <h2>Interested in setting up a Personal Training Session? Would you like to discuss your needs with a Personal Trainer?</h2>

<p>We have customized trainings that meet your needs or align with your developmental journey. Working with us gives that safety and most impact on your way to achieving your fitness goals and being a better player. 
 
 Whether you are looking to perfect some skills, gain confidence, increase stamina or raise your game, we can help by carefully analyzing your personal goals, skill set and potential, and design a program that is safe, effective and specific to you. 
 </p>
      <h2 className="text-2xl text-center mt-16 mb-4">Individual Rates</h2>    
      <div className="grid grid-cols-3 grid-rows-3 rounded-md border-themeGreen border max-w-xl">
        <div className="bg-themeGreen text-white p-2"></div>
        <div className="bg-themeGreen text-white font-bold p-2">30 Minute Session</div>
        <div className="bg-themeGreen text-white font-bold p-2">1 Hour Session</div>
        <div className="bg-green-100 p-2">Once Weekly</div>
        <div className="bg-green-100 p-2">$45 per Session</div>
        <div className="bg-green-100 p-2">$80 per session</div>
        <div className="bg-themeGreen p-2 text-white">Twice Weekly</div>
        <div className="bg-themeGreen p-2 text-white">$40 per session</div>
        <div className="bg-themeGreen p-2 text-white">$70 per session</div>
      </div>      
      <div>
      <h2 className="text-2xl text-center mt-16 mb-4">Team Rates</h2>
        <div className="grid grid-cols-3 grid-rows-3 rounded-md border-themeGreen border max-w-xl ">
        <div className="bg-themeGreen text-white p-2"></div>
        <div className="bg-themeGreen text-white font-bold p-2">30 Minute Session</div>
        <div className="bg-themeGreen text-white font-bold p-2">1 Hour Session</div>
        <div className="bg-green-100 p-2">1 - 11 Players</div>
        <div className="bg-green-100 p-2">$80 per Session</div>
        <div className="bg-green-100 p-2">$150 per Session</div>
        <div className="bg-themeGreen p-2 text-white">11+ Players</div>
          <div className="bg-themeGreen p-2 text-white">$120 per session</div>
          <div className="bg-themeGreen p-2 text-white">$250 per session</div>
        </div>
      </div>
      </div>
  )
}

export default CoachingPage