import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, DollarSign, Brain, Settings, MessageCircle, Star, TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-yellow-50 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
              🚀 Google Ads Experts
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-yellow-500 bg-clip-text text-transparent mb-6">
              Grow Smarter with SkyAdz
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Google Ads Experts – Tailored to Your Audience, Priced Per User, Designed for Results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-lg px-8">
                <Link href="/contact">👉 Book a Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <Link href="/contact">📩 Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why SkyAdz Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why SkyAdz?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just another agency. We're your growth partners with a unique approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">🎯 Target Any Niche</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We run ads for every kind of business. No matter your industry, we have the expertise to drive results.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-cyan-600 mb-4" />
                <CardTitle className="text-xl">💸 Per-User Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Pay only for what you get – no flat or hidden costs. Our pricing is transparent and results-driven.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-200 transition-colors">
              <CardHeader>
                <Brain className="w-12 h-12 text-yellow-600 mb-4" />
                <CardTitle className="text-xl">🧠 Custom Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">No templates, no copy-paste. Every business gets a tailored strategy designed for maximum impact.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <Settings className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">🛠️ Google Ads Specialists</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We live and breathe Google Ads. Our team stays updated with the latest features and best practices.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">💬 Quick Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Get a response in under 1 hour. We believe in fast communication and quick turnarounds.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-red-600 mb-4" />
                <CardTitle className="text-xl">📈 Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Our strategies are tested and proven. We focus on what works and optimize for maximum ROI.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services at a Glance */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Services at a Glance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive Google Ads solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Google Search & Display Ads</h3>
              <p className="text-gray-600 text-sm">Reach customers when they're searching for your products or browsing relevant websites.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">YouTube Ads</h3>
              <p className="text-gray-600 text-sm">Engage your audience with compelling video campaigns on the world's largest video platform.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Remarketing Campaigns</h3>
              <p className="text-gray-600 text-sm">Re-engage visitors who showed interest but didn't convert the first time.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Landing Page Optimization</h3>
              <p className="text-gray-600 text-sm">Optimize your landing pages for maximum conversion rates and better ad performance.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Free Ad Performance Consultation</h3>
              <p className="text-gray-600 text-sm">Get expert insights on your current campaigns and discover improvement opportunities.</p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
              <Link href="/services">👉 Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real businesses. See how we've helped companies grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={`star-aarav-${star}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Aarav Sharma</CardTitle>
                <p className="text-sm text-gray-600">Founder, LocalStore.in</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">
                  "SkyAdz scaled my leads from 0 to 300/month in 3 weeks. Their ad strategy works like magic."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={`star-nikita-${star}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Nikita R.</CardTitle>
                <p className="text-sm text-gray-600">Wellness Coach</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">
                  "Our sales skyrocketed with their unique ad targeting strategy. We were amazed."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={`star-raj-${star}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Raj M.</CardTitle>
                <p className="text-sm text-gray-600">Ecommerce Owner</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">
                  "Per-user pricing is a game-changer. We now spend smarter and see results faster."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
