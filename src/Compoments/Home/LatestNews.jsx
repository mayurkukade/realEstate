
import React from 'react'
import NewsCard from './NewsCard'
import homenews from "../../Images/homeNews.jpg"
import homenews2 from "../../Images/homeNews2.jpg"

export default function LatestNews() {
  return (
    <div className='flex justify-center mt-10'>
       <div>
        <div className='flex justify-center mb-10 mt-10'>
          <p className='text-3xl font-semibold'>Our Latest News</p>
        </div>
         <div className='flex gap-6'>
           <NewsCard image={homenews}/>
           <NewsCard image={homenews2}/>
         </div>
         <div className='flex gap-6 mt-10'>
           <NewsCard image={homenews2}/>
           <NewsCard image={homenews}/>
         </div>
       </div>
    </div>
  )
}
