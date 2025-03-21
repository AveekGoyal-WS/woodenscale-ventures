"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MentorInfo {
  name: string;
  title: string;
  subtitle?: string;
  subtitle2?: string;
  linkedin: string;
  image: string;
}

const mentorsData: MentorInfo[] = [
  {
    name: "Mamta Kumari",
    title: "Founder - WoondenScale Ventures",
    subtitle: "Founder - PrepBytes (Acquired)",
    subtitle2: "Angel Investor, EX-SDE Amazon",
    linkedin: "https://www.linkedin.com/in/mamta-kumari-6a9579114/",
    image: "/Assets/Mentors and Investors/Mamta Kumari.avif"
  },
  {
    name: "Amrendra Singh",
    title: "Co-Founder, Dehaat",
    subtitle: "Angel Investor",
    linkedin: "https://www.linkedin.com/in/amrendra-singh-64922436/",
    image: "/Assets/Mentors and Investors/Amrendra.avif"
  },
  {
    name: "Meena Kapoor",
    title: "Founder - Astroyogi",
    subtitle: "Angel Investor",
    linkedin: "https://www.linkedin.com/in/meena-bahl-kapoor-b03325/",
    image: "/Assets/Mentors and Investors/Meena kapoor.avif"
  },
  {
    name: "Sushant Kashyap",
    title: "Leadership Team",
    subtitle: "Delhivery, Upgrad, Mobikwik, CollegeDekho",
    linkedin: "https://www.linkedin.com/in/sushant-kashyap-1497983/",
    image: "/Assets/Mentors and Investors/sushant kashyap.avif"
  },
  {
    name: "Rakhi Pal",
    title: "Co-Founder, Beep App",
    subtitle: "Shark Tank India Season 1",
    subtitle2: "Startup Speaker",
    linkedin: "https://www.linkedin.com/in/rakhipal/",
    image: "/Assets/Mentors and Investors/rakhi pal.avif"
  },
  {
    name: "Ankur Sethi",
    title: "Founder - Corporate Shiksha",
    subtitle: "Startup Mentor @ Bits Pilani",
    linkedin: "https://www.linkedin.com/in/ankursethi/",
    image: "/Assets/Mentors and Investors/Ankur Sethi.avif"
  }
];

export function MentorsInvestors() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.1 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  // Mobile carousel controls
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? mentorsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === mentorsData.length - 1 ? 0 : prev + 1));
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX); // Reset touchEnd to initial position
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    // Only process if there was significant movement
    if (Math.abs(touchStart - touchEnd) > 50) {
      if (touchStart - touchEnd > 50) {
        // Swipe left
        handleNext();
      } else if (touchStart - touchEnd < -50) {
        // Swipe right
        handlePrev();
      }
    }
  };

  // Render mentor card
  const renderMentorCard = (mentor: MentorInfo, index: number) => (
    <motion.div
      key={index}
      custom={index + 3}
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative w-48 h-48 mb-6 group">
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-accent/30 group-hover:border-accent transition-colors duration-300">
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image
              src={mentor.image}
              alt={mentor.name}
              fill
              className="object-cover object-center rounded-full group-hover:scale-105 transition-transform duration-500"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <a 
          href={mentor.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute bottom-0 right-0 bg-accent text-white p-2 rounded-full hover:bg-accent/80 transition-colors duration-300"
          aria-label={`${mentor.name}'s LinkedIn profile`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
      <div className="min-h-[120px] flex flex-col items-center justify-center">
        <h4 className="text-xl font-bold text-white mb-1">{mentor.name}</h4>
        <p className="text-accent font-medium">{mentor.title}</p>
        {mentor.subtitle && (
          <p className="text-white/80 text-sm">{mentor.subtitle}</p>
        )}
        {mentor.subtitle2 && (
          <p className="text-white/80 text-sm">{mentor.subtitle2}</p>
        )}
      </div>
    </motion.div>
  );

  return (
    <section className="relative py-20 bg-background-dark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700/20 via-transparent to-primary-700/20 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            custom={0}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-3"
          >
            <h2 className="text-sm uppercase tracking-wider text-accent font-medium">
              Learn From The Best
            </h2>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-6"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Mentors & Investors
              </span>
            </h3>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-white/70 leading-relaxed">
              Connect with our network of experienced entrepreneurs, industry experts, and investors who are committed to helping founders succeed.
            </p>
          </motion.div>
        </div>

        {/* Mobile Carousel */}
        {isMobile && (
          <div className="relative">
            <div 
              className="overflow-hidden"
              ref={carouselRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex justify-center items-center h-[400px]">
                {renderMentorCard(mentorsData[currentIndex], currentIndex)}
              </div>
              
              {/* Navigation buttons */}
              <div className="flex justify-center items-center gap-3 mt-8">
                <button 
                  onClick={(e) => {
                    e.preventDefault(); // Prevent double clicks
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  aria-label="Previous mentor"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>
                
                {/* Pagination dots */}
                <div className="flex space-x-2">
                  {mentorsData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent double clicks
                        e.stopPropagation();
                        setCurrentIndex(idx);
                      }}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        idx === currentIndex ? "bg-accent w-4" : "bg-white/30"
                      )}
                      aria-label={`Go to mentor ${idx + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={(e) => {
                    e.preventDefault(); // Prevent double clicks
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  aria-label="Next mentor"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Mentors grid */}
        {!isMobile && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 md:gap-x-8 md:gap-y-20">
            {mentorsData.map((mentor, index) => renderMentorCard(mentor, index))}
          </div>
        )}
      </div>
    </section>
  );
}
