"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/LandingPage/Navbar";
import { Footer } from "@/components/LandingPage/Footer";
import { TestimonialSection } from "@/components/Webinar/TestimonialSection";

export default function WebinarPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  
  // Refs for scroll positioning
  const formRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
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
  
  // Handle form positioning on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!formRef.current || !formContainerRef.current) return;
      
      const formElement = formRef.current;
      const containerElement = formContainerRef.current;
      const contentContainer = document.getElementById('content-container');
      
      // Return early if content container is not found
      if (!contentContainer) return;
      
      // Set container height to match content container height
      containerElement.style.height = `${contentContainer.offsetHeight}px`;
      
      // Get container dimensions and position
      const containerRect = containerElement.getBoundingClientRect();
      const formHeight = formElement.offsetHeight;
      
      // If container is partially visible
      if (containerRect.top < 0) {
        // Calculate how much of the container is scrolled past the viewport top
        const scrolledPastTop = Math.abs(containerRect.top);
        
        // Position the form relative to how much has scrolled
        formElement.style.transform = `translateY(${scrolledPastTop}px)`;
        
        // Don't let the form go beyond the container bottom
        if (scrolledPastTop + formHeight > containerElement.offsetHeight) {
          const maxTranslate = containerElement.offsetHeight - formHeight;
          formElement.style.transform = `translateY(${maxTranslate}px)`;
        }
      } else {
        // Reset position when container top is in viewport
        formElement.style.transform = 'translateY(0)';
      }
    };
    
    // Initial positioning
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  
  return (
    <main className="relative min-h-screen bg-primary-900 text-white">
      <Navbar />
      
      <section className="relative pt-24 pb-20 md:py-28 bg-background-dark overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700/20 via-transparent to-primary-700/20 blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-[1fr_450px] gap-12">
            {/* Left Column - Content */}
            <motion.div 
              className="space-y-10"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              id="content-container"
            >
              <motion.div variants={fadeInUp}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-center md:text-left">
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                    Startup <span className="text-accent">Masterclass</span> - Building Your <span className="text-accent">FIRST SUCCESSFUL</span> Startup
                  </span>
                </h1>
                
                <p className="text-white/80 text-lg leading-relaxed mb-8 text-center md:text-left">
                  Learn to refine ideas, define your audience, analyze competitors, build <span className="text-accent font-medium">Product-Market Fit</span>, and secure your first 100 customers.
                </p>
              </motion.div>
              
              {/* Speaker Info */}
              <motion.div 
                className="flex flex-col md:flex-row gap-6 items-center text-center md:text-left"
                variants={fadeInUp}
              >
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-accent/20">
                  <Image 
                    src="/Assets/Mentors and Investors/Mamta Kumar - Launchpad.avif"
                    alt="Mamta Kumari"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white">Speaker - <span className="text-accent">Mamta Kumari</span></h3>
                  <p className="text-white/70 mt-1">Founder - WoodenScale Ventures</p>
                  <p className="text-white/70">Co-founder & CEO - PrepBytes (Acquired)</p>
                  <p className="text-white/70">Ex-SDE - Amazon and Samsung</p>
                </div>
              </motion.div>
              
              {/* Webinar Details */}
              <motion.div variants={fadeInUp}>
                <h4 className="text-xl font-semibold text-white mb-4 text-center md:text-left">Event Details</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-accent text-sm font-medium">📅</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Date</p>
                        <p className="text-white/70 text-sm">25th March</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-accent text-sm font-medium">⏰</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Time</p>
                        <p className="text-white/70 text-sm">8 PM - 10 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-accent text-sm font-medium">⏱️</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Duration</p>
                        <p className="text-white/70 text-sm">2 Hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-accent text-sm font-medium">🌐</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Mode</p>
                        <p className="text-white/70 text-sm">Online</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Mobile Form - Only visible on mobile */}
              <motion.div className="lg:hidden mt-6" variants={fadeInUp}>
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
                  {!formSubmitted ? (
                    <>
                      <h3 className="text-xl font-bold text-white mb-6 text-center">Register Now</h3>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="mobile-name" className="block text-sm font-medium text-white/80 mb-1">Name</label>
                          <input
                            type="text"
                            id="mobile-name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white"
                            placeholder="Your full name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="mobile-email" className="block text-sm font-medium text-white/80 mb-1">Email</label>
                          <input
                            type="email"
                            id="mobile-email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white"
                            placeholder="Your email address"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="mobile-phone" className="block text-sm font-medium text-white/80 mb-1">Phone</label>
                          <input
                            type="tel"
                            id="mobile-phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white"
                            placeholder="Your phone number"
                          />
                        </div>
                        
                        <div className="pt-2">
                          <button
                            type="submit"
                            className="w-full bg-accent hover:bg-accent-medium text-background-dark font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                          >
                            Register Now
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </form>
                      
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <p className="text-white/60 text-sm mb-4">Price</p>
                        <p className="text-accent text-2xl font-bold">₹49</p>
                        <p className="text-white/60 text-sm mt-1">One-time payment</p>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="flex justify-center mb-4">
                        <CheckCircle className="h-16 w-16 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Registration Successful!</h3>
                      <p className="text-white/70 mb-6">Thank you for registering. We&apos;ve sent the webinar details to your email.</p>
                      <Link 
                        href="/"
                        className="inline-flex items-center gap-2 bg-accent hover:bg-accent-medium text-background-dark font-medium px-6 py-3 rounded-lg transition-colors"
                      >
                        Back to Home
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
              
              {/* You might be at any of this stage */}
              <motion.div variants={fadeInUp}>
                <h4 className="text-xl font-semibold text-white mb-4 text-center md:text-left">You might be at any of this stage</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-accent text-sm font-medium">1</span>
                      </div>
                      <span className="text-white/80">Have a very strong desire to start your own startup</span>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-accent text-sm font-medium">2</span>
                      </div>
                      <span className="text-white/80">Looking for the right guidance and support to kick off your entrepreneurial journey</span>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-accent text-sm font-medium">3</span>
                      </div>
                      <span className="text-white/80">Have no clue about getting customers, raising funds, creating B-plan etc</span>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-accent text-sm font-medium">4</span>
                      </div>
                      <span className="text-white/80">Stuck with your start at a stage and cannot move further</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* What You'll Learn */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">What will you <span className="text-accent">learn</span>?</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-accent text-sm font-medium">1</span>
                        </div>
                        <span className="text-white/80">Finding ideas and finalizing your concept</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-accent text-sm font-medium">2</span>
                        </div>
                        <span className="text-white/80">Acquiring your <span className="text-accent font-medium">first 100 customers</span></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-accent text-sm font-medium">3</span>
                        </div>
                        <span className="text-white/80">Competition analysis and market research</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-accent text-sm font-medium">4</span>
                        </div>
                        <span className="text-white/80">Understanding <span className="text-accent font-medium">funding</span> and creating pitch decks</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-accent text-sm font-medium">5</span>
                        </div>
                        <span className="text-white/80">Building products with growth potential</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-accent text-sm font-medium">6</span>
                        </div>
                        <span className="text-white/80">Keys to startup success</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              {/* About the Speaker */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">About the speaker</h3>
                
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h4 className="text-xl font-semibold text-white mb-2 text-center md:text-left">Mamta Kumari</h4>
                  <p className="text-white/80 italic mb-4 text-center md:text-left">Serial Tech Entrepreneur and Startup Mentor</p>
                  
                  <div className="flex justify-center md:justify-start gap-4 mb-6">
                    <Link href="https://www.linkedin.com/in/mamta-kumari-6a9579114/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/20 hover:bg-accent/30 text-accent transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/20 hover:bg-accent/30 text-accent transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.444.718-.89.923-1.416.198-.51.333-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.373-1.942a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg>
                    </Link>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-white/80 text-justify">
                      Mamta Kumari is the founder of WoodenScale Ventures and former CEO of PrepBytes (acquired in 2022). She scaled PrepBytes to:
                    </p>
                    
                    <ul className="grid grid-cols-3 gap-4 my-4">
                      <li className="p-3 rounded-lg bg-white/5 text-center">
                        <span className="block text-accent font-bold text-xl">1M+</span>
                        <span className="text-white/70 text-sm">Monthly Traffic</span>
                      </li>
                      <li className="p-3 rounded-lg bg-white/5 text-center">
                        <span className="block text-accent font-bold text-xl">10K+</span>
                        <span className="text-white/70 text-sm">Paid Customers</span>
                      </li>
                      <li className="p-3 rounded-lg bg-white/5 text-center">
                        <span className="block text-accent font-bold text-xl">150K+</span>
                        <span className="text-white/70 text-sm">Social Followers</span>
                      </li>
                    </ul>
                    
                    <p className="text-white/80 text-justify">
                      Prior to entrepreneurship, Mamta worked as an SDE at Amazon and Samsung, bringing technical expertise to her ventures.
                    </p>
                  </div>
                </div>
              </motion.div>
              
            </motion.div>
            
            {/* Form Container - This defines the track where the form can move */}
            <div ref={formContainerRef} className="hidden lg:block relative" style={{ height: 'auto' }}>
              {/* Right Column - Form that moves within the container */}
              <motion.div 
                ref={formRef}
                className="sticky w-[450px] p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl z-20"
                initial="hidden"
                animate="visible" 
                variants={fadeInUp}
              >
                {!formSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-6">Register <span className="text-accent">NOW!</span></h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white"
                          placeholder="Your email"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white"
                          placeholder="Your phone number"
                        />
                      </div>
                      
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full bg-accent hover:bg-accent-medium text-background-dark font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          Book Now
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </form>
                    
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-white/60 text-sm mb-4">Price</p>
                      <p className="text-accent text-2xl font-bold">₹49</p>
                      <p className="text-white/60 text-sm mt-1">One-time payment</p>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="h-16 w-16 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Registration Successful!</h3>
                    <p className="text-white/70 mb-6">Thank you for registering. We&apos;ve sent the webinar details to your email.</p>
                    <Link 
                      href="/"
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-medium text-background-dark font-medium px-6 py-3 rounded-lg transition-colors"
                    >
                      Back to Home
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <TestimonialSection />
      
      <div ref={footerRef}>
        <Footer />
      </div>
    </main>
  );
}
