import { Card, CardContent } from "@/components/ui/card"
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Aryan Sachdankar",
    quote: "I always consult them for my future and I have found all their predictions to be accurate.",
  },
  {
    name: "Rahul Malhotra",
    quote: "The astrological services provided by them are exceptional and helped me make the future decisions.",
  },
  {
    name: "Akash Thaper",
    quote: "The astrological predictions are done very precisely from their side.",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-coral-600 mb-4" />
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

