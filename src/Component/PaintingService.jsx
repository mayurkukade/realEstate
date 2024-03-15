import React from 'react';
import ServiceProvider from './ServiceProvider'; 
import image1 from '../assets/images/Paint/image1.png';
import image2 from '../assets/images/Paint/image2.png';
import image3 from '../assets/images/Paint/image3.png';
import image4 from '../assets/images/Paint/image4.png';
import image5 from '../assets/images/Paint/image5.jpg'
import image6 from '../assets/images/Paint/image6.jpg'
import image7 from '../assets/images/Paint/image7.jpg'
import image8 from '../assets/images/Paint/image8.jpg'
import image9 from '../assets/images/Paint/image9.jpg'
import image10 from '../assets/images/Paint/image10.jpg'
import image11 from '../assets/images/Paint/image11.jpg'



function PaintingService() {
  const serviceProviders = [
    {
      header: 'Painting Service Providers',
      name: 'Raj Sinha',
      company: 'Sinha Painting Services',
      location: 'Hadapsar, Pune - 411028',
       service1: 'Interior Wall Paints',
       service2: 'Wood Coating',
       service3: 'Water Proofing',
       service4: 'Nxtgen Painting Services',
       service5: 'Exterior Wall Paints',
       service6: 'Adhesives',

      images: [image5,image6,image7,image8,image9],
      image: image1
    },
    {
        name: 'Shubham Rawat',
        company: 'Painting Services',
        location: 'Wagholi, Pune - 412207',
        service1: 'Interior Wall Paints',
        service2: 'Wood Coating',
        service3: 'Water Proofing',
        service4: 'Nxtgen Painting Services',
        service5: 'Exterior Wall Paints',
        service6: 'Adhesives',

        images: [image10,image11,image5,image6,image7],
        image: image2 
      },
      {
      name: 'Ravi Rana',
      company: 'Kalyani Home Painting',
      location: 'Kharadi, Pune - 411030',
      service1: 'Interior Wall Paints',
       service2: 'Wood Coating',
       service3: 'Water Proofing',
       service4: 'Nxtgen Painting Services',
       service5: 'Exterior Wall Paints',
       service6: 'Adhesives',

      images: [image5,image6,image7,image8,image9],
      image: image3
    },
       {
      name: 'Pravin Sharma',
      company: 'Freshcoats Services',
      location: 'Katraj, Pune - 411006',
      service1: 'Interior Wall Paints',
       service2: 'Wood Coating',
       service3: 'Water Proofing',
       service4: 'Nxtgen Painting Services',
       service5: 'Exterior Wall Paints',
       service6: 'Adhesives',
       
      images: [image10,image11,image5,image6,image7],
      image: image4 
    },
    
    
  ];

  return (
    <div>
      <ServiceProvider serviceProviders={serviceProviders} />
    </div>
  );
}

export default PaintingService;
