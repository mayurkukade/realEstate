import React from 'react';
import ServiceProvider from './ServiceProvider'; 
import image1 from '../assets/images/Carpenter/image1.png';
import image2 from '../assets/images/Carpenter/image2.png';
import image3 from '../assets/images/Carpenter/image3.png';
import image4 from '../assets/images/Carpenter/image4.jpg';
import image5 from '../assets/images/Carpenter/image5.jpg';
import image6 from '../assets/images/Carpenter/image6.jpg';
import image7 from '../assets/images/Carpenter/image7.jpg';
import image8 from '../assets/images/Carpenter/image8.jpg';
import image9 from '../assets/images/Carpenter/image9.jpg';
import image10 from '../assets/images/Carpenter/image10.jpg';
import image11 from '../assets/images/Carpenter/image11.png';
import image12 from '../assets/images/Carpenter/image12.png';



function CarpenterService() {
  const serviceProviders = [
    {
      header: 'Carpenter Service Providers',
      name: 'Ganesh Sapkal',
      company: 'Ganesh Furnitures',
      location: 'Saswad, Pune - 411028',
       service1: 'Cupboard & Drawer',
       service2: 'Bed',
       service3: 'Door',
       service4: 'Furniture Repairs',
       service5: 'Windows & Curtains',
       service6: 'Drill & Hang Wall Decor',

      images: [image4,image5,image6,image7,image8],
      image: image1
    },
    {
        name: 'Vivek Pandey',
        company: 'Pandey Furnitures',
        location: 'Wagholi, Pune - 412207',
        service1: 'Cupboard & Drawer',
        service2: 'Bed',
        service3: 'Door',
        service4: 'Furniture Repairs',
        service5: 'Windows & Curtains',
        service6: 'Drill & Hang Wall Decor',

        images: [image9,image10,image11,image4,image5],
        image: image2 
      },
      {
      name: 'Chetan Salvi',
      company: 'SMJ Furniture Works',
      location: 'Kharadi, Pune - 411030',
        service1: 'Cupboard & Drawer',
       service2: 'Bed',
       service3: 'Door',
       service4: 'Furniture Repairs',
       service5: 'Windows & Curtains',
       service6: 'Drill & Hang Wall Decor',

      images: [image4,image5,image6,image7,image8],
      image: image3
    },
       {
      name: 'Shubham Dongre',
      company: 'Kailash Enterprises',
      location: 'Katraj, Pune - 411006',
      service1: 'Cupboard & Drawer',
      service2: 'Bed',
      service3: 'Door',
      service4: 'Furniture Repairs',
      service5: 'Windows & Curtains',
      service6: 'Drill & Hang Wall Decor',
       
      images: [image9,image10,image11,image4,image5],
      image: image12 
    },
    
    
  ];

  return (
    <div>
      <ServiceProvider serviceProviders={serviceProviders} />
    </div>
  );
}

export default CarpenterService;

