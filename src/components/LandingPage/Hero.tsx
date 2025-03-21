"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

// Hero component
export function Hero() {
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

    return (
        <div className="relative min-h-screen w-full flex items-center overflow-hidden bg-background-dark">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.05] via-transparent to-accent-medium/[0.05] blur-3xl" />
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-700/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-accent-medium/5 rounded-full blur-2xl" />
            
            <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center">
                {/* Centered content for both mobile and desktop */}
                <div className="w-full text-center max-w-3xl mx-auto">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 md:gap-3 md:px-4 md:py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-10 mx-auto"
                    >
                        <Circle className="h-2 w-2 md:h-3 md:w-3 fill-accent" />
                        <span className="text-sm md:text-lg text-white/60 tracking-wide">
                            WoodenScale Ventures
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
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
                        className="mx-auto text-center"
                    >
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-8 md:mb-10 leading-relaxed font-light tracking-wide max-w-xl md:max-w-2xl mx-auto">
                            Gain the knowledge, tools, and community support you need to build and scale your startup with confidence.
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center"
                    >
                        <Link 
                            href="/bootcamp"
                            className="px-6 py-3 md:px-8 md:py-4 md:text-lg rounded-full bg-accent hover:bg-accent-medium text-background-dark font-medium transition-colors duration-300"
                        >
                            Join Our Bootcamp
                        </Link>
                        <Link 
                            href="/webinars"
                            className="px-6 py-3 md:px-8 md:py-4 md:text-lg rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white font-medium transition-colors duration-300"
                        >
                            Explore Webinars
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/80 pointer-events-none" />

            {/* Scroll down button */}
            <ScrollDownButton />
        </div>
    );
}
