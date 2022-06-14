
import React, { ReactNode } from 'react';
import { Footer, NavBar, SearchBar } from '@/components';


interface LayoutProps {
  children?: ReactNode
}

export default function Layout({ children } : LayoutProps) {
  return (
    <>
      <NavBar />
      <SearchBar />
      {children}
      <Footer />
    </>
  )
}