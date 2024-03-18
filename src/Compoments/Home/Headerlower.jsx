
import React from 'react'
import homeimage from "../../Images/homeimage.jpeg"

export default function Headerlower() {
  return (
    <div className='flex mt-5 justify-center'>
       <div>
         <div className='  h-[20rem] w-[81rem] ' >
            <img src={homeimage} alt="" className='h-[30rem] w-[82rem] rounded-md' />
         </div> 

         <div className='bg-[#33691E4D] flex justify-center py-4 mt-[10rem] rounded-md gap-20'>

           <div>
             <p className='text-2xl font-semibold ml-2'>300 + </p>
             <p className='text-sm font-normal'>Happy Clients </p>
           </div>

           <div>
             <p className='text-2xl font-semibold ml-6'>1K + </p>
             <p className='text-sm font-normal'>Property Ready </p>
           </div>

           <div>
             <p className='text-2xl font-semibold ml-8'>80 + </p>
             <p className='text-sm font-normal'>Completed Agents </p>
           </div>

           <div>
             <p className='text-2xl font-semibold ml-2'>60 % </p>
             <p className='text-sm font-normal'>Year Growth </p>
           </div>

         </div>
       </div>
    </div>
  )
}
