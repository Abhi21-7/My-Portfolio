import React from 'react'
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      
    <footer className="h-20 w-full bg-gray-700 flex items-center justify-center">
      <p className="text-center text-2xl text-white">
        &copy; {currentYear} Abhishek Agnihotri - All rights reserved!
      </p>
    </footer>
    </>
  )
}

export default Footer
