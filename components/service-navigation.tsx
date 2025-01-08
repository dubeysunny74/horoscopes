'use client'

import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, PlaySquare, HelpCircle, Users, Flower2 } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"

export function ServiceNavigation() {
  const { toast } = useToast()

  const services = [
    { title: "Videos", icon: PlaySquare },
    { title: "Talk with Astrologer", icon: Users },
    { title: "Hotline", icon: Phone },
    { title: "Puja Sewas", icon: Flower2 },
    { title: "Chat with Astrologer", icon: MessageCircle },
    { title: "Ask Question", icon: HelpCircle },
  ]

  const handleServiceClick = (title: string) => {
    toast({
      title: "Coming Soon!",
      description: `${title} service will be available after launch.`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map((service) => (
          <Card 
            key={service.title} 
            className="hover:bg-accent transition-colors cursor-pointer"
            onClick={() => handleServiceClick(service.title)}
          >
            <CardContent className="flex flex-col items-center justify-center p-6">
              <service.icon className="h-8 w-8 mb-2 text-orange-500" />
              <span className="text-sm font-medium text-center">{service.title}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

