"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";


const content = [
    {
      title: "Learn Together, Play Together",
      description:
        "At our music school, collaboration takes center stage. Join our interactive group sessions where students learn and play music together, fostering creativity and teamwork. Experience the joy of harmonizing with peers and building lifelong connections through music.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Learn Together, Play Together
        </div>
      ),
    },
    
    {
      title: "Your Musical Journey",
      description:
        "No matter where you are on your musical journey, we’ve got you covered. With our structured lessons and personalized guidance, you’ll always be learning at the right pace. From beginners to advanced musicians, our curriculum ensures a seamless learning experience.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Your Musical Journey
        </div>
      ),
    },
    {
      title: "Never Stop Growing",
      description:
        "Music is a lifelong journey, and we’re here to inspire you to keep growing. Whether you’re expanding your repertoire or preparing for performances, our school provides the resources, encouragement, and expertise to help you reach new heights.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Never Stop Growing
        </div>
      ),
    },
  ];
  


function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
