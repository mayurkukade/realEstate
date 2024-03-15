import React from 'react';
import ServiceProvider from './ServiceProvider'; 
import image1 from '../assets/images/Electrical/image1.jpg';
import image2 from '../assets/images/Electrical/image2.jpg';
import image3 from '../assets/images/Electrical/image3.jpg';
import image4 from '../assets/images/Electrical/image4.jpg';
import image5 from '../assets/images/Electrical/image5.jpg';
import image6 from '../assets/images/Electrical/image6.jpg';
import image7 from '../assets/images/Electrical/image7.jpg';
import image8 from '../assets/images/Electrical/image8.jpg';
import image9 from '../assets/images/Electrical/image9.jpg';


function ElectricalService() {
  const serviceProviders = [
    {
      header: 'Electrical Service Providers',
      name: 'Arjun Take',
      company: 'S S Electrical Services',
      location: 'Hadapsar, Pune - 411028',
      service1:'Switches & Outlets',
      service2: 'Lighting',
      service3:  'Ceiling Fans',
      service4:  'Wiring',
      service5:  'Electrical Panels',
      service6:  'Providing Electricity to home',

      images: [image6,image7,image8,image9,image5],
      image: image1 
    },
    {
        name: 'Pranav Kate',
        company: 'JMS Electrician',
        location: 'Wagholi, Pune - 412207',
        service1:'Switches & Outlets',
      service2: 'Lighting',
      service3:  'Ceiling Fans',
      service4:  'Wiring',
      service5:  'Electrical Panels',
      service6:  'Providing Electricity to home',

        images: [image5,image6,image9,image7,image8],
        image: image2 
      },
      {
      name: 'Rajat Kale',
      company: 'Mahavir Electricals',
      location: 'Kharadi, Pune - 411030',
      service1:'Switches & Outlets',
      service2: 'Lighting',
      service3:  'Ceiling Fans',
      service4:  'Wiring',
      service5:  'Electrical Panels',
      service6:  'Providing Electricity to home',

      images: [image6,image7,image8,image9,image5],
      image: image3
    },
       {
      name: 'Aakash Borde',
      company: 'RS Elctrical Works',
      location: 'Katraj, Pune - 411006',
      service1:'Switches & Outlets',
      service2: 'Lighting',
      service3:  'Ceiling Fans',
      service4:  'Wiring',
      service5:  'Electrical Panels',
      service6:  'Providing Electricity to home',
      
      images: [image5,image6,image9,image7,image8],
      image: image4 
    },
    
    
  ];

  return (
    <div>
      <ServiceProvider serviceProviders={serviceProviders} />
    </div>
  );
}

export default ElectricalService;
