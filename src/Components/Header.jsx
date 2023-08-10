import React from 'react'
import { Button, Navbar } from 'flowbite-react';
import { Link as Anchor } from 'react-router-dom';

export default function Header() {
    return (
      <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <p className="block text-emerald-600 font-extrabold" href="/"> My Tinerary </p>
              
          </div>
    
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li className="text-gray-500 transition hover:text-gray-500/75">
                  <Anchor to='/'>
                    Home
                  </Anchor>
                </li>
    
                <li className="text-gray-500 transition hover:text-gray-500/75">
                  <Anchor to='/cities'>
                    Cities
                  </Anchor>
                </li>
              </ul>
            </nav>
          </div>
    
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="/"
              >
                Login
              </a>
            </div>
    
            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
   )
}

