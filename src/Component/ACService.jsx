import React from 'react';
import ServiceProvider from './ServiceProvider'; 
import image1 from '../assets/images/AC/image1.png';
import Acimage1 from '../assets/images/AC/Acimage1.jpg'
import Acimage2 from '../assets/images/AC/Acimage2.jpg'
import Acimage3 from '../assets/images/AC/Acimage3.jpg'
import Acimage4 from '../assets/images/AC/Acimage4.jpg'
import image2 from '../assets/images/AC/image2.png';
import Acimage5 from '../assets/images/AC/Acimage5.jpg'
import Acimage6 from '../assets/images/AC/Acimage6.jpg'
import Acimage7 from '../assets/images/AC/Acimage7.jpg'



function ACService() {
  const serviceProviders = [
    {
      header: 'Ac Service Providers',
      name: 'Arjun Ravat',
      company: 'Indian AC Services',
      location: 'Hadapsar, Pune - 411028',
      service1:'Pre-service checks',
      service2: 'Jacket for mess-free service',
      service3:  'Indoor unit Foam-jet cleaning',
      service4:  'Outdoor unit Powerjet cleaning',
      service5:  'Final checks & clean-up',
      service6:  'Personal energy saving report',

      images: [Acimage1,Acimage2,Acimage3,Acimage4,Acimage5],
      image: image1 
    },
    {
        name: 'Vijay Shinde',
        company: 'Shine Air Conditioning',
        location: 'Wagholi, Pune - 412207',
          service1:'Pre-service checks',
          service2: 'Jacket for mess-free service',
          service3:  'Indoor unit Foam-jet cleaning',
          service4:  'Outdoor unit Powerjet cleaning',
          service5:  'Final checks & clean-up',
          service6:  'Personal energy saving report',

        images: [Acimage7,Acimage6,Acimage5,Acimage4,Acimage3],
        image: image2 
      },
      {
      name: 'Krishna Rao',
      company: 'Krishna AC Services',
      location: 'Kharadi, Pune - 411030',
      service1:'Pre-service checks',
      service2: 'Jacket for mess-free service',
      service3:  'Indoor unit Foam-jet cleaning',
      service4:  'Outdoor unit Powerjet cleaning',
      service5:  'Final checks & clean-up',
      service6:  'Personal energy saving report',

      images: [Acimage1,Acimage2,Acimage3,Acimage4,Acimage5],
      image: image1
    },
       {
      name: 'Sachin Borde',
      company: 'Air Cool Solution',
      location: 'Katraj, Pune - 411006',
     service1:'Pre-service checks',
      service2: 'Jacket for mess-free service',
      service3:  'Indoor unit Foam-jet cleaning',
      service4:  'Outdoor unit Powerjet cleaning',
      service5:  'Final checks & clean-up',
      service6:  'Personal energy saving report',
      
      images: [Acimage7,Acimage6,Acimage5,Acimage4,Acimage3],
      image: image2 
    },
    
    
  ];

  return (
    <div>
      <ServiceProvider serviceProviders={serviceProviders} />
    </div>
  );
}

export default ACService;
