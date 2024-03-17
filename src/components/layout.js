import React from "react"
import { Link } from "gatsby"
import { FaExternalLinkAlt } from "react-icons/fa" // Import icon yang akan digunakan

const Layout = ({children}) => {
  const linkStyle = `
  hover:opacity-70 
  text-sm 
  sm:text-lg
  `
  const logoStyle= `
  text-white
  font-rammetto
  sm:text-base
  text-sm
  `
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex sm:justify-between justify-around items-center bg-slate-900 lg:px-20 sm:px-6 py-8 text-gray-100">
        <h3 className={logoStyle}>SYUKRIE SEO</h3>
        <ul className="flex space-x-4">
          <li className={linkStyle}><Link to="/">Home</Link></li>
          <li className={linkStyle}><Link to="/contact">Contact</Link></li>
          <li className={linkStyle}><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <main className="flex-grow">{children}</main>
      
      <footer className="bg-slate-900 text-gray-100 py-8 text-center mt-8">
      <p>Copyright 2024 <span className={logoStyle}>SYUKRIE SEO</span></p>
      {/* Tambahkan tautan ke blog utama */}
      <a href="https://syukrieseo.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center mt-4">
          Kunjungi Blog Utama
          <FaExternalLinkAlt className="ml-2" />
        </a>
      </footer>
    </div>
  )
}

export default Layout