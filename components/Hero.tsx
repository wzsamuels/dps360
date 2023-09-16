import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { ReactNode } from "react"

interface HeroProps {
  children: ReactNode
  image: string | StaticImport
}

const Hero = ({children, image} : HeroProps) => {
  return (
    <div className="relative w-full h-full md:h-[500px]">
      <Image src={image} alt="hero image" className="w-full h-full object-cover object-top"/>
      <div className="w-full h-full absolute top-0 bg-black opacity-40"/>
      <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>
  )
}

export default Hero