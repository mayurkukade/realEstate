
import React from 'react'
import { Carousel,IconButton } from "@material-tailwind/react";
import Cards from './Cards';
import luxary from "../../Images/luxaryhome.jpeg"
import apparment from "../../Images/Apparment.webp"
import flat from "../../Images/flat.jpg"

export default function CourselEffect() {
  return (
    <div className='flex mt-10 justify-center'>
       <div>
        <div className='flex justify-center mb-10'>
            <p className='text-2xl font-semibold'>Exclusive Owner Proprites in Pune</p>
        </div>
       <Carousel className="rounded-xl  h-[30rem] " style={{width:"80rem"}}  
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}>
    <div className='flex gap-4 ml-[50px]'>
         <Cards image={luxary}/>
         <Cards image={apparment}/>
         <Cards image={flat}/>
         <Cards image={luxary}/>
    </div>
    {/* second Part */}
    <div className='flex gap-4 ml-[370px]'>
         <Cards image={apparment}/>
         <Cards image={flat}/>
         <Cards image={luxary}/>
         <Cards image={apparment}/>
    </div>
    {/* Third Part */}
    <div className='flex gap-4 ml-[290px]'>
         <Cards image={flat}/>
         <Cards image={luxary}/>
         <Cards image={apparment}/>
         <Cards image={apparment}/>
    </div>
    <div className='flex gap-4 ml-[600px]'>
         <Cards image={apparment}/>
         <Cards image={apparment}/>
         <Cards image={apparment}/>
         <Cards image={apparment}/>
    </div>
      
    </Carousel>
       </div>
    </div>
  )
}
