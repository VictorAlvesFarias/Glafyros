import React from 'react'

function LogoNeon({ className }: any) {
    return (
        <svg className={className} width="975" height="975" viewBox="0 0 975 975" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_2_20)">
                <circle cx="487.5" cy="487.5" r="237.5" fill="url(#paint0_linear_2_20)" />
            </g>
            <g filter="url(#filter1_df_2_20)">
                <path d="M458.5 431V609.736M530 488C596 488 599 575.281 542 600.281M598.019 430.5H384M417.5 431V591.913M612 488C612 557.036 556.036 613 487 613C417.964 613 362 557.036 362 488C362 418.964 417.964 363 487 363C556.036 363 612 418.964 612 488Z" stroke="url(#paint1_linear_2_20)" strokeWidth="25" shapeRendering="crispEdges" />
            </g>
            <g filter="url(#filter2_f_2_20)">
                <path d="M458.5 431V609.736M530 488C596 488 599 575.281 542 600.281M598.019 430.5H379M417.5 431V591.913M612 488C612 557.036 556.036 613 487 613C417.964 613 362 557.036 362 488C362 418.964 417.964 363 487 363C556.036 363 612 418.964 612 488Z" stroke="white" strokeWidth="15" />
            </g>
            <defs>
                <filter id="filter0_f_2_20" x="0" y="0" width="975" height="975" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_2_20" />
                </filter>
                <filter id="filter1_df_2_20" x="335.5" y="336.5" width="303" height="303" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_20" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_20" result="shape" />
                    <feGaussianBlur stdDeviation="7" result="effect2_foregroundBlur_2_20" />
                </filter>
                <filter id="filter2_f_2_20" x="354.2" y="355.2" width="265.6" height="265.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="0.15" result="effect1_foregroundBlur_2_20" />
                </filter>
                <linearGradient id="paint0_linear_2_20" x1="487.5" y1="250" x2="487.5" y2="725" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00F7FF" />
                    <stop offset="0.815" stopColor="#5500FF" />
                </linearGradient>
                <linearGradient id="paint1_linear_2_20" x1="487" y1="363" x2="487" y2="613" gradientUnits="userSpaceOnUse">
                    <stop offset="0.195" stopColor="#0095FF" />
                    <stop offset="0.9998" stopColor="#7402FF" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default LogoNeon
