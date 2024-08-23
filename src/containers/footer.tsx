import React from 'react'
import Logo from '../components/logo'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-white text-black">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 flex flex-col gap-8">
                <div className="md:flex md:justify-between">
                    <div className="flex lg:flex-1 gap-6 items-center">
                        <Logo className="w-9 h-9 stroke-black"  />
                        <Link to="" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <h1 className={`text-2xl font-semibold`}> Glafyros</h1>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-semibold'>Contato</h1>
                        <p>glafyros.atendimento@glafyros.com</p>
                    </div>
                </div>
                <hr className=" border-zinc-800" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-black ">© 2024 <a href="" className="hover:underline">Glafyros</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
