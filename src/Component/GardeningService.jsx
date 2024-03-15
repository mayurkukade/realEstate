import React from 'react';
import ServiceProvider from './ServiceProvider'; 
import image1 from '../assets/images/Electrical/image1.jpg';
import image2 from '../assets/images/Electrical/image2.jpg';
import image3 from '../assets/images/Electrical/image3.jpg';
import image4 from '../assets/images/Electrical/image4.jpg';
import image5 from '../assets/images/Gardening/image5.jpg';
import image6 from '../assets/images/Gardening/image6.jpg';
import image7 from '../assets/images/Gardening/image7.jpg';
import image8 from '../assets/images/Gardening/image8.jpg';
import image9 from '../assets/images/Gardening/image9.jpg';



function GardeningService() {
  const serviceProviders = [
    {
      header: 'Gardening Service Providers',
      name: 'Raj Varma',
      company: 'Varma Garden Services',
      location: 'Bhosari, Pune - 411102',
      service1:'Pruning & Planting',
      service2: 'Mowing & Hedge Trimming',
      service3:  'Full Garden redesign & renovation',
      service4:  'Weeding',
      service5:  'Applying Feeds & Pesticides',
      service6:  'Garden & Maintenance',

      images: [image5,image6,image7,image8,image9],
      image: image4 
    },
    {
        name: 'Tushar Borde',
        company: 'Rudra Garden Services',
        location: 'Wagholi, Pune - 412207',
        service1:'Pruning & Planting',
        service2: 'Mowing & Hedge Trimming',
        service3:  'Full Garden redesign & renovation',
        service4:  'Weeding',
        service5:  'Applying Feeds & Pesticides',
        service6:  'Garden & Maintenance',

        images: [image7,image9,image5,image8,image6],
        image: image3 
      },
      {
      name: 'Vaibhav Aadhav',
      company: 'Vaibhav Gardening',
      location: 'Kharadi, Pune - 411030',
      service1:'Pruning & Planting',
      service2: 'Mowing & Hedge Trimming',
      service3:  'Full Garden redesign & renovation',
      service4:  'Weeding',
      service5:  'Applying Feeds & Pesticides',
      service6:  'Garden & Maintenance',

      images: [image5,image6,image7,image8,image9],
      image: image1
    },
       {
      name: 'Kailas Deva',
      company: 'Grrenyog Agro India',
      location: 'Pimpri, Pune - 411018',
      service1:'Pruning & Planting',
      service2: 'Mowing & Hedge Trimming',
      service3:  'Full Garden redesign & renovation',
      service4:  'Weeding',
      service5:  'Applying Feeds & Pesticides',
      service6:  'Garden & Maintenance',
      
      images: [image7,image9,image5,image8,image6],
      image: image2 
    },
    
    
  ];

  return (
    <div>
      <ServiceProvider serviceProviders={serviceProviders} />
    </div>
  );
}

export default GardeningService;
