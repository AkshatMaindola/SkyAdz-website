import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Monitor, Youtube, RotateCcw, TrendingUp, BarChart3, Target, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-yellow-50 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
              📦 Our Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-yellow-500 bg-clip-text text-transparent mb-6">
              SkyAdz Services – Crafted to Convert
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive Google Ads solutions designed to maximize your ROI and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Service - Google Ads Management */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                🟡 Google Ads Management
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Complete Google Ads management tailored to your business goals and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Google Search, Display & Shopping Ads</h4>
                      <p className="text-gray-600">Full-spectrum campaign management across all Google Ads platforms.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Geo-targeted Campaigns</h4>
                      <p className="text-gray-600">Precise location targeting to reach your ideal customers.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">A/B Ad Copy Testing</h4>
                      <p className="text-gray-600">Continuous testing to optimize ad performance and messaging.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Conversion Tracking & Analytics</h4>
                      <p className="text-gray-600">Detailed tracking setup to measure and optimize conversions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Monthly Reports</h4>
                      <p className="text-gray-600">Comprehensive performance reports with actionable insights.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">👌 Custom Offers</h3>
                <p className="text-gray-600 mb-6">
                  Every business is unique, and so are our solutions. We don't believe in one-size-fits-all packages.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">What makes us different:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Per-user pricing model</li>
                    <li>• No long-term contracts</li>
                    <li>• Industry-specific strategies</li>
                    <li>• Dedicated account manager</li>
                  </ul>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600" asChild>
                  <Link href="/contact">Let's tailor it just for you</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert solutions for every aspect of your Google Ads strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Search className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Google Search Ads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Capture high-intent customers when they're actively searching for your products or services.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Keyword research & optimization</li>
                  <li>• Ad copy testing & refinement</li>
                  <li>• Bid management & automation</li>
                  <li>• Landing page alignment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <Monitor className="w-12 h-12 text-cyan-600 mb-4" />
                <CardTitle className="text-xl">Display Ads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Build brand awareness and reach potential customers across millions of websites.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Audience targeting & creation</li>
                  <li>• Creative design & testing</li>
                  <li>• Placement optimization</li>
                  <li>• Frequency management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Youtube className="w-12 h-12 text-red-600 mb-4" />
                <CardTitle className="text-xl">YouTube Ads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Engage your audience with compelling video content on the world's largest video platform.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Video ad strategy & creation</li>
                  <li>• Audience targeting</li>
                  <li>• Performance optimization</li>
                  <li>• Creative testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <RotateCcw className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">Remarketing Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Re-engage visitors who showed interest but didn't convert the first time.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Audience segmentation</li>
                  <li>• Dynamic remarketing setup</li>
                  <li>• Custom messaging strategies</li>
                  <li>• Cross-platform targeting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-200 transition-colors">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-yellow-600 mb-4" />
                <CardTitle className="text-xl">Landing Page Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Optimize your landing pages for maximum conversion rates and better ad performance.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Conversion rate optimization</li>
                  <li>• A/B testing implementation</li>
                  <li>• User experience improvements</li>
                  <li>• Mobile optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Performance Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Get expert insights on your current campaigns and discover improvement opportunities.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Account audit & analysis</li>
                  <li>• Strategy recommendations</li>
                  <li>• Performance optimization</li>
                  <li>• Competitive analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
              Our Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Discovery & Strategy</h3>
                <p className="text-gray-600">
                  We analyze your business, audience, and competition to create a custom strategy.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation</h3>
                <p className="text-gray-600">
                  We set up campaigns, tracking, and optimization systems for maximum performance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Optimize & Scale</h3>
                <p className="text-gray-600">
                  Continuous monitoring, testing, and optimization to improve results and scale growth.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                <Link href="/contact">Start Your Journey Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
