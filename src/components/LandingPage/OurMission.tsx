"use client";

import { motion } from "framer-motion";

export function OurMission() {
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
    <section className="relative py-16 bg-background-dark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700/30 via-transparent to-primary-700/20 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-4"
          >
            <div className="inline-block">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  Our Mission
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full"></div>
              </h3>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-primary-800/40 backdrop-blur-sm rounded-xl p-6 border border-primary-600/30 shadow-lg"
          >
            <p className="text-white/90 leading-relaxed text-lg">
              At WoodenScale Ventures, we believe that <span className="text-accent font-medium">every aspiring entrepreneur</span> can create a successful business if given the right support and guidance. Hence, we have created a <span className="text-accent font-medium">team of experts</span> and a <span className="text-accent font-medium">network of investors</span> to <span className="text-accent font-medium">empower founders</span> and accelerate their journey from <span className="text-accent font-medium">0 to 1</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
