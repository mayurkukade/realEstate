
import React from 'react'
import person1 from "../../Images/person1.avif"
import person2 from "../../Images/person2.webp"
import person from "../../Images/person.webp"
import { FaWhatsapp } from "react-icons/fa6";

export default function ContactCustomer() {
  return (
    <div className='flex justify-center'>
       <div >
         <div className='flex justify-center mb-10'>
            <p className='text-3xl font-semibold'>Contact with happy Customer</p>
         </div>
          <div className='flex '>
          {/* first card */}
          <div>
          <div className='absolute'>
            <img src={person1}  alt="" className='h-[15rem] w-[20rem] rounded-md'/> 
          </div>
          <div className='relative px-2 py-2  w-full bg-white shadow-md shadow-gray-500 mt-[13rem] rounded-md ml-8 z-50'>
              <div className='flex'>
                <div>
                 <p className='font-semibold'>Suresh Jain</p>
                 <p>Teacher</p>
                </div>
                
                <FaWhatsapp className='w-8 h-8 ml-20 mt ' color='green'/>
              </div>
          </div>
          </div>

          {/* Second card */}
          <div>
          <div className='absolute ml-20'>
            <img src={person2}  alt="" className='h-[15rem] w-[20rem] rounded-md'/> 
          </div>
          <div className='relative px-2 py-2  w-[16rem] bg-white shadow-md shadow-gray-500 mt-[13rem] rounded-md ml-28 z-50'>
              <div className='flex'>
                <div>
                 <p className='font-semibold'>Ganesh Mande</p>
                 <p>Teacher</p>
                </div>
                
                <FaWhatsapp className='w-8 h-8 ml-20 mt ' color='green'/>
              </div>
          </div>
          </div>
          {/* Third card */}
          <div>

          
          <div className='absolute ml-12 '>
            <img src={person}  alt="" className='h-[15rem] w-[20rem] rounded-md'/> 
          </div>
          <div className='relative px-2 py-2  w-[16rem] bg-white shadow-md shadow-gray-500 mt-[13rem] rounded-md ml-20 z-50'>
              <div className='flex'>
                <div>
                 <p className='font-semibold'>Devesh Kodale</p>
                 <p>Teacher</p>
                </div>
                
                <FaWhatsapp className='w-8 h-8 ml-20 mt ' color='green'/>
              </div>
          </div>
          </div>
          </div>
       </div>
    </div>
  )
}
