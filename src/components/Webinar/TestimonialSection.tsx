"use client";

import { Marquee } from "../magicui/marquee";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  testimonial: string;
  image: string;
}

export function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Founder",
      company: "TechNova",
      testimonial: "This webinar completely changed my approach to starting a business. Mamta's insights were practical and immediately applicable.",
      image: "/images/testimonials/testimonial-1.jpg"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Co-founder",
      company: "GrowthBox",
      testimonial: "The strategies shared in this masterclass helped me secure my first round of funding. Truly a game-changer for early-stage founders.",
      image: "/images/testimonials/testimonial-2.jpg"
    },
    {
      id: 3,
      name: "Arjun Mehta",
      role: "CEO",
      company: "InnovateLabs",
      testimonial: "As someone who was stuck in the ideation phase, this webinar gave me the clarity and confidence to finally launch my startup.",
      image: "/images/testimonials/testimonial-3.jpg"
    },
    {
      id: 4,
      name: "Neha Gupta",
      role: "Entrepreneur",
      testimonial: "The customer acquisition strategies Mamta shared helped me get my first 100 customers within a month. Highly recommend this to anyone starting out.",
      image: "/images/testimonials/testimonial-4.jpg"
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Founder & CTO",
      company: "DevStack",
      testimonial: "This masterclass offers the perfect balance of theoretical knowledge and practical implementation steps. Worth every penny!",
      image: "/images/testimonials/testimonial-5.jpg"
    },
  ];

  return (
    <section className="py-8 bg-background-dark overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          What Our <span className="text-accent">Participants</span> Say
        </h2>
        
        <div className="relative overflow-hidden py-4">
          <Marquee 
            className="py-2" 
            pauseOnHover={true}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="w-[320px] mx-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
      <div className="text-center mb-3">
        <h4 className="text-white font-medium">{testimonial.name}</h4>
        <p className="text-white/70 text-sm">
          {testimonial.role}
          {testimonial.company && ` at ${testimonial.company}`}
        </p>
      </div>
      <p className="text-white/80 text-center">&ldquo;{testimonial.testimonial}&rdquo;</p>
    </div>
  );
}
