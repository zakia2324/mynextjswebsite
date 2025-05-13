import React from 'react'
import Link from 'next/link';
import { FaCloudDownloadAlt } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='bg-blue-500 z-50 sticky top-0'>
      <header className="text-black body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-xl">Zakia Ali</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-blue-900">Home</Link>
      <Link href={"#about"}className="mr-5 hover:text-blue-900">About</Link>
      <Link href={"#skills"} className="mr-5 hover:text-blue-900">Skills</Link>
      <Link href={"#projects"} className="mr-5 hover:text-blue-900">Projects</Link>
      <Link href="#contact" className="mr-5 hover:text-blue-900">Contact</Link>
    </nav>
    <button className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    <a href="/cv/myCv/my resume frontend developer.pdf">
    Download Cv
    <FaCloudDownloadAlt className="text-xl ml-2"/>
    </a>
    </button>
  </div>
</header>
    </div>
  )
}
export default Navbar
