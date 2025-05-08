import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Divide } from 'lucide-react'

const projects = () => {
  return (
    <div id="projects">
        <h1 className="text-4xl font-bold text-center pt-20 sm:pt-32">Projects</h1>
      <AccordionDemo />
    </div>
  )
}

export function AccordionDemo() {
  return (


<div  id="projects">

    <Accordion 
      type="single" 
      collapsible 
      className=" w-full sm:w-3/4 md:w-1/2 px-4 min-h-screen items-center justify-center max-w-[480px] mx-auto mt-10" 
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
      <AccordionTrigger>Agentia World</AccordionTrigger>
      <AccordionContent>
        <a 
        href="https://ai-agentic-beryl.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 underline"
        >
        https://ai-agentic-beryl.vercel.app/
        </a>
      </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
      <AccordionTrigger>Dynamic Resume</AccordionTrigger>
      <AccordionContent>
        <a
        href="https://mydynamicresume.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
        >
      https://mydynamicresume.vercel.app/
        </a>
      </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
      <AccordionTrigger>Lovely Memories</AccordionTrigger>
      <AccordionContent>
        <a
        href="https://adventure-game-theta-ten.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
        >
  https://lovely-memories.vercel.app/
        </a>
      </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  )
}



export default projects
