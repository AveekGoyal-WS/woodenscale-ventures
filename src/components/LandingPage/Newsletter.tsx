"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

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

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
    }, 1500);
  };

  return (
    <section className="relative py-20 md:py-28 bg-background-dark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/10 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Newsletter Content */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Never Miss a Post. Subscribe to our newsletters!
                </h2>
                <p className="text-white/70 mb-6">
                  Join our email list to get insights on startups, funding, building a team, scale and a lot more
                </p>
                
                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email here*"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white font-medium px-6 py-3 rounded-full transition-colors disabled:opacity-70"
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                      {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                    </button>
                  </form>
                ) : (
                  <div className="bg-accent/20 border border-accent/30 rounded-lg p-4 text-white">
                    <p className="font-medium">Thank you for subscribing!</p>
                    <p className="text-white/80 text-sm">You&apos;ll receive our latest insights directly to your inbox.</p>
                  </div>
                )}
              </motion.div>
              
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Reach out to us:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/60 text-sm">Email</p>
                        <a href="mailto:contact@woodenscale.in" className="text-white hover:text-accent transition-colors">
                          contact@woodenscale.in
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MessageSquare className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/60 text-sm">WhatsApp</p>
                        <a href="https://wa.me/919958899161" className="text-white hover:text-accent transition-colors">
                          +91 9958899161
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Why Subscribe?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">&#8226;</span>
                      <span className="text-white/80">Exclusive founder insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">&#8226;</span>
                      <span className="text-white/80">Early access to events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">&#8226;</span>
                      <span className="text-white/80">Practical startup tips</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">&#8226;</span>
                      <span className="text-white/80">Funding opportunities</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
