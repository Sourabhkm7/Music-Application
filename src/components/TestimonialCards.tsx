'use client';

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "This music app transformed my learning experience! The lessons are engaging, and I can track my progress seamlessly. Highly recommended!",
    name: "Riya Sharma",
    title: "Piano Enthusiast",
  },
  {
    quote:
      "The real-time feedback feature is a game-changer! It helped me improve my piano skills faster than I imagined.",
    name: "Ankit Verma",
    title: "Aspiring Pianist",
  },
  {
    quote:
      "I love the interactive nature of this app. The collaborative learning sessions make it feel like I'm in a real classroom!",
    name: "Priya Mehta",
    title: "Music Student",
  },
  {
    quote:
      "From beginners to pros, this app caters to everyone. The structured lessons and expert guidance are unmatched.",
    name: "Rahul Gupta",
    title: "Guitar Learner",
  },
  {
    quote:
      "This app helped me rediscover my love for music. The practice sessions are fun, and the instructors are fantastic!",
    name: "Sneha Kapoor",
    title: "Violin Beginner",
  },
  {
    quote:
      "A must-have app for any aspiring musician. The resources are top-notch, and the community is very supportive.",
    name: "Aditya Jain",
    title: "Music Producer",
  },
  {
    quote:
      "I’ve learned so much in just a few weeks! The personalized guidance has made all the difference in my progress.",
    name: "Pooja Reddy",
    title: "Beginner Vocalist",
  },
  {
    quote:
      "The app’s intuitive design and easy-to-follow lessons made learning guitar a breeze. Amazing experience overall!",
    name: "Vikram Singh",
    title: "Guitar Hobbyist",
  },
  {
    quote:
      "As a working professional, I appreciate the flexibility this app offers. I can practice anytime, anywhere!",
    name: "Neha Agarwal",
    title: "Corporate Professional",
  },
  {
    quote:
      "I never thought learning music could be this enjoyable. The app combines technology and creativity perfectly!",
    name: "Kunal Malhotra",
    title: "Drum Enthusiast",
  },
];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials