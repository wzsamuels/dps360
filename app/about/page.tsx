import Image from "next/image"
import image from "@/public/8.jpg"

const AboutPage = () => {
  return (
    <div className="relative w-full h-screen">
      <Image src={image} className="overflow-hidden object-cover w-full h-full" alt="background image"/>
      <div className="w-full h-full absolute top-0 bg-black opacity-40"/>
      <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <h1 className="text-3xl">About Us</h1>
    <p>We know that the buildings are roads we see are not the society but the people who leave in it.
    Our mission is therefore to continue to promote the unity and growth of the society by helping players of all ages, skill sets, and backgrounds find success and fulfilment in the game of soccer. </p>
    
    <h2 className="text-2xl">How we do it:</h2>
    <p>We provide the platform for weekly peak up games that bring together players of different age range and social background. Participants have the rare opportunity to connect and network with others through our post games discussions.</p>
    <p>We believe in game centered application of the technical, tactical, mental, and physical components of soccer, as such our trainings and games are focused on continuous improvements. </p>
    <p>We are convinced that everyone can reach their potential as athletes and can flourish with proper communication, socialization, and application of our mission. We provide an encouraging environment that cultivates passion, respect, integrity, maturity, and enthusiasm through soccer. </p>
    </div>
    </div>
  )
}

export default AboutPage