import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, TrendingUp, Heart, Award, Zap } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-yellow-50 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
              👋 About SkyAdz
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-yellow-500 bg-clip-text text-transparent mb-6">
              Meet SkyAdz – Your Growth Partner in the Digital World
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We specialize in performance-driven Google Ads strategies to deliver results that actually matter – conversions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl mb-8">
                At SkyAdz, we specialize in performance-driven Google Ads strategies to deliver results that actually matter – conversions.
                Whether you're a solopreneur, startup, or scaling brand, we believe every business deserves tailored growth solutions.
              </p>

              <p className="text-lg mb-8">
                We don't bill you blindly — we charge based on actual user results, making us accountable for your ROI.
                This unique approach ensures that we're as invested in your success as you are.
              </p>

              <p className="text-lg mb-8">
                Our team of Google Ads experts stays ahead of the curve, constantly adapting to platform changes and
                industry trends to ensure your campaigns perform at their peak. We believe in transparency,
                accountability, and most importantly, delivering measurable results.
              </p>

              <div className="text-center text-2xl font-semibold text-blue-600 mt-12">
                Let's build something amazing, together.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values shape everything we do and every campaign we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Results-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We measure success by your ROI, not vanity metrics. Every decision we make is driven by performance data.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 text-cyan-600 mb-4" />
                <CardTitle className="text-xl">Client-Centric</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Your success is our success. We work as an extension of your team, not just another vendor.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-200 transition-colors">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-yellow-600 mb-4" />
                <CardTitle className="text-xl">Continuous Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We're always learning, testing, and optimizing to stay ahead of the competition.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <Heart className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">No hidden fees, no confusing reports. We believe in clear communication and honest pricing.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <Award className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We don't settle for good enough. Every campaign is crafted with precision and attention to detail.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Zap className="w-12 h-12 text-red-600 mb-4" />
                <CardTitle className="text-xl">Speed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Fast response times, quick implementations, and rapid optimizations to keep you ahead.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Why Businesses Trust SkyAdz
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">We've helped hundreds of businesses scale their revenue through strategic Google Ads campaigns.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Industry Expertise</h3>
                    <p className="text-gray-600">Our team stays certified and updated with the latest Google Ads features and best practices.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Custom Strategies</h3>
                    <p className="text-gray-600">No two businesses are the same. We create unique strategies tailored to your specific goals.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Performance-Based Pricing</h3>
                    <p className="text-gray-600">Our unique per-user pricing model aligns our success with yours.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Rapid Response</h3>
                    <p className="text-gray-600">Get answers to your questions in under 1 hour. We believe in quick communication.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Ongoing Optimization</h3>
                    <p className="text-gray-600">We continuously monitor and optimize your campaigns for maximum performance.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                <Link href="/contact">Ready to Work With Us?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
