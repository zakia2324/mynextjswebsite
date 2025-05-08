import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import girlpic from"../../../public/girlpic.jpg"

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font pt-[120px] ">
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
      I am a frontend developer with a strong eye for design and a passion for crafting seamless digital experiences. With expertise in HTML, CSS, JavaScript, TypeScript, Next.js, Tailwind CSS, and ShadCN, I build intuitive and engaging interfaces. In addition to coding, I have hands-on experience with Figma, allowing me to design and structure websites with precision before development. 
      </p>
      <p>
      My approach blends creativity and functionality, ensuring every project is both visually appealing and user-friendly.
      </p>
      <div className="flex justify-center">
        <Link href={"/cv/myCv/my resume frontend developer.pdf"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-[20px]">
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
