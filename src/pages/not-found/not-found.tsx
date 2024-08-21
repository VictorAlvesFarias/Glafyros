import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='min-h-screen'>
      <main className="items-center w-full justify-center flex flex-col mb-40 ">
        <div className="max-w-7xl w-11/12 lg:px-0 px-5 ">
          <div className='h-screen flex items-center justify-center flex-col gap-12'>
            <h1 className='font-bold text-4xl'>404</h1>
            <p>Ops... A página não foi encontrada. Ela pode não existir ou estar em manutenção no momento.</p>
            <Link to={'/'} className='font-bold'>
              Voltar para a página inicial...
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NotFound