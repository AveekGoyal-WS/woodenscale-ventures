"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const bootcampFeatures = [
  "Identifying Problem Statement",
  "Finalising Idea and building MVP",
  "Acquiring Customers and Retaining them",
  "Build a business plan and roadmap",
  "Get acquaintance with Startup World",
];

export function Bootcamp() {
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

  return (
    <section className="relative py-20 md:py-28 bg-background-dark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700/30 via-transparent to-primary-700/20 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              custom={0}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-3"
            >
              <h2 className="text-sm uppercase tracking-wider text-accent font-medium">
                Our Startup Programs
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
                  Bootcamp
                </span>
              </h3>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-8"
            >
              <p className="text-xl font-medium hero-gradient-text mb-2">
                Start from scratch and get your first 100 customers
              </p>
              <p className="text-white/70 leading-relaxed">
                Our intensive bootcamp is designed to take you from idea to execution. 
                Learn how to validate your concept, build an MVP, acquire customers, 
                and create a solid business plan with expert guidance every step of the way.
              </p>
            </motion.div>

            <motion.div
              custom={3}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-10"
            >
              <ul className="space-y-3">
                {bootcampFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    custom={index + 4}
                    variants={fadeInUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 p-1 rounded-full bg-accent/10">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-white/70">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              custom={9}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link
                href="/bootcamp"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-medium text-background-dark font-medium transition-colors duration-300"
              >
                Join Our Bootcamp
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right side - Images */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[500px] w-full">
              {/* Main image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-[1%] left-[10%] z-20 shadow-medium rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
                style={{ width: "280px", height: "280px" }}
              >
                <Image
                  src="/Assets/Lesson-cuate.svg"
                  alt="Bootcamp Lessons"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </motion.div>

              {/* Secondary image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-[5%] right-[10%] z-10 shadow-medium rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
                style={{ width: "250px", height: "250px" }}
              >
                <Image
                  src="/Assets/Business Plan-cuate.svg"
                  alt="Business Plan"
                  fill
                  className="object-contain p-4"
                />
              </motion.div>

              {/* Decorative element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute top-[30%] right-[40%] z-30 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 shadow-[0_0_15px_5px_rgba(255,196,77,0.15)] animate-pulse-slow"
                style={{ width: "120px", height: "120px" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-accent">12</p>
                    <p className="text-xs text-white/70">Week Program</p>
                  </div>
                </div>
              </motion.div>

              {/* Coding workshop image */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-[30%] left-[40%] z-0 shadow-medium rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
                style={{ width: "200px", height: "200px" }}
              >
                <Image
                  src="/Assets/Coding workshop-cuate.svg"
                  alt="Coding Workshop"
                  fill
                  className="object-contain p-4"
                />
              </motion.div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
