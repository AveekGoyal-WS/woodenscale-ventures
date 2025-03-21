"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Idea Stage program features
const ideaStageFeatures = [
  "Identifying Problem Statement",
  "Finalising Idea and building MVP",
  "Acquiring First Customers",
  "Build a business plan and roadmap",
];

// Growth Stage program features
const growthStageFeatures = [
  "Scaling your customer base",
  "Optimizing operations and processes",
  "Building a high-performing team",
  "Developing sustainable revenue models",
];

// Funding Stage program features
const fundingStageFeatures = [
  "Connect with angel investors and VCs",
  "Pitch deck development and refinement",
  "Due diligence preparation",
  "Term sheet negotiation support",
];

interface ProgramInfo {
  title: string;
  stage: string;
  founderStage: string;
  founderStageShort: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  buttonText: string;
  buttonLink: string;
  programName: string;
}

const programsData: ProgramInfo[] = [
  {
    title: "Kickstart Your Journey",
    stage: "Stage 1",
    founderStage: "Founders with an idea looking to validate and build an MVP",
    founderStageShort: "Ideation Stage",
    tagline: "Transform your idea into a viable product",
    description: "For early-stage founders looking to validate ideas, build MVPs, and acquire their first customers with expert guidance.",
    features: ideaStageFeatures,
    image: "/Assets/Business Plan-cuate.svg",
    buttonText: "Join Launchpad",
    buttonLink: "/programs/launchpad",
    programName: "Launchpad Program"
  },
  {
    title: "Scale Your Business",
    stage: "Stage 2",
    founderStage: "Founders with a validated product ready to scale",
    founderStageShort: "Growth Stage",
    tagline: "Accelerate your business growth",
    description: "For startups with product-market fit looking to scale operations, expand their customer base, and build sustainable growth systems.",
    features: growthStageFeatures,
    image: "/Assets/Business deal-cuate.svg",
    buttonText: "Apply Now",
    buttonLink: "/programs/velocity",
    programName: "Velocity Program"
  },
  {
    title: "Secure Investment",
    stage: "Stage 3",
    founderStage: "Founders seeking capital to fuel their next phase of growth",
    founderStageShort: "Funding Stage",
    tagline: "Connect with investors and secure funding",
    description: "For startups ready to raise capital with dedicated support throughout the fundraising process, from pitch preparation to deal closing.",
    features: fundingStageFeatures,
    image: "/Assets/Business growth-cuate.svg",
    buttonText: "Get Funded",
    buttonLink: "/programs/funding",
    programName: "Funding Program"
  }
];

