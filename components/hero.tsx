'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from '@/src/hooks/useTranslations'

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const { t } = useTranslations()
  useEffect(() => {
    const targetDate = new Date('2025-12-31T23:59:59') // Set your launch date here

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="bg-white bg-opacity-20 rounded-lg p-3">
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-xs uppercase">{t(`countdown.${key}`)}</div>
        </div>
      ))}
    </div>
  )
}

export function Hero() {
  const { t } = useTranslations()
  return (
    <div className="relative bg-orange-400"> {/* Light saffron background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('hero.subtitle')}
          </p>
          <CountdownTimer />
        </div>
      </div>
    </div>
  )
}

