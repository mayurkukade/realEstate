import React from 'react';
import ServiceProvider from './ServiceProvider'; 
import image1 from '../assets/images/Plumbing/image1.jpg'
import image2 from '../assets/images/Plumbing/image2.jpg'
import image3 from '../assets/images/Plumbing/image3.jpg'
import image4 from '../assets/images/Plumbing/image4.jpg'
import image5 from '../assets/images/Plumbing/image5.jpg'
import image6 from '../assets/images/Plumbing/image6.jpg'
import image7 from '../assets/images/Plumbing/image7.jpg'
import image8 from '../assets/images/Plumbing/image8.jpg'
import image9 from '../assets/images/Plumbing/image9.jpg'
import image10 from '../assets/images/Plumbing/image10.jpg'
import image11 from '../assets/images/Plumbing/image11.png'
import image12 from '../assets/images/Plumbing/image12.png'


function PlumbingService() {
  const serviceProviders = [
    {
      header: 'Plumbing Service Providers',
      name: 'Arjun Singh',
      company: 'Singh Plumbing Services',
      location: 'Hadapsar, Pune - 411028',
       service1: 'Leak Repairs',
       service2: 'Toilet Repairs',
       service3: 'Drain Cleaning',
       service4: 'Pipe Repair and Replacement',
       service5: 'Water Heater Services',
       service6: 'Sewer Repair',

      images: [image1,image2,image3,image4,image5],
      image: image11 
    },
    {
        name: 'Manoj Rawat',
        company: 'Plumbing Services',
        location: 'Wagholi, Pune - 412207',
       service1: 'Leak Repairs',
       service2: 'Toilet Repairs',
       service3: 'Drain Cleaning',
       service4: 'Pipe Repair and Replacement',
       service5: 'Water Heater Services',
       service6: 'Sewer Repair',

        images: [image6,image7,image8,image9,image10],
        image: image12 
      },
      {
      name: 'Suresh Rana',
      company: 'Suresh Plumbing Services',
      location: 'Kharadi, Pune - 411030',
      service1: 'Leak Repairs',
       service2: 'Toilet Repairs',
       service3: 'Drain Cleaning',
       service4: 'Pipe Repair and Replacement',
       service5: 'Water Heater Services',
       service6: 'Sewer Repair',

      images: [image1,image2,image3,image4,image5],
      image: image11
    },
       {
      name: 'Vivek Sharma',
      company: 'Indian Plumbing Services',
      location: 'Katraj, Pune - 411006',
      service1: 'Leak Repairs',
       service2: 'Toilet Repairs',
       service3: 'Drain Cleaning',
       service4: 'Pipe Repair and Replacement',
       service5: 'Water Heater Services',
       service6: 'Sewer Repair',
       
      images: [image6,image7,image8,image9,image10],
      image: image12 
    },
    
    
  ];

  return (
    <div>
      <ServiceProvider serviceProviders={serviceProviders} />
    </div>
  );
}

export default PlumbingService;
