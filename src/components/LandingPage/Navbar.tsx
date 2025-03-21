"use client"
import { 
  Home,
  Zap,
  BookOpen,
  Calendar,
  Handshake
} from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { useRouter } from 'next/navigation'

export function Navbar() {
  const router = useRouter();
  
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Set a timestamp in sessionStorage to indicate navigation
    sessionStorage.setItem('lastNavTimestamp', Date.now().toString());
    
    // Check if we're already on the home page
    if (window.location.pathname === '/') {
      // If already on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, navigate to home and force scroll to top
      router.push('/');
      
      // Use setTimeout to ensure the scroll happens after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }, 100);
    }
  };
  
  const navItems = [
    { 
      name: 'Home', 
      url: '/', 
      icon: <Home />,
      onClick: handleHomeClick
    },
    { 
      name: 'Growth Programs', 
      url: '/growth-programs', 
      icon: <Zap />,
      subItems: [
        { name: 'Launchpad', url: '/growth-programs/launchpad' },
        { name: 'Velocity', url: '/growth-programs/velocity' }
      ]
    },
    { name: 'Webinars', url: '/webinars', icon: <Calendar /> },
    { name: 'Blog', url: '/blog', icon: <BookOpen /> },
    { name: 'Partner with us', url: '/partner', icon: <Handshake /> }
  ]

  return <NavBar items={navItems} 
    className="" 
  />
}