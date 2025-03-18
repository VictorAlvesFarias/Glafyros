'use client'

import { usePathname } from "next/navigation"

export function usePathClientSide() {
    const internationalizationPath =  usePathname()

    return internationalizationPath
}