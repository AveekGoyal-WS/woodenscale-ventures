import { 
  Home,
  Zap,
  BookOpen,
  Calendar,
  Handshake
} from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function Navbar() {
  const navItems = [
    { name: 'Home', url: '/', icon: <Home /> },
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