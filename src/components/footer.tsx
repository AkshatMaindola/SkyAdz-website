import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Global CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-yellow-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Make Your Brand Stand Out – One Click at a Time.
          </h2>
          <p className="text-white/90 text-lg mb-6">
            Results That Scale, Ads That Sell
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Link href="/contact">👉 Start Your Free Consultation Today</Link>
          </Button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/s_logo.png" // or your actual logo filename in /public
                alt="SkyAdz Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg"
                priority
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">SKYADZ</span>
                <span className="text-xs text-gray-400 -mt-1">
                  GOOGLE ADS AGENCY
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              At SkyAdz, we specialize in performance-driven Google Ads
              strategies to deliver results that actually matter – conversions.
              We charge based on actual user results, making us accountable for
              your ROI.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-cyan-400" />
                <a
                  href="mailto:skyadzservice@gmail.com"
                  className="text-gray-300 hover:text-white"
                >
                  skyadzservice@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-cyan-400" />
                <a
                  href="tel:+917017290429"
                  className="text-gray-300 hover:text-white"
                >
                  +91 7017290429
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-300 hover:text-white"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Google Search Ads</li>
              <li className="text-gray-300">Display Ads</li>
              <li className="text-gray-300">YouTube Ads</li>
              <li className="text-gray-300">Remarketing</li>
              <li className="text-gray-300">Landing Page Optimization</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SkyAdz. All rights reserved. | Results That Scale, Ads That
            Sell
          </p>
        </div>
      </div>
    </footer>
  );
}
