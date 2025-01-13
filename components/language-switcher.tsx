'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = () => {
    const nextLocale = locale === 'en' ? 'hi' : 'en'
    router.push(pathname.replace(`/${locale}`, `/${nextLocale}`))
  }

  return (
    <Button onClick={switchLocale} variant="outline" className="ml-4">
      {t('languageSwitcher', { language: locale === 'en' ? 'हिंदी' : 'English' })}
    </Button>
  )
}

