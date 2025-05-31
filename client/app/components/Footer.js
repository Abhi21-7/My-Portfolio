import React from 'react'
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      
<footer className=" h-20 w-full bg-gray-700 ">
  <div className=" flex flex-wrap h-20 w-full px-10 items-center text-2xl justify-center mx-auto ">
    <p className='text-center'>Copyright &copy; {currentYear} Abhishek Agnihotri - All rights reserved!</p>
  </div>
</footer>
    </>
  )
}

export default Footer
