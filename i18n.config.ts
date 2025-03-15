const languages = [
    "pt-br",
    "en-us"
]

export const defaultLocale = "en-us"

export function languageIsValid(locale:string): boolean {
    return languages.includes(locale)
}
 
export type Languages = "pt-br" | "en-us"
