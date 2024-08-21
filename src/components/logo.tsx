import React from 'react'

function Logo({ className }: any) {
    return (
        <svg className={className} width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="125" cy="125" r="112.5" strokeWidth="25" />
            <line x1="96.5" y1="68" x2="96.5" y2="234" strokeWidth="25" />
            <path d="M168 125C234 125 233 200 176 225" strokeWidth="25" />
            <line x1="224" y1="67.5" x2="22" y2="67.5" strokeWidth="25" />
            <line x1="55.5" y1="68" x2="55.5" y2="220" strokeWidth="25" />
        </svg>
    )
}

export default Logo

