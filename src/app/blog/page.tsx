import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Target, Users } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Why Most Google Ads Fail (And How We Fix That)",
      excerpt: "Discover the 5 most common mistakes that cause Google Ads campaigns to underperform and learn our proven strategies to avoid them.",
      category: "Strategy",
      readTime: "8 min read",
      date: "May 20, 2025",
      featured: true,
      gradient: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      title: "5 Secrets to Boosting Google Ad Performance",
      excerpt: "Unlock the advanced optimization techniques that top performers use to achieve 300%+ ROAS improvements.",
      category: "Optimization",
      readTime: "6 min read",
      date: "May 18, 2025",
      featured: true,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "What is Per-User Billing? And Why You Need It",
      excerpt: "Learn about our revolutionary pricing model that aligns agency success with client results, and why it's the future of digital marketing.",
      category: "Business Model",
      readTime: "5 min read",
      date: "May 15, 2025",
      featured: true,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "YouTube Ads in 2025: Complete Strategy Guide",
      excerpt: "Master YouTube advertising with our comprehensive guide covering audience targeting, creative best practices, and campaign optimization.",
      category: "YouTube Ads",
      readTime: "12 min read",
      date: "May 12, 2025",
      featured: false,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      title: "Local Business Google Ads: From Zero to Hero",
      excerpt: "How local businesses can compete with big brands using smart Google Ads strategies and hyperlocal targeting techniques.",
      category: "Local Marketing",
      readTime: "7 min read",
      date: "May 10, 2025",
      featured: false,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      title: "Landing Page Optimization: The Complete Checklist",
      excerpt: "Transform your landing pages into conversion machines with our 25-point optimization checklist used by top performers.",
      category: "Conversion",
      readTime: "10 min read",
      date: "May 8, 2025",
      featured: false,
      gradient: "from-indigo-500 to-purple-500"
    }
  ]

  const categories = ["All", "Strategy", "Optimization", "YouTube Ads", "Local Marketing", "Conversion", "Business Model"]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-yellow-50 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
              📚 The SkyAdz Blog
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-yellow-500 bg-clip-text text-transparent mb-6">
              Learn, Apply, Grow
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert insights, proven strategies, and actionable tips to help you master Google Ads and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our most popular and impactful content to accelerate your Google Ads success.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <Card key={post.id} className="border-2 hover:border-blue-200 transition-colors overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${post.gradient} relative`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-900">{post.category}</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-xl mb-2">{post.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full group" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                All Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive resources covering every aspect of Google Ads and digital marketing.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={category === "All" ? "bg-gradient-to-r from-blue-600 to-cyan-500" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="border-2 hover:border-blue-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Button variant="outline" size="sm" asChild className="group">
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12">
              <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Stay Updated with Latest Insights
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Get weekly tips, case studies, and industry insights delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics We Cover */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
              Topics We Cover
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Campaign Strategy</h3>
                <p className="text-gray-600 text-sm">Planning and executing winning Google Ads campaigns</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Optimization</h3>
                <p className="text-gray-600 text-sm">Advanced techniques to improve campaign performance</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Audience Targeting</h3>
                <p className="text-gray-600 text-sm">Reaching the right people at the right time</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Industry Insights</h3>
                <p className="text-gray-600 text-sm">Latest trends and updates in digital advertising</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
