'use client';

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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">What Our Students Say</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <p className="italic text-gray-600">"{testimonial.quote}"</p>
            <h3 className="mt-4 font-semibold text-gray-800">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MusicSchoolTestimonials;
