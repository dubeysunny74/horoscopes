'use client'; // Add this if you're using Next.js 13 and it's a client component

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from "@/src/hooks/useTranslations"
import { useToast } from "@/components/ui/use-toast"
import { Home, Phone, MessageCircle, Flower2, FileText, PlayCircle, PhoneCall, Globe } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Nav() {
  const router = useRouter()
  const { t } = useTranslations()
  const { toast } = useToast()

  const menuItems = [
    { icon: Home, label: t('nav.home'), href: '/', showToast: false },
    { icon: Phone, label: t('nav.talkToAstrologer'), href: '#', showToast: true },
    { icon: MessageCircle, label: t('nav.chatWithAstrologer'), href: '#', showToast: true },
    { icon: Flower2, label: t('nav.pujaConsultation'), href: '#', showToast: true },
    { icon: FileText, label: t('nav.articles'), href: '#', showToast: true },
    { icon: PlayCircle, label: t('nav.videos'), href: '#', showToast: true },
    { icon: PhoneCall, label: t('nav.consultNow'), href: '#', showToast: true, highlight: true },
  ]

  const handleClick = (item: typeof menuItems[0], e: React.MouseEvent) => {
    if (item.showToast) {
      e.preventDefault()
      toast({
        description: t('toast.comingSoon'),
        className: "bg-orange-500 text-white",
        duration: 2000,
      })
    }
  }

  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div 
        className="relative"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0l2.5 2.5L15 0l2.5 2.5L20 0v2.5L17.5 5 20 7.5V10l-2.5-2.5L15 10l-2.5-2.5L10 10l-2.5-2.5L5 10l-2.5-2.5L0 10V7.5L2.5 5 0 2.5V0l2.5 2.5L5 0l2.5 2.5L10 0z' fill='%23FFA500' fill-opacity='0.05'/%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Logo"
                  className="h-8 w-8"
                />
              </Link>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-6">
              {menuItems.map((item, index) => (
                <Link
                  key={`desktop-${item.label}-${index}`}
                  href={item.href}
                  onClick={(e) => handleClick(item, e)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${item.highlight 
                      ? 'text-orange-500 hover:bg-orange-50' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                >
                  <item.icon className={`h-5 w-5 ${item.highlight ? 'text-orange-500' : 'text-gray-500'}`} />
                  <span>{item.label}</span>
                </Link>
              ))}
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                  <Globe className="h-5 w-5 text-gray-500" />
                  <span>{router.locale === 'en' ? 'EN' : 'हिं'}</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => changeLanguage('en')}>English</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('hi')}>हिंदी</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="md:hidden">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  toast({
                    description: t('toast.comingSoon'),
                    className: "bg-orange-500 text-white",
                    duration: 2000,
                  })
                }}
                className="inline-flex items-center justify-center p-2 rounded-md text-orange-500 hover:bg-orange-50"
              >
                <PhoneCall className="h-6 w-6" />
                <span className="ml-2">{t('nav.consultNow')}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.slice(0, -1).map((item, index) => (
            <Link
              key={`mobile-${item.label}-${index}`}
              href={item.href}
              onClick={(e) => handleClick(item, e)}
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              <item.icon className="h-5 w-5 text-gray-500" />
              <span>{item.label}</span>
            </Link>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 w-full">
              <Globe className="h-5 w-5 text-gray-500" />
              <span>{router.locale === 'en' ? 'Change Language' : 'भाषा बदलें'}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => changeLanguage('en')}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('hi')}>हिंदी</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

