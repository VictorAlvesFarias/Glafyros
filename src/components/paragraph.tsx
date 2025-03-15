import { componentSelector } from '@/utils/helpers/component-selector'
import React, { ReactNode } from 'react'


interface ISection extends React.HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode
}

const sectionVaritions = {
    "default": (props: Omit<ISection, "startScroll">) => {
        return (<p {...props} className={"overflow-hidden text-ellipsis whitespace-nowrap " + props.className} />
        )
    },
}

const Section = componentSelector<keyof typeof sectionVaritions, Omit<ISection, "startScroll">>(sectionVaritions)

export default Section