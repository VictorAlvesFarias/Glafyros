import { componentSelector } from '@/utils/helpers/component-selector'
import React, { ReactNode } from 'react'

interface IContent {
  children: ReactNode,
  id: string
}

const contentVaritions = {
  "default": (props: Omit<IContent, "startScroll">) => {
    return (
      <div id={props.id} className="items-center w-full justify-center flex  py-20">
        <div className="max-w-128 w-11/12 lg:px-0 px-5 flex flex-col gap-20">
          {props.children}
        </div>
      </div>
    )
  },
  "gradient": (props: IContent) => {
    return (
      <div id={props.id} className="items-center w-full justify-center flex  py-20 bg-gradient-to-r from-rose-200 to-violet-400 rounded">
        <div className="max-w-128 w-11/12 lg:px-0 px-5 flex flex-col gap-20">
          {props.children}
        </div>
      </div>
    )
  }

}

const Content = componentSelector<keyof typeof contentVaritions, Omit<IContent, "startScroll">>(contentVaritions)

export default Content