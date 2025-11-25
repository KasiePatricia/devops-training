"use client"

import { Zap, Shield, Palette, Smartphone, Gauge, Workflow } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed and performance. Lightning-fast load times and smooth interactions.",
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Enterprise-grade security with encryption and best practices built-in.",
  },
  {
    icon: Palette,
    title: "Customizable",
    description: "Fully customizable components with dark mode support by default.",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    description: "Mobile-first design that looks perfect on any device or screen size.",
  },
  {
    icon: Gauge,
    title: "Scalable",
    description: "Built to scale from startups to enterprise-level applications.",
  },
  {
    icon: Workflow,
    title: "Easy to Use",
    description: "Intuitive interface designed for maximum productivity and ease of use.",
  },
]

export function Features() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 border-t border-border/40">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6">
          Features
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Everything You Need</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
          Powerful features designed to help you succeed
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="p-6 rounded-lg border border-border/40 bg-card hover:border-border/60 transition group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition">
                <Icon size={20} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
