import Hero from "@/components/Hero";
import heroImage from "@/public/9.jpg"
import image1 from "@/public/event1.jpg"
import image2 from "@/public/event2.jpg"
import Image from "next/image";

const CommunityPage = () => {
  return (
    <div className="text-center">
      <Hero image={heroImage}>
        <h1 className="text-3xl md:text-4xl">Community Development Initiatives</h1>
      </Hero>
      <div className="p-4">
        <p className="py-4 text-2xl"> In the spirit of community development, promoting progress, inclusiveness and overall positive societal change are central to our activities and  the following are our ongoing initiatives which would continue to be mainstay annual projects with open collaborations, partnerships, and sponsorship.</p>
        <Image src={image1} alt="Image 1" className="w-full max-w-2xl h-auto mx-auto"/>
        <Image src={image2} alt="Image 1" className="w-full max-w-2xl h-auto mx-auto"/>
        <p className="py-4">City of Durham Neighborhood Improvement Services International Soccer Tournament</p>
        <p className="py-4">Inter-High School Soccer Competition (Male & Female)</p>
      </div>
    </div>
  );
}

export default CommunityPage