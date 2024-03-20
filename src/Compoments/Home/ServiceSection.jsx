import React from 'react';
import rentimg from "../../Images/renthouse.webp";
import resealimg from "../../Images/reseal.jpg";
import freshimg from "../../Images/fresh.jpg";
import plotsimg from "../../Images/plots.jpg";
import serviceimg from "../../Images/Service.avif";
import { Link } from 'react-router-dom';

export default function ServiceSection() {
  return (
    <div className='flex justify-center mt-2'>
      <div>
        <div className='flex gap-8'>
         {/* First part */}
          <div
            className={` bg-cover h-48 w-48 rounded-md`}
            style={{ backgroundImage: `url(${rentimg})` }}
          >
            <p className='text-white mt-2 ml-5 font-semibold'>Rent House</p>
          </div>
         {/* Second part */}
          <div
            className={`bg-center bg-cover h-48 w-48 rounded-md ml-5`}
            style={{ backgroundImage: `url(${resealimg})` }}
          >
            <p className='text-white mt-2 ml-5 font-semibold'>Reseal House</p>
          </div>
         {/* third part */}
          <div
            className={`bg-center bg-cover h-48 w-48 rounded-md ml-5`}
            style={{ backgroundImage: `url(${freshimg})` }}
          >
            <p className='text-white mt-2 ml-5 font-semibold'>Fresh Addition</p>
          </div>
         {/* fourth part */}
          <div
            className={` bg-cover h-48 w-48 rounded-md ml-5`}
            style={{ backgroundImage: `url(${plotsimg})` }}
          >
            <p className='text-white mt-2 ml-5 font-semibold'>Plots for sell</p>
          </div>

         {/* fifth part */}
         <Link to="/services">
          <div
            className={` bg-cover h-48 w-48 rounded-md ml-5`}
            style={{ backgroundImage: `url(${serviceimg})` }}
          >
            <p className='text-gray-800 mt-2 ml-5 font-semibold'>Service</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
