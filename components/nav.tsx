'use client'

import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react'
import { Menu } from 'lucide-react'
import logo from '../public/logo_kd.png'


export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 sticky top-0 z-50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
                <Image
                        src={logo}
                        alt="Kundali Dekhlo"
                        className="h-10 w-10"
                    />
              <span className="ml-2 text-xl font-semibold text-gray-900">Kundali Dekhlo horoscopes</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-coral-600">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-coral-600">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-coral-600">About Us</Link>
            <Link href="/gallery" className="text-gray-700 hover:text-coral-600">Gallery</Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-coral-600">Testimonials</Link>
            <Link href="/contact" className="text-gray-700 hover:text-coral-600">Contact Us</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-coral-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-coral-600">Home</Link>
            <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-coral-600">Services</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-coral-600">About Us</Link>
            <Link href="/gallery" className="block px-3 py-2 text-gray-700 hover:text-coral-600">Gallery</Link>
            <Link href="/testimonials" className="block px-3 py-2 text-gray-700 hover:text-coral-600">Testimonials</Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-coral-600">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

