'use client'

import { usePathname } from "next/navigation"

export function getPathClientSide() {
    const internationalizationPath =  usePathname()

    return internationalizationPath
}