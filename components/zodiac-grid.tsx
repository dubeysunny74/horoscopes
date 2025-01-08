'use client'

import { useState, useMemo } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { format, addDays, endOfMonth } from 'date-fns'
import { ZodiacCard } from './Zodiac-card'

const timeFrames = [
  { value: "daily", label: "Today" },
  { value: "weekly", label: "This Week" },
  { value: "monthly", label: "This Month" },
]

const zodiacSigns = [
  { name: "Aries", dateRange: "March 21 to April 19", symbol: "♈", symbolName: "Ram" },
  { name: "Taurus", dateRange: "April 20 to May 20", symbol: "♉", symbolName: "Bull" },
  { name: "Gemini", dateRange: "May 21 to June 20", symbol: "♊", symbolName: "Twins" },
  { name: "Cancer", dateRange: "June 21 to July 22", symbol: "♋", symbolName: "Crab" },
  { name: "Leo", dateRange: "July 23 to August 22", symbol: "♌", symbolName: "Lion" },
  { name: "Virgo", dateRange: "August 23 to September 22", symbol: "♍", symbolName: "Virgin" },
  { name: "Libra", dateRange: "September 23 to October 22", symbol: "♎", symbolName: "Balance" },
  { name: "Scorpio", dateRange: "October 23 to November 21", symbol: "♏", symbolName: "Scorpion" },
  { name: "Sagittarius", dateRange: "November 22 to December 21", symbol: "♐", symbolName: "Archer" },
  { name: "Capricorn", dateRange: "December 22 to January 19", symbol: "♑", symbolName: "Horned goat" },
  { name: "Aquarius", dateRange: "January 20 to February 18", symbol: "♒", symbolName: "Water bearer" },
  { name: "Pisces", dateRange: "February 19 to March 20", symbol: "♓", symbolName: "Fish" },
]

export function ZodiacGrid() {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("daily")

  const getDateRange = (timeFrame: string) => {
    const today = new Date()
    switch (timeFrame) {
      case "daily":
        return format(today, 'MMMM d, yyyy')
      case "weekly":
        const endOfWeek = addDays(today, 6)
        return `${format(today, 'MMMM d')} - ${format(endOfWeek, 'MMMM d, yyyy')}`
      case "monthly":
        const endOfMonthDate = endOfMonth(today)
        return `${format(today, 'MMMM d')} - ${format(endOfMonthDate, 'MMMM d, yyyy')}`
      default:
        return ""
    }
  }

  const currentDateRange = useMemo(() => getDateRange(selectedTimeFrame), [selectedTimeFrame])

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center">
          <Select 
            defaultValue="daily" 
            onValueChange={(value) => setSelectedTimeFrame(value)}
          >
            <SelectTrigger className="w-[180px] mb-4">
              <SelectValue placeholder="Select Time Frame" />
            </SelectTrigger>
            <SelectContent>
              {timeFrames.map((timeFrame) => (
                <SelectItem key={timeFrame.value} value={timeFrame.value}>
                  {timeFrame.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {zodiacSigns.map((sign) => (
            <ZodiacCard
              key={sign.name}
              name={sign.name}
              dateRange={sign.dateRange}
              symbol={sign.symbol}
              symbolName={sign.symbolName}
              currentDateRange={currentDateRange}
              selectedTimeFrame={selectedTimeFrame}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

