import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Our Office Address</h3>
                <p className="text-gray-600">
                  Plot No-15, Block-A, Sector-1<br />
                  Noida Complex, Noida (NCR)<br />
                  Sector-1, Delhi-India
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">General Enquiries</h3>
                <p className="text-gray-600">
                  +91 9999999999<br />
                  info@zodiacfortune.com
                </p>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Message" />
              <Button className="w-full bg-coral-600 hover:bg-coral-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

