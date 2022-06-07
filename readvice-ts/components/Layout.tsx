
import React, { ReactNode } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

interface LayoutProps {
  children?: ReactNode
}

export default function Layout({ children } : LayoutProps) {
  return (
    <Layout>
      <NavBar />
      {children}
      <Footer/>
    </Layout>
  )
}