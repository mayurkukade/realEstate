import React from 'react';
import ServiceProvider from './ServiceProvider'; 
import image1 from '../assets/images/Pest/image1.jpg';
import image2 from '../assets/images/Pest/image2.jpg'
import image3 from '../assets/images/Pest/image3.jpg'
import image4 from '../assets/images/Pest/image4.png'
import image5 from '../assets/images/Dth/image5.jpg';
import image6 from '../assets/images/Dth/image6.jpg'
import image7 from '../assets/images/Dth/image7.jpg'
import image8 from '../assets/images/Dth/image8.jpg'
import image9 from '../assets/images/Dth/image9.jpg'

function DthService() {
  const serviceProviders = [
    {
      header: 'DTH Service Providers',
      name: 'Sachin Gavli',
      company: 'Total DTH Services',
      location: 'Hadapsar, Pune - 411028',
      service1:'Free & Safe Installation',
      service2: 'Unlimited HD Channels',
      service3:  'Brilliant HD Clarity',
      service4:  'Dolby Sound',
      service5:  'Pause,Record & Play live Tv',
      service6:  'Play Videos from Pendrive',

      images: [image5,image6,image7,image8,image9],
      image: image1 
    },
    {
        name: 'Arjun Rathi',
        company: 'Vijay DTH Services',
        location: 'Wagholi, Pune - 412207',
        service1:'Free & Safe Installation',
        service2: 'Unlimited HD Channels',
        service3:  'Brilliant HD Clarity',
        service4:  'Dolby Sound',
        service5:  'Pause,Record & Play live Tv',
        service6:  'Play Videos from Pendrive',

        images: [image8,image6,image9,image5,image7],
        image: image2 
      },
      {
      name: 'Vikas Aadhav',
      company: 'Mobizz DTH Services',
      location: 'Kharadi, Pune - 411030',
      service1:'Free & Safe Installation',
      service2: 'Unlimited HD Channels',
      service3:  'Brilliant HD Clarity',
      service4:  'Dolby Sound',
      service5:  'Pause,Record & Play live Tv',
      service6:  'Play Videos from Pendrive',

      images: [image5,image6,image7,image8,image9],
      image: image3
    },
       {
      name: 'Surya Yadav',
      company: 'Surya Enterprises',
      location: 'Pimpri, Pune - 411018',
      service1:'Free & Safe Installation',
      service2: 'Unlimited HD Channels',
      service3:  'Brilliant HD Clarity',
      service4:  'Dolby Sound',
      service5:  'Pause,Record & Play live Tv',
      service6:  'Play Videos from Pendrive',
      
      images: [image8,image6,image9,image5,image7],
      image: image4 
    },
    
    
  ];

  return (
    <div>
      <ServiceProvider serviceProviders={serviceProviders} />
    </div>
  );
}

export default DthService;
