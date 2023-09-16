import Hero from "@/components/Hero";
import heroImage from "@/public/9.jpg"
import image1 from "@/public/event1.jpg"
import image2 from "@/public/event2.jpg"
import Image from "next/image";

const CommunityPage = () => {
  return (
    <div className="text-center">
      <Hero image={heroImage}>
        <h1 className="text-3xl">Community Development Initiatives</h1>
      </Hero>
      <p>In the spirit of community development, promoting progress, inclusiveness and overall positive societal change, the following are our ongoing initiatives which would continue to be mainstay annual project the open collaborations, partnerships, and sponsorship.</p>
      <p>City of Durham Neighborhood Improvement Services International Soccer Tournament</p>

        <Image src={image1} alt="Image 1" className="w-full max-w-3xl h-auto"/>
      <p>Inter-High School Soccer Competition (Male & Female)</p>
      <p>Governor Cup for Inter-County High School Soccer Fiesta (Male & Female)</p>
    </div>
  );
}

export default CommunityPage