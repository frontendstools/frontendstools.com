import { Header } from '@/components/header'
import React, { FC } from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="mb-auto">{children}</main>
    </>
  )
}

export default Layout
