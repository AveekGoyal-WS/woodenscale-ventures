"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MessageSquare, Eye, Heart } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    image: string;
  };
  views: number;
  comments: number;
  liked: boolean;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Practical Tips for Aspiring Entrepreneurs",
    excerpt: "Are you an aspiring entrepreneur looking to kickstart your own business venture? Starting a new business can be both exciting and...",
    date: "Dec 27, 2024",
    readTime: "2 min read",
    author: {
      name: "Mamta Kumari",
      image: "/Assets/Mentors and Investors/Mamta Kumari.avif"
    },
    views: 4,
    comments: 0,
    liked: false,
    slug: "practical-tips-for-aspiring-entrepreneurs"
  },
  {
    title: "Effective SEO Strategies for Startups",
    excerpt: "Starting a new business can be a daunting task, especially when it comes to getting your name out in the crowded online space. This is...",
    date: "Dec 27, 2024",
    readTime: "2 min read",
    author: {
      name: "Mamta Kumari",
      image: "/Assets/Mentors and Investors/Mamta Kumari.avif"
    },
    views: 2,
    comments: 0,
    liked: false,
    slug: "effective-seo-strategies-for-startups"
  },
  {
    title: "Maximizing Startup Success with Valuable Insights",
    excerpt: "Starting a new business can be a daunting task, but with the right guidance and insights, you can maximize your chances of success. At...",
    date: "Dec 27, 2024",
    readTime: "2 min read",
    author: {
      name: "Mamta Kumari",
      image: "/Assets/Mentors and Investors/Mamta Kumari.avif"
    },
    views: 1,
    comments: 0,
    liked: false,
    slug: "maximizing-startup-success-with-valuable-insights"
  }
];

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

export function Blog() {
  return (
    <section className="relative py-20 md:py-28 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700/5 via-transparent to-primary-700/5 blur-3xl" />
      
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
            Founder Insights
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Latest From Our Blog
            </span>
          </h3>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Practical wisdom and actionable advice for your entrepreneurial journey
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {blogPosts.map((post, index) => (
            <motion.div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
              variants={fadeInUp}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="p-6 space-y-4">
                  {/* Author and Date */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden">
                      <Image 
                        src={post.author.image} 
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white/90 text-sm font-medium">{post.author.name}</p>
                      <div className="flex items-center gap-2 text-white/60 text-xs">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Title and Excerpt */}
                  <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-white/70">
                    {post.excerpt}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10 text-white/60 text-sm">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{post.views} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{post.comments} comments</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className={`h-4 w-4 ${post.liked ? 'fill-accent text-accent' : ''}`} />
                      <span>{post.liked ? 'Liked' : 'Not marked as liked'}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View All CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-full transition-colors"
          >
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
