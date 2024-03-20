import React from 'react';
import AC from '../assets/images/Services/AC.jpg';
import Plumbing from '../assets/images/Services/Plumbing.jpg';
import Painting from '../assets/images/Services/Painting.jpg';
import Carpaenter from '../assets/images/Services/Carpaenter.jpg';
import Security from '../assets/images/Services/Security.jpg';
import Pest from '../assets/images/Services/Pest.jpg';
import Electrical from '../assets/images/Services/Electrical.jpg';
import Wifi from '../assets/images/Services/Wifi.jpg';
import Grocery from '../assets/images/Services/Grocery.jpg';
import House from '../assets/images/Services/House.jpg';
import Dth from '../assets/images/Services/Dth.jpg';
import Gardening from '../assets/images/Services/Gardening.jpg';
import { Link } from 'react-router-dom';


const ServiceCard = ({ imageSrc, altText, description,onClick }) => (
  <div className='flex flex-col items-center cursor-pointer transform transition-all relative'>
    <img  className='object-cover w-full md:w-[250px] shadow-xl lg:w-[250px] h-[200px] md:h-[200px] lg:h-72 hover:shadow-2xl rounded-3xl hover:scale-105' src={imageSrc} alt={altText} onClick={onClick}/>
    <p className='bg-[#FFFFFF] text-black text-center p-3 md:w-auto lg:w-auto w-full  border shadow-md rounded-lg absolute hover:bg-gray-100 -bottom-6 md:text-lg'>{description}</p>
  </div>
);

function Services() {
    
  return (

    <section className='w-auto h-auto mt-8'>  
      <div className=' font-semibold text-2xl '>
        <h1 className='flex justify-center text-center'>
            Different Services That Make Your Life Easy
            </h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16 mx-10 justify-center p-14 md:p-20'>
        <Link to="/acservices">
        <ServiceCard 
         imageSrc={AC}  altText='AC' description='AC Services' 
         />
         </Link>

         <Link to="/plumbservices">
        <ServiceCard 
        imageSrc={Plumbing} altText='Plumbing' description='Plumbing Services' 
        />
        </Link>

        <Link to="/paintservices">
        <ServiceCard 
        imageSrc={Painting} altText='Painting' description='Painting Services' 
        />
        </Link>
        
        <Link to="/carservices">
        <ServiceCard 
        imageSrc={Carpaenter} altText='Carpaenter' description='Carpaenter Services' 
        />
        </Link>

        <Link to="/secuservices">
        <ServiceCard 
        imageSrc={Security} altText='Security' description='Security Services' 
        />
        </Link>

        <Link to="/pestservices">
        <ServiceCard 
        imageSrc={Pest} altText='Pest' description='Pest Control Services' 
        />
        </Link>

        <Link to="/electrilervices">
        <ServiceCard 
        imageSrc={Electrical} altText='Electrical' description='Electrical Services' 
        />
        </Link>

        <Link to="/wifiservices">
        <ServiceCard 
        imageSrc={Wifi} altText='Wifi' description='Wifi Services' 
        />
        </Link>

        <Link to="/groceservices">
        <ServiceCard 
        imageSrc={Grocery} altText='Grocery' description='Grocery Services' 
        />
        </Link>

        <Link to="/houseervices">
        <ServiceCard 
        imageSrc={House} altText='House' description='HouseKeeping Services' 
        />
        </Link>

        <Link to="/dthservices">
        <ServiceCard 
        imageSrc={Dth} altText='Dth' description='Dth Services' 
        />
        </Link>

        <Link to="/gardservices">
        <ServiceCard 
        imageSrc={Gardening} altText='Gardening' description='Gardening Services' 
        />
        </Link>
      </div>
    </section>
  );
}

export default Services;
