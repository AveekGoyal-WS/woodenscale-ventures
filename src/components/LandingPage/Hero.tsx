"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Circle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

// Define the images to be used in the animation
const heroImages = [
    "/Assets/Team-cuate.svg",
    "/Assets/Startup life-cuate.svg",
    "/Assets/Rising-cuate.svg",
    "/Assets/Shared goals-cuate.svg",
];

// Hero component
export function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex: number) => (prevIndex + 1) % heroImages.length);
        }, 3000); // Change image every 3 seconds

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check and event listener
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    // ScrollDownButton component
    function ScrollDownButton() {
        return (
            <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            >
                <motion.div 
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-accent hover:bg-accent-medium cursor-pointer shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                        window.scrollTo({
                            top: window.innerHeight,
                            behavior: 'smooth'
                        });
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            repeatType: "loop" 
                        }}
                    >
                        <ArrowRight className="h-5 w-5 text-background-dark transform rotate-90" />
                    </motion.div>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <div className="relative min-h-screen w-full flex items-center overflow-hidden bg-background-dark">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.05] via-transparent to-accent-medium/[0.05] blur-3xl" />
            
            <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center">
                {/* Left side - Text and buttons */}
                <div className={`w-full ${!isMobile ? 'lg:w-1/2 lg:pr-8 mb-12 lg:mb-0' : 'text-center'}`}>
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 ${isMobile ? 'mx-auto' : ''}`}
                    >
                        <Circle className="h-2 w-2 fill-accent" />
                        <span className="text-sm text-white/60 tracking-wide">
                            WoodenScale Ventures
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                Transform Your Ideas
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-accent-light via-accent to-accent-medium"
                                )}
                            >
                                Into Successful Startups
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className={isMobile ? 'mx-auto text-center' : ''}
                    >
                        <p className="text-base sm:text-lg text-white/70 mb-8 leading-relaxed font-light tracking-wide max-w-xl">
                            Gain the knowledge, tools, and community support you need to build and scale your startup with confidence.
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className={`flex flex-col sm:flex-row gap-4 ${isMobile ? 'items-center' : ''}`}
                    >
                        <Link 
                            href="/bootcamp"
                            className="px-6 py-3 rounded-full bg-accent hover:bg-accent-medium text-background-dark font-medium transition-colors duration-300"
                        >
                            Join Our Bootcamp
                        </Link>
                        <Link 
                            href="/webinars"
                            className="px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white font-medium transition-colors duration-300"
                        >
                            Explore Webinars
                        </Link>
                    </motion.div>
                </div>
                
                {/* Right side - Animated image carousel - Hidden on mobile */}
                {!isMobile && (
                    <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div 
                                    className="relative shadow-medium rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
                                    style={{ width: "400px", height: "400px" }}
                                >
                                    <Image
                                        src={heroImages[currentImageIndex]}
                                        alt={`Hero image ${currentImageIndex + 1}`}
                                        fill
                                        className="object-contain p-4"
                                        priority={currentImageIndex === 0}
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                )}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/80 pointer-events-none" />

            {/* Scroll down button */}
            <ScrollDownButton />
        </div>
    );
}
