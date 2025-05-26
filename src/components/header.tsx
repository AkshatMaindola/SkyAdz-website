'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/s_logo.png"
              alt="SkyAdz Logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-lg" // Add this class for rounded corners
              priority
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900">SKYADZ</span>
              <span className="text-xs text-gray-600 -mt-1">GOOGLE ADS AGENCY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">
                Portfolio
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-500">
                  <Link href="/contact">Book Free Consultation</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
