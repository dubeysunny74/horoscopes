import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Heart, Briefcase, Compass } from 'lucide-react'

const services = [
  {
    title: "Personal Horoscope",
    description: "Get detailed insights about your personal zodiac sign",
    icon: User,
  },
  {
    title: "Relationship Compatibility",
    description: "Discover how compatible you are with your partner",
    icon: Heart,
  },
  {
    title: "Career Guidance",
    description: "Learn about your career prospects through astrology",
    icon: Briefcase,
  },
  {
    title: "Life Path Reading",
    description: "Understand your life's purpose and direction",
    icon: Compass,
  },
]

export function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-saffron-600">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <service.icon className="h-6 w-6 text-orange-500" />
                  <CardTitle className="text-xl text-saffron-600">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

