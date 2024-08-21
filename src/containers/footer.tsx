import React from 'react'

function Footer() {
    return (
        <footer className="bg-white text-black">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <h1 className={`text-3xl font-semibold`}>Glafyros</h1>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                    </div>
                </div>
                <hr className="my-6 border-zinc-800 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-black ">© 2024 <a href="" className="hover:underline">Studios Connect</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer