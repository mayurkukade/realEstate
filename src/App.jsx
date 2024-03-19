import { useState } from 'react'
import './App.css'
import { Footer } from './Component/Footer';
import About from './Component/About';
import Services from './Component/Services';
import SellRentCard from './Component/SellRentCard';
import ACService from './Component/ACService';
import PlumbingService from './Component/PlumbingService';
import PaintingService from './Component/PaintingService';
import CarpenterService from './Component/CarpenterService';
import SecurityService from './Component/SecurityService';
import PestService from './Component/PestService';
import ElectricalService from './Component/ElectricalService';
import WifiService from './Component/WifiService';
import GroceryService from './Component/GroceryService';
import HouseService from './Component/HouseService';
import DthService from './Component/DthService';
import GardeningService from './Component/GardeningService';
import { ServiceNavbar } from './Component/ServiceNavbar';

function App() {


  return (
    <>
    {/* <About/>
    <Services/> */}
    {/* <ACService/> */}
    {/* <CarpenterService/> */}
    {/* <DthService/> */}
    <PlumbingService/>
    {/* <PaintingService/> */}
    {/* <SecurityService/> */}
    {/* <PestService/> */}
    {/* <WifiService/> */}
    {/* <GroceryService/> */}
    {/* <HouseService/> */}
    {/* <ElectricalService/> */}
    {/* <GardeningService/> */}
    {/* <ServiceNavbar/> */}
    </>
  )
}

export default App
