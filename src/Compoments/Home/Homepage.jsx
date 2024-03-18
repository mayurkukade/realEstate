import React from 'react';
import Navbars from './Navbars';
import Header from './Header';
import Headerlower from './Headerlower';
import ServiceSection from './ServiceSection';
import CourselEffect from './CourselEffect';
import ContactCustomer from './ContactCustomer';
import LatestNews from './LatestNews';
import Footers from './Footers';
import LogIn from '../LogIn';
import SingUp from '../SingUp';

export default function Homepage() {
  return (
    <div>
      {/* Sticky Navbar */}
      <Navbars className="sticky top-0 z-50 " />

      {/* Container for the rest of the components */}
      <div className="overflow-y-auto">
        <Header />
        <Headerlower />
        <ServiceSection />
        <CourselEffect />
        <ContactCustomer />
        <LatestNews />
        <Footers />
        {/* <LogIn />
        <SingUp /> */}
      </div>
    </div>
  );
}
