"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

interface IAnch extends React.HTMLAttributes<HTMLAnchorElement> {
    href: string
}

function Anch(props: IAnch) {
    const path = usePathname()
    let newPath = path.split("/")[1] + props.href

    return (
        <Link {...props} href={newPath} />
    )
}

export default Anch