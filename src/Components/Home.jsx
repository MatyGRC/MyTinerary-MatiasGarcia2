import React from 'react'
import Article from './Article'
import Stepper from './Stepper'

export default function Home() {

    return (
        <>
        <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt="House"
            src="https://images.hindustantimes.com/img/2023/01/10/1600x900/While-the-past-year-was-about-revenge-and-revival-_1673351689949.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Find your 
            <strong className="block font-extrabold text-emerald-500">
             perfect trip.
        </strong>

          </h1>

          <p className="mt-4 text-gray-600">
            Designed by insiders who know and love their cities
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded border border-emerald-600 bg-emerald-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-emerald-500"
          >
            View more
          </a>
        </div>
      </div>
    </div>
  </div>
        </section>
        <div className="p-8 sm:p-16 lg:p-24">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Popular <strong className=" font-extrabold text-emerald-500"> mytineraries
        </strong>

          </h1>
          </div>
        <Article />
        <Stepper />

      </>
      )
}