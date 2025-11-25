"use client"

import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
      <div className="mb-8">
        <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6">
          ✨ Beautiful & Modern
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
        Build Amazing Things With <span className="text-primary">Modern Design</span>
      </h1>

      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance leading-relaxed">
        Create stunning digital experiences with our modern dark-themed landing page template. Perfect for showcasing
        your product or service with style and elegance.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition inline-flex items-center justify-center gap-2">
          Get Started Now
          <ArrowRight size={18} />
        </button>
        <button className="px-8 py-3 border border-border/60 text-foreground rounded-full font-medium hover:bg-secondary/10 transition">
          Learn More
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 pt-20 border-t border-border/40">
        <div className="space-y-2">
          <div className="text-2xl sm:text-3xl font-bold">10K+</div>
          <p className="text-muted-foreground">Active Users</p>
        </div>
        <div className="space-y-2">
          <div className="text-2xl sm:text-3xl font-bold">99.9%</div>
          <p className="text-muted-foreground">Uptime</p>
        </div>
        <div className="space-y-2">
          <div className="text-2xl sm:text-3xl font-bold">24/7</div>
          <p className="text-muted-foreground">Support</p>
        </div>
      </div>
    </section>
  )
}
