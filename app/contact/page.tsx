"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      alert("Thank you for your message! We'll get back to you soon.")
    }, 1000)
  }

  return (
    <div className="container max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl tracking-tighter sm:text-5xl inter-heading-normal">Contact Us</h1>
          <p className="max-w-[900px] text-lg inter-text">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="inter-heading-normal">Send us a message</CardTitle>
            <CardDescription className="inter-text">Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="inter-text-medium">First name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="inter-text-medium">Last name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="inter-text-medium">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="inter-text-medium">Company (optional)</Label>
                <Input id="company" placeholder="Acme Inc" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="inter-text-medium">Message</Label>
                <Textarea id="message" placeholder="Tell us how we can help..." required />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary-600" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="inter-heading-normal">Get in touch</CardTitle>
              <CardDescription className="inter-text">Reach out to us through any of these channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="inter-text-medium">Email</p>
                  <p className="text-sm inter-text">work@zibly.ai</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="inter-text-medium">Phone</p>
                  <p className="text-sm inter-text">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="inter-text-medium">Office</p>
                  <p className="text-sm inter-text">San Francisco, CA</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="inter-heading-normal">Support</CardTitle>
              <CardDescription className="inter-text">Need help with your account or have technical questions?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm inter-text mb-4">
                For technical support and account-related questions, please email us at:
              </p>
              <p className="inter-text-medium">support@zibly.ai</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
