"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">◆</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">Brand</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
            Features
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
            Pricing
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
            About
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 text-sm text-foreground hover:text-muted-foreground transition">Sign In</button>
          <button className="px-6 py-2 text-sm bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 px-4 py-4 space-y-4">
          <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">
            Features
          </a>
          <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">
            Pricing
          </a>
          <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">
            About
          </a>
          <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">
            Contact
          </a>
          <div className="flex gap-2 pt-4 border-t border-border/40">
            <button className="flex-1 px-4 py-2 text-sm text-foreground">Sign In</button>
            <button className="flex-1 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
