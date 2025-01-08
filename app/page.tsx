import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { ZodiacGrid } from '@/components/zodiac-grid'
import { ServiceNavigation } from '@/components/service-navigation'


export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ServiceNavigation />
      <ZodiacGrid />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  )
}

