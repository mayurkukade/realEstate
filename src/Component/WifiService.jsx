import React from 'react';
import ServiceProvider from './ServiceProvider'; 
import image1 from '../assets/images/Electrical/image1.jpg';
import image2 from '../assets/images/Electrical/image2.jpg';
import image3 from '../assets/images/Electrical/image3.jpg';
import image4 from '../assets/images/Electrical/image4.jpg';
import image5 from '../assets/images/Wifi/image5.jpg';
import image6 from '../assets/images/Wifi/image6.jpg';
import image7 from '../assets/images/Wifi/image7.jpg';
import image8 from '../assets/images/Wifi/image8.jpg';
import image9 from '../assets/images/Wifi/image9.jpg';




function WifiService() {
  const serviceProviders = [
    {
      header: 'Wifi Service Providers',
      name: 'Rushi Jadhav',
      company: 'City Connect Broadband',
      location: 'Hadapsar, Pune - 411028',
      service1:'Digital Subscriber Line (DSL)',
      service2: 'Cable Modem',
      service3:  'Fibre',
      service4:  'Wireless',
      service5:  'Satellite',
      service6:  'Broadband Over powerlines (BPL)',

      images: [image5,image6,image7,image8,image9],
      image: image1 
    },
    {
        name: 'Jay Parhad',
        company: 'QuickNet Broadband',
        location: 'Wagholi, Pune - 412207',
        service1:'Digital Subscriber Line (DSL)',
      service2: 'Cable Modem',
      service3:  'Fibre',
      service4:  'Wireless',
      service5:  'Satellite',
      service6:  'Broadband Over powerlines (BPL)',

        images: [image8,image9,image7,image5,image6],
        image: image2 
      },
      {
      name: 'Vijay Rao',
      company: 'Hathway Broadband',
      location: 'Kharadi, Pune - 411030',
      service1:'Digital Subscriber Line (DSL)',
      service2: 'Cable Modem',
      service3:  'Fibre',
      service4:  'Wireless',
      service5:  'Satellite',
      service6:  'Broadband Over powerlines (BPL)',

      images: [image5,image6,image7,image8,image9],
      image: image3
    },
       {
      name: 'Sachin Nayar',
      company: 'Kosmic Broadband',
      location: 'Pimpri, Pune - 411018',
      service1:'Digital Subscriber Line (DSL)',
      service2: 'Cable Modem',
      service3:  'Fibre',
      service4:  'Wireless',
      service5:  'Satellite',
      service6:  'Broadband Over powerlines (BPL)',
      
      images: [image8,image9,image7,image5,image6],
      image: image4 
    },
    
    
  ];

  return (
    <div>
      <ServiceProvider serviceProviders={serviceProviders} />
    </div>
  );
}

export default WifiService;
