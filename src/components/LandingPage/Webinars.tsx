"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface WebinarInfo {
  title: string;
  description: string;
  image: string;
  speaker: {
    name: string;
    role: string;
  };
  learningPoints: string[];
}

const webinarData: WebinarInfo = {
  title: "Building your first successful Startup - From Idea to Execution",
  description: "Want to turn your dream of building a successful business into reality? This Startup MasterClass is your ultimate guide to the world of startups and business. Learn how startups go from ideation to execution, acquire customers, raise funds, and much more.",
  image: "/Assets/Mentors and Investors/Mamta Kumar - Launchpad.avif",
  speaker: {
    name: "Mamta Kumari",
    role: "Founder - WoodenScale Ventures, Co-founder & CEO - PrepBytes (Acquired), Ex-SDE - Amazon and Samsung"
  },
  learningPoints: [
    "Different stages of a business - from ideation to customers",
    "Take your startup from 0 to 1",
    "Different Stages of funding & how to raise funds",
    "Building a team at every stage of the startup",
    "Acquiring your first 100 customers and scaling growth",
    "Understanding the difference between successful and failed startups"
  ]
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Webinars() {
  return (
    <section className="relative py-20 md:py-28 bg-background-dark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700/20 via-transparent to-primary-700/20 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-sm uppercase tracking-wider text-accent font-medium mb-3">
            Learn & Grow
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Startup MasterClass
            </span>
          </h3>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Gain valuable insights and practical knowledge for your entrepreneurial journey
          </p>
        </motion.div>

        {/* Webinar Details */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Left Column - Webinar Info */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{webinarData.title}</h3>
            
            <p className="text-white/80 leading-relaxed">{webinarData.description}</p>

            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-4">What you&apos;ll learn:</h4>
              <ul className="space-y-3">
                {webinarData.learningPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent text-sm font-medium">{index + 1}</span>
                    </div>
                    <span className="text-white/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link 
              href="/webinars"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white font-medium px-6 py-3 rounded-full transition-colors"
            >
              Register Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Right Column - Image and Speaker */}
          <motion.div 
            className="flex flex-col items-center"
            variants={fadeInUp}
          >
            <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-2xl mb-6">
              <Image 
                src={webinarData.image}
                alt={webinarData.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
            </div>
            
            <div className="w-full max-w-md p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-white/60 text-sm mb-2">Speaker</p>
              <p className="text-white font-medium text-lg">{webinarData.speaker.name}</p>
              <p className="text-white/70">{webinarData.speaker.role}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
