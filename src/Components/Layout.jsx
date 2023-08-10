import React from 'react'
import Header from './Header'
import Footer2 from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Header />
        <Outlet />
      <Footer2 />
    </>
    )
}
