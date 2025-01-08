'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface ZodiacCardProps {
  name: string
  dateRange: string
  symbol: string
  symbolName: string
  currentDateRange: string
  selectedTimeFrame: string
}

interface HoroscopeData {
  date: string
  horoscope: string
}

export function ZodiacCard({ name, symbol, symbolName, currentDateRange, selectedTimeFrame }: ZodiacCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [horoscopeData, setHoroscopeData] = useState<HoroscopeData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchHoroscope = async () => {
    setIsLoading(true)
    setError(null)
    try {
      let url = ''
      switch (selectedTimeFrame) {
        case 'daily':
          url = `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${name.toLowerCase()}&day=TODAY`
          break
        case 'weekly':
          url = `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/weekly?sign=${name.toLowerCase()}`
          break
        case 'monthly':
          url = `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/monthly?sign=${name.toLowerCase()}`
          break
      }
      const response = await fetch(url)
      console.log(response)
      if (!response.ok) {
        throw new Error('Failed to fetch horoscope')
      }
      const data = await response.json()
      setHoroscopeData({
        date: data.date,
        horoscope: data.horoscope
      })
    } catch (err) {
      setError('Failed to load horoscope. Please try again.'+err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClick = async () => {
    if (!isExpanded && !horoscopeData) {
      await fetchHoroscope()
    }
    setIsExpanded(!isExpanded)
  }

  return (
    <div 
      className="bg-purple-50 p-6 rounded-lg text-center hover:shadow-lg transition-all cursor-pointer"
      onClick={handleClick}
      role="button"
      aria-expanded={isExpanded}
      tabIndex={0}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{currentDateRange}</p>
      <div className="bg-purple-200 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-2">
        <span className="text-2xl">{symbol}</span>
      </div>
      <p className="text-sm text-gray-700 mb-2">{symbolName}</p>
      {isExpanded && (
        <div className="mt-4 text-sm text-gray-600 border-t pt-4">
          {isLoading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {horoscopeData && (
            <>
              <p className="font-semibold mb-2">{horoscopeData.date}</p>
              <p>{horoscopeData.horoscope}</p>
            </>
          )}
        </div>
      )}
      <div className="mt-2">
        {isExpanded ? <ChevronUp className="inline-block w-5 h-5" /> : <ChevronDown className="inline-block w-5 h-5" />}
      </div>
    </div>
  )
}

