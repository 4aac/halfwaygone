"use client"

import { useState, useEffect } from "react"
import { Mail, Rocket, Check, ArrowRight, Users, Zap, Shield, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // Fix header when scrolled past 300px
      if (currentScrollY > 300) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerTransform = isFixed ? 0 : Math.min(scrollY * 0.5, 100)

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header
        className={`z-40 border-b border-white/10 backdrop-blur-xl bg-gradient-to-r from-black/60 via-emerald-950/20 to-black/60 transition-all duration-300 ${
          isFixed ? "fixed top-0 left-0 right-0" : "absolute top-0 left-0 right-0"
        }`}
        style={{
          transform: isFixed ? "translateY(0)" : `translateY(${headerTransform}px)`,
        }}
      >
        <div className="mx-auto w-[60%] flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600"></div>
            <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">LogoStudio</span>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="#work"
                  className="text-sm font-medium text-white/80 hover:text-emerald-300 transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="#clients"
                  className="text-sm font-medium text-white/80 hover:text-emerald-300 transition-colors"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-sm font-medium text-white/80 hover:text-emerald-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-sm font-medium text-white/80 hover:text-emerald-300 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Button
                  asChild
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 border-0"
                >
                  <Link href="#contact">Get in touch</Link>
                </Button>
              </li>
            </ul>
          </nav>
          <Button className="md:hidden bg-transparent" variant="outline" size="sm">
            Menu
          </Button>
        </div>
      </header>

      {/* Feature Badges */}
      <div className="mx-auto w-[60%] pt-24 pb-6 flex flex-wrap justify-center gap-3">
        <div className="px-4 py-2 rounded-full flex items-center gap-2 bg-gradient-to-r from-emerald-900/30 to-black/50 border border-emerald-500/20 backdrop-blur-sm">
          <Rocket size={14} className="text-emerald-400" />
          <span className="text-xs font-medium text-white/90">Investor Ready Designs</span>
        </div>
        <div className="px-4 py-2 rounded-full flex items-center gap-2 bg-gradient-to-r from-emerald-900/30 to-black/50 border border-emerald-500/20 backdrop-blur-sm">
          <Zap size={14} className="text-emerald-400" />
          <span className="text-xs font-medium text-white/90">48h Delivery</span>
        </div>
        <div className="px-4 py-2 rounded-full flex items-center gap-2 bg-gradient-to-r from-emerald-900/30 to-black/50 border border-emerald-500/20 backdrop-blur-sm">
          <Target size={14} className="text-emerald-400" />
          <span className="text-xs font-medium text-white/90">Fundraising Focused</span>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="mx-auto w-[60%] py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-white">Transform your startup into an</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">
                unforgettable brand
              </span>
            </h1>
            <p className="mt-8 text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We craft premium visual identities that help seed-stage startups secure funding, attract top talent, and
              dominate their markets from day one.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 text-lg px-8 py-4"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Start your project <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10 bg-transparent text-lg px-8 py-4"
              >
                <Link href="#work">View our work</Link>
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Check size={16} className="text-emerald-400" />
                <span>$50M+ raised by our clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-emerald-400" />
                <span>500+ funded startups</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-emerald-400" />
                <span>48h delivery</span>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="work" className="py-20 bg-gradient-to-b from-zinc-900/50 to-black">
          <div className="mx-auto w-[60%]">
            <h2 className="mb-4 text-center text-4xl font-bold text-white">Logos that raised millions</h2>
            <p className="mb-12 text-center text-white/70 max-w-2xl mx-auto">
              Every logo tells a story of success. Here are some of our recent projects that helped startups secure
              funding.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card
                  key={item}
                  className="overflow-hidden bg-gradient-to-br from-zinc-900 to-black border border-emerald-500/10"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&query=modern startup logo design ${item}`}
                      alt={`Logo design example ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-white">TechCorp {item}</h3>
                    <p className="text-sm text-emerald-400">Raised $2.5M Series A</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section - Restored */}
        <section id="clients" className="py-20 bg-black">
          <div className="mx-auto w-[60%]">
            <h2 className="mb-4 text-center text-4xl font-bold text-white">
              We work with the most famous people online
            </h2>
            <p className="mb-12 text-center text-white/70 max-w-2xl mx-auto">
              From viral content creators to industry leaders, we've helped shape the visual identity of tomorrow's
              biggest names.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alex Rivera",
                  handle: "@alextech",
                  followers: "2.4M",
                  platform: "YouTube",
                  avatar: "/placeholder.svg?height=60&width=60",
                  quote:
                    "LogoStudio transformed my personal brand. My logo is now instantly recognizable across all platforms.",
                  verified: true,
                },
                {
                  name: "Sarah Chen",
                  handle: "@sarahbuilds",
                  followers: "1.8M",
                  platform: "TikTok",
                  avatar: "/placeholder.svg?height=60&width=60",
                  quote: "The logo they created helped me scale from 100K to 1M+ followers. It's pure magic.",
                  verified: true,
                },
                {
                  name: "Marcus Johnson",
                  handle: "@cryptomarcus",
                  followers: "950K",
                  platform: "Twitter",
                  avatar: "/placeholder.svg?height=60&width=60",
                  quote: "My community instantly connected with the new brand identity. Best investment I've made.",
                  verified: true,
                },
              ].map((profile, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-black border border-emerald-500/10 hover:border-emerald-500/30 transition-all hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full"></div>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative">
                        <Image
                          src={profile.avatar || "/placeholder.svg"}
                          alt={profile.name}
                          width={60}
                          height={60}
                          className="rounded-full border-2 border-emerald-500/20"
                        />
                        {profile.verified && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-lg text-white">{profile.name}</h3>
                        </div>
                        <p className="text-white/60 text-sm">{profile.handle}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-sm font-medium text-emerald-400">{profile.followers} followers</span>
                          <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-full">
                            {profile.platform}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm italic text-white/80">"{profile.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What We Provide Section */}
        <section className="py-20 bg-gradient-to-b from-zinc-900/50 to-black">
          <div className="mx-auto w-[60%]">
            <h2 className="mb-12 text-center text-4xl font-bold text-white">What We Provide</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col p-6 bg-gradient-to-br from-emerald-900/20 to-black rounded-xl border border-emerald-500/20">
                <Shield className="h-8 w-8 mb-4 text-emerald-400" />
                <h3 className="text-xl font-semibold text-white mb-2">Investor-Ready Design</h3>
                <p className="text-white/70">
                  Logos that impress VCs and angel investors, designed to communicate professionalism and scalability.
                </p>
              </div>
              <div className="flex flex-col p-6 bg-gradient-to-br from-emerald-900/20 to-black rounded-xl border border-emerald-500/20">
                <Users className="h-8 w-8 mb-4 text-emerald-400" />
                <h3 className="text-xl font-semibold text-white mb-2">Complete Brand Package</h3>
                <p className="text-white/70">
                  Everything you need: logo variations, color palette, typography, and brand guidelines.
                </p>
              </div>
              <div className="flex flex-col p-6 bg-gradient-to-br from-emerald-900/20 to-black rounded-xl border border-emerald-500/20">
                <Zap className="h-8 w-8 mb-4 text-emerald-400" />
                <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast Delivery</h3>
                <p className="text-white/70">
                  Get your logo in 48 hours. Perfect for tight fundraising deadlines and product launches.
                </p>
              </div>
              <div className="flex flex-col p-6 bg-gradient-to-br from-emerald-900/20 to-black rounded-xl border border-emerald-500/20">
                <Target className="h-8 w-8 mb-4 text-emerald-400" />
                <h3 className="text-xl font-semibold text-white mb-2">Full Ownership Rights</h3>
                <p className="text-white/70">
                  Complete copyright transfer and unlimited usage rights. Your logo, your success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Redesigned */}
        <section id="services" className="py-20 bg-black">
          <div className="mx-auto w-[60%]">
            <h2 className="mb-4 text-center text-4xl font-bold text-white">Our Services</h2>
            <p className="mb-16 text-center text-white/70 max-w-2xl mx-auto">
              Choose the perfect package for your startup's needs. All packages include unlimited revisions and 48h
              delivery.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
              {/* Logo Design */}
              <Card className="bg-gradient-to-br from-zinc-900 to-black border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Logo Design</h3>
                    <p className="text-white/70 mb-6">
                      Perfect for early-stage startups needing a professional logo to impress investors.
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                        $1,497
                      </span>
                      <span className="text-white/60 line-through ml-2">$2,500</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">5 unique logo concepts</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">Unlimited revisions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">All file formats (AI, PNG, SVG)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">48h delivery</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              {/* Brand Identity - Featured */}
              <Card className="bg-gradient-to-br from-emerald-900/30 to-black border-2 border-emerald-500 relative transform lg:scale-110 shadow-2xl shadow-emerald-500/20">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-black px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-white mb-2">Brand Identity</h3>
                    <p className="text-white/70 mb-6">
                      Complete brand package for startups ready to scale and raise Series A funding.
                    </p>
                    <div className="mb-6">
                      <span className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                        $3,997
                      </span>
                      <span className="text-white/60 line-through ml-2">$6,500</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">Everything in Logo Design</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">Complete color palette</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">Typography selection</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">Brand guidelines document</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">Business card design</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">Pitch deck template</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-lg py-3">
                    Start Your Brand
                  </Button>
                </CardContent>
              </Card>

              {/* Logo Refresh */}
              <Card className="bg-gradient-to-br from-zinc-900 to-black border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Logo Refresh</h3>
                    <p className="text-white/70 mb-6">
                      Update your existing logo to better reflect your evolving startup's vision.
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                        $997
                      </span>
                      <span className="text-white/60 line-through ml-2">$1,500</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">Logo modernization</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">3 refined concepts</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">Unlimited revisions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">All file formats</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700">
                    Refresh Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-b from-zinc-900/50 to-black border border-zinc-800/50 rounded-lg mx-auto w-[60%] my-8"
        >
          <div className="mx-auto w-[60%]">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 text-center text-4xl font-bold text-white">Ready to raise your next round?</h2>
              <p className="mb-8 text-center text-white/70">
                Tell us about your startup and funding goals. We'll create a logo that investors can't ignore.
              </p>
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    className="h-12 w-full rounded-lg border border-zinc-700/30 bg-zinc-900/50 px-4 py-3 text-white placeholder:text-white/40 focus:border-zinc-600/50 focus:outline-none backdrop-blur-sm"
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    className="h-12 w-full rounded-lg border border-zinc-700/30 bg-zinc-900/50 px-4 py-3 text-white placeholder:text-white/40 focus:border-zinc-600/50 focus:outline-none backdrop-blur-sm"
                    placeholder="Your email"
                  />
                </div>
                <input
                  className="h-12 w-full rounded-lg border border-zinc-700/30 bg-zinc-900/50 px-4 py-3 text-white placeholder:text-white/40 focus:border-zinc-600/50 focus:outline-none backdrop-blur-sm"
                  placeholder="Your startup name"
                />
                <textarea
                  className="min-h-[120px] w-full rounded-lg border border-zinc-700/30 bg-zinc-900/50 px-4 py-3 text-white placeholder:text-white/40 focus:border-zinc-600/50 focus:outline-none backdrop-blur-sm"
                  placeholder="Tell us about your startup and funding goals"
                ></textarea>
                <select className="h-12 w-full rounded-lg border border-zinc-700/30 bg-zinc-900/50 px-4 py-3 text-white focus:border-zinc-600/50 focus:outline-none backdrop-blur-sm">
                  <option value="">Select your plan</option>
                  <option value="logo-design">Logo Design ($1,497)</option>
                  <option value="brand-identity">Brand Identity ($3,997)</option>
                  <option value="logo-refresh">Logo Refresh ($997)</option>
                  <option value="other">Other service</option>
                </select>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-lg py-4"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get Your Investor-Ready Logo
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section - Extended */}
        <section id="faq" className="py-20 bg-black">
          <div className="mx-auto w-[60%] border border-zinc-800/50 rounded-lg p-8">
            <h2 className="mb-12 text-center text-4xl font-bold text-white">Frequently Asked Questions</h2>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="item-1"
                  className="border border-zinc-700/30 rounded-lg px-6 bg-gradient-to-r from-zinc-900/50 to-black"
                >
                  <AccordionTrigger className="text-white hover:text-emerald-300">
                    How long does the logo design process take?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Our standard process takes 48 hours from brief to final delivery. For urgent fundraising deadlines,
                    we offer same-day delivery at an additional cost.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="border border-zinc-700/30 rounded-lg px-6 bg-gradient-to-r from-zinc-900/50 to-black"
                >
                  <AccordionTrigger className="text-white hover:text-emerald-300">
                    How many concepts will I receive?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    You'll receive 5 unique logo concepts designed specifically for your startup's industry and target
                    investors. We include unlimited revisions until you're 100% satisfied.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="border border-zinc-700/30 rounded-lg px-6 bg-gradient-to-r from-zinc-900/50 to-black"
                >
                  <AccordionTrigger className="text-white hover:text-emerald-300">
                    What file formats will I receive?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    You'll receive your logo in all formats needed for fundraising: AI, EPS, PDF, PNG, SVG, and JPG. We
                    also provide high-resolution versions for print materials and low-resolution versions for digital
                    use.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className="border border-zinc-700/30 rounded-lg px-6 bg-gradient-to-r from-zinc-900/50 to-black"
                >
                  <AccordionTrigger className="text-white hover:text-emerald-300">
                    Do you specialize in startup logos?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Yes! We exclusively work with startups and understand what investors look for. Our logos are
                    designed to communicate scalability, innovation, and professionalism - key factors in successful
                    fundraising.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-5"
                  className="border border-zinc-700/30 rounded-lg px-6 bg-gradient-to-r from-zinc-900/50 to-black"
                >
                  <AccordionTrigger className="text-white hover:text-emerald-300">
                    Can you help with pitch deck design?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Our Brand Identity package includes a custom pitch deck template that incorporates your new logo and
                    brand elements. Perfect for investor presentations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-6"
                  className="border border-zinc-700/30 rounded-lg px-6 bg-gradient-to-r from-zinc-900/50 to-black"
                >
                  <AccordionTrigger className="text-white hover:text-emerald-300">
                    What if I need changes after the project is complete?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    We offer 30 days of free minor adjustments after delivery. For major changes, we provide ongoing
                    support at competitive rates to help your brand evolve as your startup grows.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-7"
                  className="border border-zinc-700/30 rounded-lg px-6 bg-gradient-to-r from-zinc-900/50 to-black"
                >
                  <AccordionTrigger className="text-white hover:text-emerald-300">
                    Do you offer payment plans for startups?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Yes! We understand startup cash flow challenges. We offer flexible payment plans and can work with
                    your funding timeline. Contact us to discuss options that work for your budget.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-8"
                  className="border border-zinc-700/30 rounded-lg px-6 bg-gradient-to-r from-zinc-900/50 to-black"
                >
                  <AccordionTrigger className="text-white hover:text-emerald-300">
                    Who owns the copyright to the logo?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Upon full payment, all rights transfer to you completely. You own the logo 100% and can use it
                    however you want. We only retain the right to showcase it in our portfolio unless you request
                    otherwise.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="border-t border-emerald-500/20 bg-gradient-to-b from-black to-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/5 via-transparent to-emerald-900/5"></div>
        <div className="mx-auto w-[60%] py-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                  <span className="text-black font-bold text-xl">L</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                  LogoStudio
                </span>
              </div>
              <p className="text-white/70 mb-6 max-w-md leading-relaxed">
                We help seed-stage startups create investor-ready brands that secure funding and dominate markets. Over
                $50M raised by our clients.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">500+</div>
                  <div className="text-xs text-white/60">Funded Startups</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">$50M+</div>
                  <div className="text-xs text-white/60">Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">48h</div>
                  <div className="text-xs text-white/60">Delivery</div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="text-white/60 hover:text-emerald-300 transition-colors">
                    Logo Design
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/60 hover:text-emerald-300 transition-colors">
                    Brand Identity
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/60 hover:text-emerald-300 transition-colors">
                    Logo Refresh
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/60 hover:text-emerald-300 transition-colors">
                    Pitch Deck Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#contact" className="text-white/60 hover:text-emerald-300 transition-colors">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-white/60 hover:text-emerald-300 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:hello@logostudio.com"
                    className="text-white/60 hover:text-emerald-300 transition-colors"
                  >
                    hello@logostudio.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:+1234567890" className="text-white/60 hover:text-emerald-300 transition-colors">
                    +1 (234) 567-890
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-emerald-500/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">Copyright 2024 LogoStudio. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-white/60 hover:text-emerald-300 transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-white/60 hover:text-emerald-300 transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-white/60 hover:text-emerald-300 transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-white/60 hover:text-emerald-300 transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
