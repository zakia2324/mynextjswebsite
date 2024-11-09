import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import girlpic from"../../../public/girlpic.jpg"

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto"
        alt="hero"
      
         src={girlpic}
         height={350}
         width={350}
         
        
        
      />
      
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
        <br className="hidden lg:inline-block" />
        
      </h1>
      <p className="mb-5 leading-relaxed">
        Hello, My name is Zakia shahan, I am a frontend develpor, I did my course  from GIAIC , I have 2 years experience as a freelancer, 
        I am a UI, UX Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta reiciendis necessitatibus placeat commodi labore illo, minus accusantium. Quae, necessitatibus possimus!
      </p>
      <div className="flex justify-center">
        <Link href={"/cv/myCv/ZAKIA RESUME.pdf"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          view my cv
        </button>
        </Link>
       
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
