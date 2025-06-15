"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Star, FileText, BarChart3, PenTool, Mail, Bot } from 'lucide-react'
import type { Metadata } from 'next' // Import Metadata type
import { useState, useEffect } from 'react'

// Add specific metadata for the homepage
// This will be merged with the default metadata from layout.tsx
// export const metadata: Metadata = {
//   title: "zibly.ai - Your AI Email Analyst for Deep Work", // More specific title
//   description: "Delegate complex tasks to zibly.ai via email and receive professional deliverables. Boost productivity with your AI analyst. Try your first task free.",
//   openGraph: {
//     title: "zibly.ai - Your AI Email Analyst for Deep Work",
//     description: "Transform your productivity. Send tasks to zibly.ai and get high-quality analytical work done.",
//     // You can specify a unique image for this page if needed
//     // images: [{ url: 'https://zibly.ai/homepage-og.png' }],
//   },
//   twitter: {
//     title: "zibly.ai - Your AI Email Analyst for Deep Work",
//     description: "Transform your productivity. Send tasks to zibly.ai and get high-quality analytical work done.",
//   },
// }
// NOTE: Since this is a "use client" component, metadata export won't work directly here.
// For client components, you'd typically manage title/meta tags using a client-side effect hook
// or ensure the parent server component handles it.
// For simplicity in this iteration, we'll rely on the layout's metadata and focus on server components for metadata.
// If this page were a Server Component, the above metadata object would work.

