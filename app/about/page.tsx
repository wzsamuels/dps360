import Image from "next/image"
import image1 from "@/public/8.jpg"
import image2 from "@/public/13.jpg"
import image3 from "@/public/15.jpg"
import about1 from "@/public/about1.jpg"
import about2 from "@/public/about2.jpg"
import { Teko } from "next/font/google"
const teko = Teko({ subsets: ['latin'], weight: '400' })

const AboutPage = () => {
  return (
    <div className="w-full text-center">
      <div className="p-4 max-w-[1800px] mx-auto">
        <div className="p-4">
          <h1 className={`text-4xl md:text-5xl ${teko.className}`}>Who We Are</h1>
          <p className="py-4">
            At Differentials Planet Soccer360 (DPSoccer360), we know that the buildings and the roads we see are not the society but the people who live in it. Our mission is therefore to continue to promote the unity and growth of the society by helping players of all ages, skill sets, and backgrounds find success and fulfilment in the game of soccer.
          </p>
          <Image src={about1} alt=""/>
          <h2 className="text-2xl py-6">How we do it:</h2>
          <p className="py-4">
            We provide the platform for weekly peak up games that bring together players of different age range and social background. Participants have the rare opportunity to connect and network with others through our post games discussions.
          </p>
          <Image src={about2} alt="" className="w-full"/>
          <h2 className="text-2xl">Our Vision:</h2>
          <p className="py-4">
            We believe in game centered application of the technical, tactical, mental, and physical components of soccer, as such our trainings and games are focused on continuous improvements.
          </p>
          <Image src={image1} alt="" className="w-full"/>
          <Image src={image2} alt="" className="w-full my-4"/>
          <h2 className="text-2xl">Our Mission:</h2>
          <p className="py-4">
            We are convinced that everyone can reach their potential as athletes and can flourish with proper communication, socialization, and application of our mission. We provide an encouraging environment that cultivates passion, respect, integrity, maturity, and enthusiasm through soccer.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage