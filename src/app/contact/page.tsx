'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Clock, MessageCircle, Calendar, Send, MapPin } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    service: '',
    callTime: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you within 1 hour.')
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-yellow-50 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
              📞 Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-yellow-500 bg-clip-text text-transparent mb-6">
              Let's Talk – We'll Reply in Under 1 Hour
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with Google Ads? Get in touch for your free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">skyadzservice@gmail.com</p>
                      <a href="mailto:skyadzservice@gmail.com" className="text-blue-600 hover:underline">
                        Send us an email
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-yellow-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+91 7017290429</p>
                      <p className="text-gray-600">+91 9548745809</p>
                      <a href="tel:+917017290429" className="text-blue-600 hover:underline">
                        Call us now
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-green-500 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                      <p className="text-gray-600">Under 1 hour</p>
                      <p className="text-sm text-gray-500">Monday to Friday, 9 AM - 8 PM IST</p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600" asChild>
                    <Link href="tel:+917017290429">
                      <Phone className="w-5 h-5 mr-2" />
                      🗓️ Book a Call Now
                    </Link>
                  </Button>

                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <Link href="mailto:skyadzservice@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Quick Email
                    </Link>
                  </Button>
                </div>

                {/* Why Contact Us */}
                <Card className="mt-8 border-2 border-blue-100 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900">Why Contact SkyAdz?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-center space-x-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>Free consultation & strategy session</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>Response within 1 hour guaranteed</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Flexible scheduling options</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>Custom solutions for your business</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-2 border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-2xl">✍️ Get Your Free Consultation</CardTitle>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you within 1 hour.</p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="businessType">Business Type *</Label>
                        <Input
                          id="businessType"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleInputChange}
                          placeholder="e.g., E-commerce, Local Service, SaaS"
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="service">What You're Looking For *</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select a service</option>
                          <option value="google-ads-management">Google Ads Management</option>
                          <option value="free-consultation">Free Consultation</option>
                          <option value="campaign-audit">Campaign Audit</option>
                          <option value="landing-page-optimization">Landing Page Optimization</option>
                          <option value="youtube-ads">YouTube Ads</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="callTime">Preferred Call Time</Label>
                        <select
                          id="callTime"
                          name="callTime"
                          value={formData.callTime}
                          onChange={handleInputChange}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select preferred time</option>
                          <option value="morning">Morning (9 AM - 12 PM)</option>
                          <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                          <option value="evening">Evening (4 PM - 8 PM)</option>
                          <option value="flexible">I'm flexible</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="message">Additional Details</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your business goals, current challenges, or any specific questions you have..."
                          rows={4}
                          className="mt-1"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message & Get Free Consultation
                      </Button>
                    </form>

                    <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-green-800 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <strong>Fast Response Guarantee:</strong> We'll respond to your message within 1 hour during business hours.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions about our services and process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How quickly can you start working on my campaigns?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">We can typically start within 2-3 business days after our initial consultation and strategy alignment.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What makes your pricing model different?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Our per-user pricing model means you only pay for actual results, aligning our success with yours.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you work with businesses in all industries?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Yes, we have experience across various industries and tailor our strategies to each business type.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's included in the free consultation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Account audit, strategy recommendations, competitive analysis, and a custom growth plan for your business.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
