import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kundli Dekhlo - Your Personalized Horoscope & Kundali Companion',
  description: "Unlock the secrets of your future with Kundli Dekhlo! Dive deep into your astrological insights with accurate horoscope readings and detailed kundali analysis. Whether you're curious about your daily horoscope, seeking predictions for love, career, or health, or want to explore your life's blueprint through your kundali, Kundli Dekhlo is your trusted guide. Get personalized astrological advice, explore compatibility, and stay informed about planetary movements that influence your life. Your journey to self-discovery and enlightenment begins here!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Toaster />
      </body>
    </html>
  )
}

