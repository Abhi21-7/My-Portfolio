import React from 'react'
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
<footer className="w-full bg-gray-700 flex items-center justify-center py-4 px-2">
  <p className="text-center text-base md:text-2xl text-white w-full">
    &copy; {currentYear} Abhishek Agnihotri - All rights reserved!
  </p>
</footer>
    </>
  )
}

export default Footer
