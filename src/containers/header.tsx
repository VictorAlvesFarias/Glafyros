"use client"

import { useEffect, useState } from 'react'
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/logo';

const Navbar = () => {

  const [navStyle, setNavStyle] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll: any = () => {
      if (window.scrollY > 50 && !navStyle) {
        setNavStyle(true);
      } else if (window.scrollY <= 50 && navStyle) {
        setNavStyle(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navStyle]);

  useEffect(() => {
    if (window.scrollY > 50 && !navStyle) {
      setNavStyle(true);
    } else if (window.scrollY <= 50 && navStyle) {
      setNavStyle(false);
    }
  }, [])

  return (
    <React.Fragment>
      <header className={"fixed w-screen transition flex justify-center items-center border-b z-10 border-b-white " + (navStyle ? ' bg-zinc-50 shadow-lg  text-black' : 'text-white')}>
        <div className="max-w-7xl w-11/12 lg:px-0 px-5 ">
          <nav className="flex items-center justify-between h-20 " >
            <div className="flex lg:flex-1 gap-6 items-center">
              <Logo className={`w-9 h-9 ${navStyle ? "stroke-black" : "stroke-white"}`} />
              <Link to="" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h1 className={`text-2xl font-semibold`}> Glafyros</h1>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <svg className="h-7 w-9" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={navStyle ? ' black' : 'white'} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12 font-light">
              <a href="/#start" className="text-lg leading-6 ">Home</a>
              <a href="/#we" className="text-lg leading-6 ">Sobre Nós</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            </div>
          </nav>
        </div>
        <div onClick={() => setMobileMenuOpen(false)} className={' text-black fixed justify-end w-full flex top-0 h-screen transition-all z-30 ' + (mobileMenuOpen ? "left-0" : "left-full")/* +(navStyle ? ' pt-16' :' pt-20 ') */}>
          <div className="lg:hidden w-full h-full flex flex-col items-end" role="dialog" aria-modal="true">
            <div className=" inset-y-0 right-0 z-10 h-full w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between ">
                <Link to="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <h1 className={`text-4xl`}>Glafyros</h1>
                </Link>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7">Home</Link>
                    <Link to="/#we" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7">Sobre Nós</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Navbar