import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Personal Horoscope",
    description: "Get detailed insights about your personal zodiac sign",
  },
  {
    title: "Relationship Compatibility",
    description: "Discover how compatible you are with your partner",
  },
  {
    title: "Career Guidance",
    description: "Learn about your career prospects through astrology",
  },
  {
    title: "Life Path Reading",
    description: "Understand your life's purpose and direction",
  },
]

export function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-coral-600">{service.title}</CardTitle>
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

