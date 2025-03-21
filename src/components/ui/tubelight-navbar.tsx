"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronDown, Menu, X } from "lucide-react"

interface NavSubItem {
  name: string
  url: string
}

interface NavItem {
  name: string
  url: string
  icon: React.ReactElement
  subItems?: NavSubItem[]
  onClick?: (e: React.MouseEvent) => void
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Check the current path and set the active tab accordingly
    const path = window.location.pathname;
    const currentItem = items.find(item => {
      if (path === '/' && item.url === '/') return true;
      if (path !== '/' && item.url !== '/' && path.startsWith(item.url)) return true;
      return false;
    });
    
    if (currentItem) {
      setActiveTab(currentItem.name);
    }
    
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [mobileMenuOpen, items])

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }
    setHoveredItem(itemName)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null)
    }, 100) // Small delay to allow moving to dropdown
  }

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      {/* Mobile hamburger menu button */}
      {isMobile && (
        <button
          onClick={toggleMobileMenu}
          className="fixed top-4 right-4 z-50 p-2 rounded-full bg-background/10 border border-white/10 backdrop-blur-lg shadow-lg"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      )}

      {/* Mobile side panel */}
      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-3/4 max-w-xs z-40 bg-background-dark/95 backdrop-blur-lg border-l border-white/10 shadow-xl overflow-y-auto"
          >
            <div className="flex flex-col p-6 space-y-6 mt-16">
              {items.map((item) => {
                const isActive = activeTab === item.name
                const hasDropdown = item.subItems && item.subItems.length > 0

                return (
                  <div key={item.name} className="space-y-2">
                    {hasDropdown ? (
                      <>
                        <button
                          onClick={() => setHoveredItem(hoveredItem === item.name ? null : item.name)}
                          className={cn(
                            "flex items-center justify-between w-full text-left text-base font-semibold py-2",
                            "text-white/80 hover:text-white",
                            isActive && "text-white"
                          )}
                        >
                          <div className="flex items-center">
                            {React.cloneElement(item.icon, { size: 18, className: "mr-3" })}
                            {item.name}
                          </div>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              hoveredItem === item.name && "transform rotate-180"
                            )}
                          />
                        </button>
                        {hoveredItem === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-7 space-y-2 mt-2"
                          >
                            {item.subItems?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.url}
                                onClick={() => {
                                  setActiveTab(item.name)
                                  setMobileMenuOpen(false)
                                }}
                                className="block py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.url}
                        onClick={(e) => {
                          if (item.onClick) {
                            item.onClick(e);
                          } else {
                            setActiveTab(item.name)
                            setMobileMenuOpen(false)
                          }
                        }}
                        className={cn(
                          "flex items-center text-base font-semibold py-2",
                          "text-white/80 hover:text-white",
                          isActive && "text-white"
                        )}
                      >
                        {React.cloneElement(item.icon, { size: 18, className: "mr-3" })}
                        {item.name}
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop navigation */}
      <div
        className={cn(
          "absolute bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-10 mb-6 sm:pt-6",
          className,
          isMobile && "hidden"
        )}
      >
        <div className="flex items-center gap-3 bg-background/10 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {items.map((item) => {
            const isActive = activeTab === item.name
            const hasDropdown = item.subItems && item.subItems.length > 0
            const isHovered = hoveredItem === item.name

            return (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {hasDropdown ? (
                  <div 
                    className={cn(
                      "flex items-center cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                      "text-white/80 hover:text-white",
                      isActive && "bg-white/10 text-white",
                    )}
                  >
                    <span className="hidden md:inline">{item.name}</span>
                    <span className="md:hidden">
                      {React.cloneElement(item.icon, { size: 18, strokeWidth: 2.5 })}
                    </span>
                    <ChevronDown 
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-200",
                        isHovered && "transform rotate-180"
                      )} 
                    />
                  </div>
                ) : (
                  <Link
                    href={item.url}
                    onClick={(e) => {
                      if (item.onClick) {
                        item.onClick(e);
                      } else {
                        setActiveTab(item.name);
                      }
                    }}
                    className={cn(
                      "flex items-center cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                      "text-white/80 hover:text-white",
                      isActive && "bg-white/10 text-white",
                    )}
                  >
                    <span className="hidden md:inline">{item.name}</span>
                    <span className="md:hidden">
                      {React.cloneElement(item.icon, { size: 18, strokeWidth: 2.5 })}
                    </span>
                  </Link>
                )}
                
                {isActive && !hasDropdown && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
                
                {hasDropdown && isHovered && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-background/10 border border-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden z-20"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="p-2 space-y-1">
                      {item.subItems?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.url}
                          onClick={() => {
                            setActiveTab(item.name)
                          }}
                          className="block px-4 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
