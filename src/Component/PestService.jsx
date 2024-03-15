import React from 'react';
import ServiceProvider from './ServiceProvider'; 
import image1 from '../assets/images/Pest/image1.jpg';
import image2 from '../assets/images/Pest/image2.jpg'
import image3 from '../assets/images/Pest/image3.jpg'
import image4 from '../assets/images/Pest/image4.png'
import image5 from '../assets/images/Pest/image5.jpg'
import image6 from '../assets/images/Pest/image6.jpg';
import image7 from '../assets/images/Pest/image7.jpg'
import image8 from '../assets/images/Pest/image8.jpg'
import image9 from '../assets/images/Pest/image9.jpg'



function PestService() {
  const serviceProviders = [
    {
      header: 'Pest Control Service Providers',
      name: 'Rakesh Saha',
      company: 'Tej Pest Control Services',
      location: 'Hadapsar, Pune - 411028',
      service1:'Cultural Control',
      service2: 'Host Resistance',
      service3:  'Physical Control',
      service4:  'Biological Control',
      service5:  'Chemical Control',
      service6:  'Gas Control',

      images: [image5,image6,image7,image8,image9],
      image: image1
    },
    {
        name: 'Pranav Kate',
        company: 'Pune City Pest Control',
        location: 'Wagholi, Pune - 412207',
        service1:'Cultural Control',
        service2: 'Host Resistance',
        service3:  'Physical Control',
        service4:  'Biological Control',
        service5:  'Chemical Control',
        service6:  'Gas Control',

        images: [image9,image8,image7,image6,image5],
        image: image2 
      },
      {
      name: 'Raghav Kale',
      company: 'Clean Pest Control',
      location: 'Kharadi, Pune - 411030',
      service1:'Cultural Control',
      service2: 'Host Resistance',
      service3:  'Physical Control',
      service4:  'Biological Control',
      service5:  'Chemical Control',
      service6:  'Gas Control',

      images: [image5,image6,image7,image8,image9],
      image: image3
    },
       {
      name: 'Aakash Borde',
      company: 'All Out Pest Control',
      location: 'Katraj, Pune - 411006',
      service1:'Cultural Control',
      service2: 'Host Resistance',
      service3:  'Physical Control',
      service4:  'Biological Control',
      service5:  'Chemical Control',
      service6:  'Gas Control',
      
      images: [image9,image8,image7,image6,image5],
      image: image4 
    },
    
    
  ];

  return (
    <div>
      <ServiceProvider serviceProviders={serviceProviders} />
    </div>
  );
}

export default PestService;
