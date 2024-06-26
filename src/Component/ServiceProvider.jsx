import React from 'react';
import { Rating } from "@material-tailwind/react";
import { ServiceNavbar } from './ServiceNavbar';
import { FaLocationDot } from 'react-icons/fa6';
import { BsFillTelephoneFill } from "react-icons/bs";
import { useEffect } from 'react';

function ServiceProvider({ serviceProviders }) {
  useEffect(() => {     window.scrollTo(0, 0); }, []);
  return (
    <section className='w-full min-h-screen '>
      <ServiceNavbar/>       
      {serviceProviders.map((provider, index) => (
        <div>
          <h1 className='text-2xl font-semibold font-[Poppins] text-center mt-2 underline '>{provider.header}</h1>

        <div key={index} className='card flex flex-col lg:flex-row bg-[#ffffff] rounded-xl shadow-xl mx-10 md:mx-20 lg:mx-36 p-5 mt-10 hover:shadow-2xl cursor-pointer mb-10 border font-[Lato]'>
          <div className='mx-4'>
            <div className='flex items-center'>
              <img className='border rounded-full w-[70px]' src={provider.image} alt={provider.name} />
              <div className='card p-1 ml-2'>
                <h1 className='font-bold text-[18px]'>{provider.name}</h1>
                <span className='text-gray-600 flex w-32 text-sm font-medium'>{provider.company}</span>
              </div>
            </div>

            <div className='mt-5'>
              <h3 className='text-base font-semibold'>Service Flow</h3>
              <ul className='text-sm font-normal mt-3 list-disc mx-4'>
                <li>{provider.service1}</li>
                <li>{provider.service2}</li>
                <li>{provider.service3}</li>
                <li>{provider.service4}</li>
                <li>{provider.service5}</li>
                <li>{provider.service6}</li>
                {/* {provider.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))} */}
              </ul>
            </div>

            <div className='md:mt-5 mt-3'>
              <span className='flex'><span className='mt-[5px]'><FaLocationDot/></span><span className='ml-2 text-gray-700 mb-2'>{provider.location}</span></span>
            </div>
          </div>

          <div className='md:ml-6'>
            <div className='text-end md:mb-4 md:block hidden md:mr-2'><Rating value={4} /></div>
            <div>
              <h1 className='text-center font-[montserrat] font-normal mb-5 text-[24px] md:mb-5'>We are here to help you...</h1>
              <div className='flex flex-wrap mx-2 md:flex-row gap-5 ml-4 md:ml-10 '>
                {provider.images.map((image, index) => (
                  <img key={index} className='w-[115px] h-[110px] rounded-lg hover:scale-110' src={image} alt="" />
                ))}
              </div>
            </div>
            <div className='flex md:justify-end mt-10' >
              <button type='button' className='border rounded-full p-2 bg-green-500 hover:bg-green-700 text-white flex w-36 font-semibold text-base' onClick={() => alert('Contact button clicked')}>
             <span className='mt-[5px] ml-4'><BsFillTelephoneFill /></span><span className='ml-2 text-base  '>Contact</span>
              </button>
            </div>
          </div>
        </div>
        </div>
      ))}
    </section>
  )
}

export default ServiceProvider;
