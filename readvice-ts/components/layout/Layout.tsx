
import React, { ReactNode } from 'react';
import { Chatbot, Footer, Header, SearchBar } from '@/components';


interface LayoutProps {
  children?: ReactNode
}

export default function Layout({ children } : LayoutProps) {
  return (
    <>
      <Header />
      <SearchBar />
      <main>
        {children}
      </main>
      <Chatbot />
      <Footer />
    </>
  )
}