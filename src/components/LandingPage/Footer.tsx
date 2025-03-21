import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Programs",
    links: [
      { label: "Growth Programs", href: "/programs" },
      { label: "Bootcamps", href: "/bootcamps" },
      { label: "Webinars", href: "/webinars" },
      { label: "Mentorship", href: "/mentorship" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Founder Tools", href: "/tools" },
      { label: "Startup Guide", href: "/guide" },
      { label: "FAQ", href: "/faq" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Mission", href: "/mission" },
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/contact" }
    ]
  }
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Youtube, href: "https://youtube.com" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-darker pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative h-12 w-48 mb-6 ml-[-60px]">
              <Image 
                src="/Assets/WOODENSCALE_logo-without-bg.png" 
                alt="WoodenScale Ventures" 
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white/70 max-w-md">
              Empowering aspiring founders with knowledge, tools, and community to transform ideas into successful startups.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  >
                    <Icon className="h-5 w-5 text-white/80" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="relative z-10">
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className={`text-white/70 hover:text-accent transition-colors relative z-10 ${link.label === "Webinars" ? "webinar-footer-link" : ""}`}
                      prefetch={true}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Contact Info */}
        <div className="border-t border-white/10 pt-8 pb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-accent" />
            <a href="mailto:contact@woodenscale.in" className="text-white/80 hover:text-white transition-colors">
              contact@woodenscale.in
            </a>
          </div>
          <div className="text-white/50 text-sm">
            &copy; {currentYear} WoodenScale Ventures. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
