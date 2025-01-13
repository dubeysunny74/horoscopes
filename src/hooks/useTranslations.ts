import en from '../translations/en.json'
import hi from '../translations/hi.json'

const translations = { en, hi }

export function useTranslations() {
  const locale  = 'hi'
  const t = (key: string) => {
    console.log(`keys...???${key}`)
    const keys = key.split('.')
    console.log(`keys...???${keys}`)

    return keys.reduce((obj: any, current: string) => {
        // Check if the current object is not null or undefined and is an object
        if (obj && typeof obj === 'object' && current in obj) {
          return obj[current];
        }
        return undefined; // Return undefined if the path is invalid
      }, translations[locale as keyof typeof translations]) as string | undefined;
    // return keys.reduce((obj, current) => {
    //     return obj && typeof obj === 'object' ? obj[current] : undefined;
    //   }, translations[locale as keyof typeof translations]) as string | undefined;
  }

  return { t, locale }
}

