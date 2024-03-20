import React from 'react';
import ServiceProvider from './ServiceProvider'; 
import image1 from '../assets/images/Security/image1.png';
import image2 from '../assets/images/Security/image2.png';
import image3 from '../assets/images/Security/image3.png';
import image4 from '../assets/images/Security/image4.jpg';
import image5 from '../assets/images/Security/image5.jpg';
import image6 from '../assets/images/Security/image6.jpg';
import image7 from '../assets/images/Security/image7.jpg';
import image8 from '../assets/images/Security/image8.jpg';


function SecurityService() {
  const serviceProviders = [
    {
      header: 'Security Service Providers',
      name: 'Sunil Shelke',
      company: 'Power Security Services',
      location: 'Hadapsar, Pune - 411028',
      service1:'Security Watchman',
      service2: 'CCTV Camera',
      service3:  'Alarm System',
      service4:  'Fingerprint Lock System',
      service5:  'Sensors',
      service6:  'Security Services',

      images: [image4,image5,image6,image7,image8],
      image: image1 
    },
    {
        name: 'Sagar Dev',
        company: 'Saksham Security Services',
        location: 'Wagholi, Pune - 412207',
        service1:'Security Watchman',
        service2: 'CCTV Camera',
        service3:  'Alarm System',
        service4:  'Fingerprint Lock System',
        service5:  'Sensors',
        service6:  'Security Services',

        images: [image8,image7,image6,image5,image4],
        image: image2 
      },
      {
      name: 'Amit Kolhe',
      company: 'Swami Security Services',
      location: 'Kharadi, Pune - 411030',
      service1:'Security Watchman',
      service2: 'CCTV Camera',
      service3:  'Alarm System',
      service4:  'Fingerprint Lock System',
      service5:  'Sensors',
      service6:  'Security Services',

      images: [image4,image5,image6,image7,image8],
      image: image3
    },
       {
      name: 'Nitin Lahane',
      company: 'Expert Security services',
      location: 'Katraj, Pune - 411006',
      service1:'Security Watchman',
      service2: 'CCTV Camera',
      service3:  'Alarm System',
      service4:  'Fingerprint Lock System',
      service5:  'Sensors',
      service6:  'Security Services',
      
      images: [image8,image7,image6,image5,image4],
      image: image1 
    },
    
    
  ];

  return (
    <div>
      <ServiceProvider serviceProviders={serviceProviders} />
    </div>
  );
}

export default SecurityService;
