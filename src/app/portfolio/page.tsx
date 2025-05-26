import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Target, DollarSign, Clock, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-yellow-50 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
              📈 Success Stories
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-yellow-500 bg-clip-text text-transparent mb-6">
              Proven Results That Speak for Themselves
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              See how we've helped businesses across industries achieve remarkable growth through strategic Google Ads campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Impact by Numbers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">300%</div>
                <div className="text-gray-600">Average ROAS Increase</div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">Leads Generated Monthly</div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
                <div className="text-gray-600">Successful Campaigns</div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">₹5M+</div>
                <div className="text-gray-600">Revenue Generated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Deep dive into how we've transformed businesses through strategic Google Ads campaigns.
              </p>
            </div>

            {/* Case Study 1 */}
            <Card className="mb-12 border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="mb-4 bg-green-100 text-green-800">Local Business</Badge>
                    <CardTitle className="text-2xl mb-2">Local Grocery Store – +160% ROAS</CardTitle>
                    <p className="text-gray-600">Regional grocery chain looking to increase foot traffic and online orders</p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                    <p className="text-gray-600 mb-4">
                      Low online visibility and declining foot traffic due to increased competition from major retail chains.
                    </p>
                    <h4 className="font-semibold text-gray-900 mb-3">Strategy</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Hyperlocal targeting campaigns</li>
                      <li>• Google Display Ads across regional areas</li>
                      <li>• Shopping ads for online grocery orders</li>
                      <li>• Location extensions for store visits</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Implementation</h4>
                    <ul className="text-gray-600 space-y-1 mb-4">
                      <li>• Geo-fenced targeting within 10km radius</li>
                      <li>• Custom audience creation based on shopping behavior</li>
                      <li>• A/B tested ad creatives with local imagery</li>
                      <li>• Mobile-optimized landing pages</li>
                    </ul>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-900">Timeline</span>
                      </div>
                      <p className="text-sm text-blue-800">Results achieved in just 2 weeks</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-green-800">160%</div>
                        <div className="text-sm text-green-600">ROAS Increase</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-blue-800">45%</div>
                        <div className="text-sm text-blue-600">More Store Visits</div>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-800">₹2.5L</div>
                        <div className="text-sm text-yellow-600">Monthly Revenue Boost</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 2 */}
            <Card className="mb-12 border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="mb-4 bg-blue-100 text-blue-800">Health & Wellness</Badge>
                    <CardTitle className="text-2xl mb-2">Fitness Trainer Ads – Lead Generation Strategy</CardTitle>
                    <p className="text-gray-600">Personal fitness trainer expanding online coaching services</p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-green-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                    <p className="text-gray-600 mb-4">
                      Limited client base and need to scale online personal training services across multiple cities.
                    </p>
                    <h4 className="font-semibold text-gray-900 mb-3">Strategy</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• YouTube Ads with fitness content</li>
                      <li>• Search campaigns for fitness keywords</li>
                      <li>• Lead magnet campaigns</li>
                      <li>• Remarketing for interested prospects</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Implementation</h4>
                    <ul className="text-gray-600 space-y-1 mb-4">
                      <li>• Video testimonials and workout previews</li>
                      <li>• Niche keyword targeting for fitness goals</li>
                      <li>• Free consultation landing pages</li>
                      <li>• Email sequence integration</li>
                    </ul>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-900">Timeline</span>
                      </div>
                      <p className="text-sm text-green-800">Scaled over 1 month period</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-green-800">500+</div>
                        <div className="text-sm text-green-600">Quality Leads</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-blue-800">25%</div>
                        <div className="text-sm text-blue-600">Conversion Rate</div>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-800">₹8L</div>
                        <div className="text-sm text-yellow-600">Revenue in 3 Months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 3 */}
            <Card className="mb-12 border-2 hover:border-yellow-200 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="mb-4 bg-purple-100 text-purple-800">E-commerce</Badge>
                    <CardTitle className="text-2xl mb-2">Fashion Ecommerce Ads – Hyperlocal Campaigns</CardTitle>
                    <p className="text-gray-600">Online fashion retailer targeting urban millennials</p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-yellow-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                    <p className="text-gray-600 mb-4">
                      High competition in fashion e-commerce and need to improve conversion rates while reducing acquisition costs.
                    </p>
                    <h4 className="font-semibold text-gray-900 mb-3">Strategy</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Shopping campaigns with dynamic remarketing</li>
                      <li>• Urban keyword optimization</li>
                      <li>• Mobile-first campaign structure</li>
                      <li>• Seasonal trend targeting</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Implementation</h4>
                    <ul className="text-gray-600 space-y-1 mb-4">
                      <li>• Dynamic product ads with inventory sync</li>
                      <li>• City-specific landing pages</li>
                      <li>• Mobile app install campaigns</li>
                      <li>• Customer lifetime value optimization</li>
                    </ul>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm font-semibold text-yellow-900">Timeline</span>
                      </div>
                      <p className="text-sm text-yellow-800">6-week optimization cycle</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-green-800">4.3x</div>
                        <div className="text-sm text-green-600">Conversion Increase</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-blue-800">60%</div>
                        <div className="text-sm text-blue-600">Lower CPA</div>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-800">₹15L</div>
                        <div className="text-sm text-yellow-600">Monthly Revenue</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the growing list of businesses that have transformed their growth with SkyAdz's proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                <Link href="/contact">Start Your Success Story</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
