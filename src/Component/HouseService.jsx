import React from 'react';
import ServiceProvider from './ServiceProvider'; 
import image1 from '../assets/images/House/image1.jpg';
import image2 from '../assets/images/House/image2.jpg';
import image3 from '../assets/images/House/image3.jpg';
import image4 from '../assets/images/House/image4.jpg';
import image5 from '../assets/images/House/image5.jpg';
import image6 from '../assets/images/House/image6.jpg';
import image7 from '../assets/images/Grocery/image7.jpg';
import image8 from '../assets/images/House/image8.jpg';
import image9 from '../assets/images/House/image9.jpg';



function HouseService() {
  const serviceProviders = [
    {
      header: 'HouseKeeping Service Providers',
      name: 'Aasha Varma',
      company: 'Sahara Cleaning Services',
      location: 'Hadapsar, Pune - 411028',
      service1:'Disposing of Rubbish',
      service2: 'Cleaning Cloths & Dirty Surfaces',
      service3:  'Dusting & Vaccuming',
      service4:  'Removing leaves from rain gutters',
      service5:  'Washing Windows',
      service6:  'Sweeping Doormats',

      images: [image5,image6,image7,image8,image9],
      image: image1 
    },
    {
        name: 'Anuja Rawat',
        company: 'WBC Housekeeping',
        location: 'Wagholi, Pune - 412207',
        service1:'Disposing of Rubbish',
        service2: 'Cleaning Cloths & Dirty Surfaces',
        service3:  'Dusting & Vaccuming',
        service4:  'Removing leaves from rain gutters',
        service5:  'Washing Windows',
        service6:  'Sweeping Doormats',

        images: [image8,image5,image7,image9,image6],
        image: image2 
      },
      {
      name: 'Pooja Sapkal',
      company: 'AWC Home Cleaning',
      location: 'Kharadi, Pune - 411030',
      service1:'Disposing of Rubbish',
      service2: 'Cleaning Cloths & Dirty Surfaces',
      service3:  'Dusting & Vaccuming',
      service4:  'Removing leaves from rain gutters',
      service5:  'Washing Windows',
      service6:  'Sweeping Doormats',

      images: [image5,image6,image7,image8,image9],
      image: image3
    },
       {
      name: 'Neeta Rane',
      company: 'Veda Housekeeping',
      location: 'Pimpri, Pune - 411018',
      service1:'Disposing of Rubbish',
      service2: 'Cleaning Cloths & Dirty Surfaces',
      service3:  'Dusting & Vaccuming',
      service4:  'Removing leaves from rain gutters',
      service5:  'Washing Windows',
      service6:  'Sweeping Doormats',
      
      images: [image8,image5,image7,image9,image6],
      image: image4 
    },
    
    
  ];

  return (
    <div>
      <ServiceProvider serviceProviders={serviceProviders} />
    </div>
  );
}

export default HouseService;
