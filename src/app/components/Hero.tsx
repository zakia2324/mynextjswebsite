import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import girlpic from '../../../public/girlpic.jpg'
const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-100 pt-[60px]">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Hello! I am a frontend
        <br className="hidden lg:inline-block" />
        develpor
      </h1>
      <p className="mb-8 leading-relaxed ">
      I am a passionate frontend developer with expertise in modern web technologies. My skills set includes HTML, CSS, JavaScript, TypeScript, Next.js, Tailwind CSS, and ShadCN. I specialize in creating aesthetically pleasing and functional interfaces that prioritize responsiveness and user experience. My approach goes beyond writing code—I strive to craft seamless, intuitive, and engaging digital experiences.
      </p>
      <div className="flex justify-center">
        <Link href={"#contact"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        </Link>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <Image
        className="object-cover object-center rounded border 5px solid "
        alt="girlpic"
        width={300}
        height={300}
        src= {girlpic} />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