export function GrowthPrograms() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const programCardRef = useRef<HTMLDivElement>(null);
  const isInitialRender = useRef(true);
  const [isNavigatingFromOtherPage, setIsNavigatingFromOtherPage] = useState(false);
  
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

  const stageIndicatorVariants = {
    inactive: { scale: 1 },
    active: { scale: 1.1, boxShadow: "0 0 20px rgba(255, 196, 77, 0.5)" }
  };
  
  // Check if user is navigating from another page
  useEffect(() => {
    // Get the navigation timestamp from sessionStorage
    const lastNavTimestamp = sessionStorage.getItem('lastNavTimestamp');
    const currentTime = Date.now();
    
    // If there's a timestamp and it's recent (within last 2 seconds), user came from another page
    if (lastNavTimestamp && (currentTime - parseInt(lastNavTimestamp)) < 2000) {
      setIsNavigatingFromOtherPage(true);
    }
    
    // Reset the initial render flag
    isInitialRender.current = true;
  }, []);
  
  useEffect(() => {
    // Only scroll when activeStage changes after initial render
    // AND not when navigating from another page
    if (isInitialRender.current || isNavigatingFromOtherPage) {
      // Skip scrolling on initial render or when coming from another page
      isInitialRender.current = false;
      setIsNavigatingFromOtherPage(false);
      return;
    }
    
    // Scroll to the program card when activeStage changes (but not on initial render)
    if (programCardRef.current) {
      const yOffset = -200; // Offset to account for sticky header or other elements
      const y = programCardRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [activeStage, isNavigatingFromOtherPage]);

  return (
    <section className="relative py-20 md:py-28 bg-background-dark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700/30 via-transparent to-primary-700/20 blur-3xl" />
      
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
              For Every Stage of Your Startup Journey
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
                Growth Programs
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
              Tailored support for founders at every stage of their entrepreneurial journey,
              from idea validation to scaling and fundraising.
            </p>
          </motion.div>
        </div>

        {/* Stage selector */}
        <motion.div 
          className="flex justify-center mb-8"
          custom={2.5}
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center justify-center gap-8 md:gap-16 lg:gap-24 bg-primary-800/30 backdrop-blur-sm rounded-full p-3 border border-primary-600/50 w-full max-w-xl mx-auto">
            {programsData.map((program, index) => (
              <div key={index} className="flex flex-col items-center">
                <button
                  onClick={() => setActiveStage(index)}
                  className={`relative flex flex-col items-center ${activeStage === index ? 'text-accent' : 'text-white/60 hover:text-white/80'}`}
                  aria-label={`Select ${program.founderStageShort}`}
                >
                  <motion.div 
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary-800/80 border-2 flex items-center justify-center mb-2"
                    variants={stageIndicatorVariants}
                    animate={activeStage === index ? 'active' : 'inactive'}
                    style={{ borderColor: activeStage === index ? '#ffc44d' : 'rgba(255,255,255,0.2)' }}
                  >
                    <span className="text-base md:text-lg font-bold">{index + 1}</span>
                  </motion.div>
                  <span className="text-xs md:text-sm font-medium whitespace-nowrap">{program.founderStageShort}</span>
                  {activeStage === index && (
                    <motion.div 
                      className="h-0.5 w-8 bg-accent mt-1.5 rounded-full"
                      layoutId="activeIndicator"
                    />
                  )}
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Program cards container - This div contains all program cards */}
        <div className="max-w-6xl mx-auto" ref={programCardRef}>
          {/* Render all program cards but only show the active one */}
          {programsData.map((program, index) => (
            <div 
              key={index} 
              className={`program-card ${index === activeStage ? 'block' : 'hidden'}`}
              data-program-stage={program.stage}
              data-program-title={program.title}
            >
              <motion.div
                key={`visible-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-primary-800/50 backdrop-blur-sm rounded-2xl border border-primary-600 overflow-hidden shadow-xl">
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-stretch gap-8">
                      {/* Left column - Program info */}
                      <div className="md:flex-1 space-y-6">
                        <div className="flex items-center justify-between">
                          <h4 className="text-2xl md:text-3xl font-bold">{program.title}</h4>
                          <div className="bg-accent/10 rounded-full px-3 py-1">
                            <span className="text-xs text-accent font-medium">{program.stage}</span>
                          </div>
                        </div>

                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-1.5 rounded-full bg-accent/20">
                              <ArrowRight className="h-4 w-4 text-accent" />
                            </div>
                            <span className="text-white font-medium">For Startups at {program.founderStageShort}:</span>
                          </div>
                          <p className="text-white/70 pl-10">{program.founderStage}</p>
                        </div>

                        <p className="text-xl font-medium text-accent">
                          {program.tagline}
                        </p>

                        <p className="text-white/70">
                          {program.description}
                        </p>

                        <div>
                          <h5 className="text-white font-medium mb-4">Program Highlights:</h5>
                          <ul className="space-y-3">
                            {program.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-3">
                                <div className="flex-shrink-0 p-1 rounded-full bg-accent/10">
                                  <Check className="h-4 w-4 text-accent" />
                                </div>
                                <span className="text-white/70">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-white/10">
                          <p className="text-white/60 text-sm mb-2">Supported by</p>
                          <p className="text-white font-medium">{program.programName}</p>
                        </div>

                        <Link
                          href={program.buttonLink}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-medium text-background-dark font-medium transition-colors duration-300 w-full justify-center mt-4"
                        >
                          {program.buttonText}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>

                      {/* Right column - Image */}
                      <div className="md:flex-1 flex items-center justify-center">
                        <div className="relative h-64 md:h-auto w-full" style={{ minHeight: '400px' }}>
                          <Image
                            src={program.image}
                            alt={program.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}

          {/* Hidden SEO-friendly content that contains all programs data */}
          <div className="sr-only" aria-hidden="true">
            {programsData.map((program, index) => (
              <div key={`seo-${index}`}>
                <h4>{program.title}</h4>
                <p>{program.stage}</p>
                <p>For Startups at {program.founderStageShort}: {program.founderStage}</p>
                <p>{program.tagline}</p>
                <p>{program.description}</p>
                <h5>Program Highlights:</h5>
                <ul>
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <p>Supported by {program.programName}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center mt-8 gap-4">
          <button 
            onClick={() => setActiveStage(prev => (prev > 0 ? prev - 1 : programsData.length - 1))}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous program"
          >
            <ArrowLeft className="h-5 w-5 text-white" />
          </button>
          <button 
            onClick={() => setActiveStage(prev => (prev < programsData.length - 1 ? prev + 1 : 0))}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next program"
          >
            <ArrowRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}