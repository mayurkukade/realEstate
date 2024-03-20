import React from 'react';
import ServiceProvider from './ServiceProvider'; 
import image1 from '../assets/images/Pest/image1.jpg';
import image2 from '../assets/images/Pest/image2.jpg'
import image3 from '../assets/images/Pest/image3.jpg'
import image4 from '../assets/images/Pest/image4.png'
import image5 from '../assets/images/Grocery/image5.jpg';
import image6 from '../assets/images/Grocery/image6.jpg'
import image7 from '../assets/images/Grocery/image7.jpg'
import image8 from '../assets/images/Grocery/image8.jpg'
import image9 from '../assets/images/Grocery/image9.jpg'

function GroceryService() {
  const serviceProviders = [
    {
      header: 'Grocery Service Providers',
      name: 'Prasad Joshi',
      company: 'Super Basket',
      location: 'Hadapsar, Pune - 411028',
      service1:'Fresh Vegetables & Fruits',
      service2: 'Canned Foods & Sauces',
      service3:  'Spices & herbs',
      service4:  'Oil & Vinegars',
      service5:  'Dairy Product & baked goods',
      service6:  'Medicine & Personal Care',

      images: [image5,image6,image7,image8,image9],
      image: image1 
    },
    {
        name: 'Sagar Telangre',
        company: 'Mauli Grocery Shop',
        location: 'Wagholi, Pune - 412207',
        service1:'Fresh Vegetables & Fruits',
        service2: 'Canned Foods & Sauces',
        service3:  'Spices & herbs',
        service4:  'Oil & Vinegars',
        service5:  'Dairy Product & baked goods',
        service6:  'Medicine & Personal Care',

        images: [image8,image5,image7,image6,image9],
        image: image2 
      },
      {
      name: 'Vikas Aadhav',
      company: 'Origo Mart',
      location: 'Kharadi, Pune - 411030',
      service1:'Fresh Vegetables & Fruits',
      service2: 'Canned Foods & Sauces',
      service3:  'Spices & herbs',
      service4:  'Oil & Vinegars',
      service5:  'Dairy Product & baked goods',
      service6:  'Medicine & Personal Care',

      images: [image5,image6,image7,image8,image9],
      image: image3
    },
       {
      name: 'Sachin Nayar',
      company: 'First Choice',
      location: 'Pimpri, Pune - 411018',
      service1:'Fresh Vegetables & Fruits',
      service2: 'Canned Foods & Sauces',
      service3:  'Spices & herbs',
      service4:  'Oil & Vinegars',
      service5:  'Dairy Product & baked goods',
      service6:  'Medicine & Personal Care',
      
      images: [image8,image5,image7,image6,image9],
      image: image4 
    },
    
    
  ];

  return (
    <div>
      <ServiceProvider serviceProviders={serviceProviders} />
    </div>
  );
}

export default GroceryService;