export default function Home() {
  // Testimonials data
  const testimonials = [
    {
      name: "Michael Chen",
      title: "PE Director at Carlyle",
      text: "I forward Zibly our portfolio company reports and get back investment committee memos. Last week it identified a margin compression issue I missed. It's not just fast—it's thorough.",
      rating: 5
    },
    {
      name: "Amanda Foster", 
      title: "McKinsey Manager",
      text: "My team was burning out on production work. Now we use Zibly for data cleanup and first drafts, which lets my analysts focus on insights and client relationships. We're doing our best work ever.",
      rating: 4.5
    },
    {
      name: "David Park",
      title: "Series B Founder", 
      text: "Zibly is like having a brilliant analyst on my team, without the management overhead. I can finally focus on strategy instead of spreadsheets. Best $299/month investment I make.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      title: "VP Strategy at Goldman Sachs",
      text: "I send Zibly market research requests that would take my team weeks. Get comprehensive reports back in hours. The quality rivals what we'd produce internally, but 10x faster.",
      rating: 5
    },
    {
      name: "James Rodriguez",
      title: "Head of Product at Stripe",
      text: "Zibly handles our competitive analysis and user research synthesis. What used to be a 2-week process now happens overnight. My PMs can focus on building instead of research grunt work.",
      rating: 4.5
    },
    {
      name: "Lisa Thompson",
      title: "Managing Director at Bain",
      text: "Client deliverables that used to require 3 junior consultants now get done by Zibly. The analysis is thorough, the formatting is perfect, and it's ready for client presentation.",
      rating: 5
    },
    {
      name: "Robert Kim",
      title: "Chief Investment Officer",
      text: "I email Zibly our quarterly earnings calls and get back detailed investment thesis updates. It catches nuances in management commentary that even experienced analysts miss.",
      rating: 4.5
    },
    {
      name: "Maria Gonzalez",
      title: "Senior Partner at A16Z",
      text: "Due diligence that used to take our team 2 weeks now gets done in 2 days with Zibly. The depth of analysis is incredible - it's like having a team of senior analysts on demand.",
      rating: 5
    },
    {
      name: "Alex Turner",
      title: "Chief Strategy Officer at Meta",
      text: "Zibly processes our competitive intelligence reports and delivers strategic insights that inform our product roadmap. It's like having a dedicated strategy consultant available 24/7.",
      rating: 5
    },
    {
      name: "Jennifer Walsh",
      title: "Investment Director at Sequoia",
      text: "We use Zibly for startup due diligence. It analyzes financial models, market sizing, and competitive landscapes faster than our entire research team. Critical for our investment decisions.",
      rating: 4.5
    },
    {
      name: "Marcus Johnson",
      title: "Senior Partner at BCG",
      text: "Our clients expect BCG-quality analysis in record time. Zibly helps us deliver comprehensive market studies and strategic recommendations that exceed expectations while meeting impossible deadlines.",
      rating: 5
    },
    {
      name: "Rachel Green",
      title: "VP of Business Development at Salesforce",
      text: "Partnership evaluations that used to take weeks now happen in days. Zibly analyzes potential partners' financials, market position, and strategic fit with incredible accuracy.",
      rating: 4.5
    },
    {
      name: "Thomas Anderson",
      title: "Head of M&A at JPMorgan",
      text: "Deal analysis that used to require a team of analysts now gets done by Zibly overnight. The financial modeling and market analysis quality is investment banking grade.",
      rating: 5
    },
    {
      name: "Sophie Martinez",
      title: "Chief Marketing Officer at Airbnb",
      text: "Market research and competitive analysis for new market entries used to take months. Zibly delivers comprehensive reports in hours, helping us move faster than competitors.",
      rating: 5
    },
    {
      name: "Daniel Cooper",
      title: "Managing Director at Blackstone",
      text: "Real estate investment analysis has never been this efficient. Zibly processes market data, comparable sales, and investment projections with the precision of our best analysts.",
      rating: 4.5
    },
    {
      name: "Emma Thompson",
      title: "Head of Strategy at Netflix",
      text: "Content strategy decisions require deep market analysis. Zibly processes viewing data, competitor content strategies, and audience insights to inform our billion-dollar content investments.",
      rating: 5
    },
    {
      name: "Kevin Liu",
      title: "Principal at Kleiner Perkins",
      text: "Startup evaluation requires analyzing hundreds of data points. Zibly synthesizes market size, team backgrounds, competitive landscape, and financial projections into actionable investment insights.",
      rating: 4.5
    },
    {
      name: "Victoria Adams",
      title: "Chief Operating Officer at Uber",
      text: "Operational efficiency analysis across global markets used to require massive teams. Zibly processes performance data and identifies optimization opportunities in record time.",
      rating: 5
    },
    {
      name: "Ryan Mitchell",
      title: "Senior Director at Deloitte",
      text: "Client engagements demand rapid turnaround on complex analysis. Zibly helps us deliver Fortune 500-quality strategic recommendations while maintaining our reputation for excellence.",
      rating: 5
    },
    {
      name: "Isabella Rodriguez",
      title: "VP of Corporate Development at Google",
      text: "Acquisition target analysis requires deep technical and market evaluation. Zibly processes technical documentation, market positioning, and financial metrics to inform billion-dollar decisions.",
      rating: 4.5
    },
    {
      name: "Nathan Brooks",
      title: "Chief Investment Officer at Fidelity",
      text: "Portfolio analysis across thousands of holdings requires sophisticated data processing. Zibly identifies risk patterns and opportunities that our traditional analysis methods miss.",
      rating: 5
    },
    {
      name: "Olivia Chen",
      title: "Head of Innovation at Tesla",
      text: "Technology roadmap planning requires analyzing emerging trends and competitive movements. Zibly processes patent filings, research papers, and market signals to inform our R&D strategy.",
      rating: 4.5
    },
    {
      name: "Christopher Davis",
      title: "Managing Partner at Accenture",
      text: "Digital transformation projects require comprehensive industry analysis. Zibly evaluates technology trends, implementation costs, and ROI projections to guide our client recommendations.",
      rating: 5
    },
    {
      name: "Grace Wang",
      title: "VP of Strategy at Microsoft",
      text: "Cloud market analysis requires processing vast amounts of competitive intelligence. Zibly synthesizes pricing strategies, feature comparisons, and market share data into actionable insights.",
      rating: 5
    },
    {
      name: "Benjamin Taylor",
      title: "Senior Partner at EY",
      text: "Regulatory compliance analysis across multiple jurisdictions used to take months. Zibly processes regulatory changes and impact assessments, keeping our clients ahead of compliance requirements.",
      rating: 4.5
    },
    {
      name: "Samantha Lee",
      title: "Chief Data Officer at Amazon",
      text: "E-commerce trend analysis requires processing millions of data points. Zibly identifies consumer behavior patterns and market opportunities that drive our product and pricing strategies.",
      rating: 5
    },
    {
      name: "Andrew Wilson",
      title: "Investment Director at Tiger Global",
      text: "Growth equity investments require rapid market analysis and competitive positioning studies. Zibly delivers institutional-quality research that informs our multi-million dollar investment decisions.",
      rating: 4.5
    },
    {
      name: "Michelle Zhang",
      title: "Head of Corporate Strategy at Apple",
      text: "Strategic planning for new product categories requires deep market intelligence. Zibly analyzes consumer trends, competitive landscapes, and technology adoption patterns to guide our roadmap.",
      rating: 5
    }
  ]

  // Create infinite scroll array by tripling the testimonials
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials]

  const handleEmailClick = () => {
    const subject = "Research competitors for my startup"
    const body = `Hi Zibly,

Can you research 3 main competitors for my project management SaaS? Need pricing and key features.

Thanks!`

    const mailtoLink = `mailto:work@zibly.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  const handlePrevious = () => {
    const container = document.getElementById('testimonials-container')
    if (container) {
      const cardWidth = 400
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' })
      
      // Handle infinite scroll boundary
      if (container.scrollLeft <= cardWidth) {
        setTimeout(() => {
          const jumpPosition = (testimonials.length * 2 - 1) * cardWidth
          container.scrollTo({ left: jumpPosition, behavior: 'auto' })
        }, 300)
      }
    }
  }

  const handleNext = () => {
    const container = document.getElementById('testimonials-container')
    if (container) {
      const cardWidth = 400
      container.scrollBy({ left: cardWidth, behavior: 'smooth' })
      
      // Handle infinite scroll boundary
      if (container.scrollLeft >= (testimonials.length * 2) * cardWidth) {
        setTimeout(() => {
          const jumpPosition = testimonials.length * cardWidth
          container.scrollTo({ left: jumpPosition, behavior: 'auto' })
        }, 300)
      }
    }
  }

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-current text-yellow-500" />)
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-gray-300" />
          <Star className="h-4 w-4 fill-current text-yellow-500 absolute top-0 left-0" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        </div>
      )
    }

    return stars
  }

  // Initialize scroll position
  useEffect(() => {
    const container = document.getElementById('testimonials-container')
    if (container) {
      const cardWidth = 400
      const initialPosition = testimonials.length * cardWidth // Start at middle set
      container.scrollTo({ left: initialPosition, behavior: 'auto' })
    }
  }, [])

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
              <h1 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>
                Your email-powered AI assistant
                </h1>
              <p className="max-w-[600px] text-lg md:text-xl inter-text mx-auto">
                Simply send an email with your tasks, and zibly.ai will handle it for you. The simplest way to get things done with AI.
                </p>
              </div>
            <div className="flex justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-600">
                  <Link href="/signup">
                  Get Started
                  </Link>
                </Button>
            </div>
          </div>
              </div>
      </section>

      {/* Email Demo Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h2 className="inter-section-heading mb-4" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>See How It Works</h2>
              <p className="max-w-[900px] text-lg inter-text mx-auto">A real email exchange with zibly.ai</p>
            </div>
            
            {/* Email Cards Side by Side */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* User's Email */}
              <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-4">
                {/* Mac Window Controls */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <div className="flex-1 text-center">
                    <span className="text-xs inter-text text-gray-600">New Message</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="h-4 w-4 text-blue-600" />
                </div>
                
                <div className="space-y-3 text-left">
                  <div className="text-xs">
                    <span className="inter-text-medium text-gray-700">To:</span>
                    <span className="inter-text text-blue-600 font-medium ml-2">work@zibly.ai</span>
                  </div>
                  
                  <div className="border-b border-gray-300 pb-2">
                    <span className="text-xs inter-text text-gray-600">Subject: </span>
                    <span className="text-sm inter-text-medium text-gray-900 font-bold">Research competitors for my startup</span>
                  </div>
                  
                  <div className="text-sm inter-text text-gray-700 leading-relaxed pt-2">
                    <strong>Hi Zibly,</strong>
                    <br />
                    <br />
                    Can you research <strong>3 main competitors</strong> for my project management SaaS? I need:
                    <br />
                    • Pricing information
                    <br />
                    • Key features comparison
                    <br />
                    • Market positioning
                    <br />
                    <br />
                    Thanks!
                    <br />
                    <span className="text-gray-600 italic">- Sarah</span>
                  </div>
                </div>
              </div>

              {/* AI Response */}
              <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-4">
                {/* Mac Window Controls */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <div className="flex-1 text-center">
                    <span className="text-xs inter-text text-gray-600">Inbox - work@zibly.ai</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="h-4 w-4 text-purple-600" />
                  <div className="text-xs inter-text-medium text-purple-800">Zibly AI Response</div>
                  <div className="ml-auto">
                    <span className="text-xs inter-text text-gray-500 bg-green-100 px-2 py-1 rounded-full">✓ Delivered</span>
                  </div>
                </div>
                
                <div className="space-y-3 text-left">
                  <div className="text-xs">
                    <span className="inter-text-medium text-gray-700">From:</span>
                    <span className="inter-text text-purple-600 font-medium ml-2">work@zibly.ai</span>
                  </div>
                  
                  <div className="border-b border-purple-300 pb-2">
                    <span className="text-xs inter-text text-purple-600">Subject: </span>
                    <span className="text-sm inter-text-medium text-purple-900 font-bold">Re: Research competitors for my startup</span>
                  </div>
                  
                  <div className="text-sm inter-text text-gray-800 leading-relaxed pt-2">
                    <strong>Hi Sarah!</strong>
                    <br />
                    <br />
                    I've completed your competitor research. Here are the <strong>top 3 competitors</strong>:
                    <br />
                    <br />
                    <strong>1. Asana:</strong> $10-25/user/month, visual tracking
                    <br />
                    <strong>2. Monday.com:</strong> $8-20/user/month, custom workflows
                    <br />
                    <strong>3. Trello:</strong> Free-$17.50/user/month, Kanban boards
                    <br />
                    <br />
                    📊 competitor-analysis-detailed.pdf
                    <br />
                    <br />
                    <strong>Best regards,</strong>
                    <br />
                    Zibly AI Assistant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h2 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>
                AI-Powered Task Completion via Email
              </h2>
              <p className="max-w-[900px] text-lg inter-text">
                We're building the simplest way to get things done with AI
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <FileText className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">No New Apps</h3>
                <p className="inter-text">
                  Works directly from your email inbox. No need to learn new tools or interfaces.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <Sparkles className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">Intelligent AI</h3>
                <p className="inter-text">
                  Our AI understands and completes complex tasks with high accuracy and attention to detail.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <Star className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">Save Time</h3>
                <p className="inter-text">
                  Focus on what matters most while zibly.ai handles your tasks efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h2 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>
                Simple Email, Powerful Results
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <BarChart3 className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">Research & Analysis</h3>
                <p className="inter-text">
                  Get comprehensive research, competitor analysis, and market insights delivered straight to your inbox.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <FileText className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">Content Creation</h3>
                <p className="inter-text">
                  From blog posts to social media content, get high-quality writing that matches your brand voice.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <PenTool className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">Data Processing</h3>
                <p className="inter-text">
                  Transform raw data into actionable insights with clear visualizations and summaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-bl from-purple-50 via-white to-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>As Simple as Sending an Email</h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">1</div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">Send Your Task</h3>
                <p className="inter-text">
                  Email your task to work@zibly.ai. Be as specific or general as you need - our AI will ask for clarification if needed.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">2</div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">We Work On It</h3>
                <p className="inter-text">
                  Our AI processes your request, researches, analyzes, and creates the perfect solution for your needs.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">3</div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">Get Results</h3>
                <p className="inter-text">
                  Receive your completed task in your inbox, ready to use. No apps to learn, no interfaces to master.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>Trusted by Top Professionals</h2>
            </div>
          </div>
          
          {/* Testimonials Carousel */}
          <div className="mx-auto max-w-6xl py-12">
            <div className="relative flex items-center">
              {/* Left Navigation Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevious}
                className="absolute left-0 z-10 bg-white hover:bg-gray-50 shadow-lg border-2"
                style={{ transform: 'translateX(-50%)' }}
              >
                ←
              </Button>

              {/* Testimonials Container */}
              <div 
                id="testimonials-container"
                className="flex gap-6 overflow-x-hidden hover:overflow-x-auto scrollbar-hide pb-8 pt-4 mx-8"
                style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {infiniteTestimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-80 flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm bg-white transition-all duration-300 hover:scale-105"
                    style={{ scrollSnapAlign: 'start' }}
                  >
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-gray-200" />
                <div>
                        <p className="text-sm inter-text-medium">{testimonial.name}</p>
                        <p className="text-xs inter-text">{testimonial.title}</p>
                </div>
              </div>
                    <p className="inter-text">
                      {testimonial.text}
              </p>
              <div className="flex">
                      {renderStars(testimonial.rating)}
                </div>
              </div>
                ))}
              </div>

              {/* Right Navigation Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={handleNext}
                className="absolute right-0 z-10 bg-white hover:bg-gray-50 shadow-lg border-2"
                style={{ transform: 'translateX(50%)' }}
              >
                →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Amplify Your Impact Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-bl from-purple-50 via-white to-pink-50">
        <div className="container max-w-4xl px-4 md:px-6">
          <h2 className="inter-section-heading mb-8 text-center" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>Amplify Your Impact</h2>
          <div className="rounded-lg bg-white border shadow-lg p-8">
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div>
                <div className="text-2xl inter-text-medium text-primary">$150-500</div>
                <div className="text-sm inter-text">Your hourly value</div>
              </div>
              <div>
                <div className="text-2xl inter-text-medium text-primary">15-20 hours</div>
                <div className="text-sm inter-text">Weekly analytical tasks</div>
              </div>
              <div>
                <div className="text-2xl inter-text-medium text-primary">$2,250-10,000</div>
                <div className="text-sm inter-text">Potential value unlocked per week</div>
              </div>
            </div>
            <p className="mt-6 text-center inter-text">
              When you delegate analytical work to zibly.ai, you can focus on the strategic decisions only you can make.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>
                Ready to get started?
              </h2>
            </div>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-600"
              >
                <Link href="/signup">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



