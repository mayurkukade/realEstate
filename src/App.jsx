

import { Route, Routes } from "react-router-dom";
import Homepage from "./Compoments/Home/Homepage";
import LogIn from "./Compoments/LogIn";
import SingUp from "./Compoments/SingUp";
import Applayout from "./Compoments/Layout/Applayout";
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




import { Button } from "@material-tailwind/react";

import { PostPropertyCard } from "./components/PostPropertyCard";
import { SalePropertyCard } from "./components/SalePropertyCard";

import { Error_Page } from "./components/Error_Page";

import { PropertyListing } from "./components/PropertyListing";
import { NavbarSalePropertyCard } from "./components/NavbarSalePropertyCard";

import { RentalPropertyListing } from "./components/RentalPropertyListing";

import { NavbarBlue } from "./components/NavbarBlue";
import { SalePropertyCardTwo } from "./components/SalePropertyCardTwo";
import { MoreDetailsCard } from "./components/MoreDetailsCard";
import { HorizontalCard } from "./components/PreViewPropertyCard";
import { CardDefault } from "./components/PropertyServicesCard";

import { NewPropertyListing } from "./components/NewPropertyListing";

import { PlotForSaleListing } from "./components/PlotForSaleListing";
import { RentalPropertyNavbar } from "./components/RentalPropertyNavbar";
import { ResalePropertyNavbar } from "./components/ResalePropertyNavbar";
import { NewPropertyNavbar } from "./components/NewPropertyNavbar";
import { PlotForSaleNavbar } from "./components/PlotForSaleNavbar";

function App() {
  return (

    <>

      <Routes>
        <Route element={<Applayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/singup" element={<SingUp />} />
          
          <Route path="/services" element={<Services/>} />
          <Route path="/acservices" element={<ACService/> } />
          <Route path="/carservices" element={<CarpenterService/> } />
          <Route path="/dthservices" element={<DthService/>} />
          <Route path="/plumbservices" element={<PlumbingService/>} />
          <Route path="/paintservices" element={<PaintingService/>} />
          <Route path="/secuservices" element={<SecurityService/> } />
          <Route path="/pestservices" element={<PestService/> } />
          <Route path="/wifiservices" element={<WifiService/> } />
          <Route path="/groceservices" element={<GroceryService/> } />
          <Route path="/houseervices" element={<HouseService/> } />
          <Route path="/electrilervices" element={<ElectricalService/> } />
          <Route path="/gardservices" element={<GardeningService/> } />
        
          <Route path="/about" element={<About/> } />


        </Route>
      </Routes>
    

    <div>
      <div id="ErrorPage">{/* <Error_Page></Error_Page> */}</div>

      <div id="ResalePropertyPage">
        {/* <ResalePropertyNavbar></ResalePropertyNavbar>
        <PropertyListing></PropertyListing> */}
      </div>

      <div id="RentalPropertyPage">
        {/* <RentalPropertyNavbar></RentalPropertyNavbar>
        <RentalPropertyListing></RentalPropertyListing> */}
      </div>

      <div id="RentalPropertyDetailPage">
        {/* <NavbarBlue></NavbarBlue>
        <SalePropertyCardTwo></SalePropertyCardTwo>
        <MoreDetailsCard></MoreDetailsCard>
        <HorizontalCard></HorizontalCard>
        <CardDefault></CardDefault> */}
      </div>

      <div id="NewPropertyPage">
        {/* <NewPropertyNavbar></NewPropertyNavbar>
        <NewPropertyListing></NewPropertyListing> */}
      </div>

      <div id="PlotForSalePage">
        <PlotForSaleNavbar></PlotForSaleNavbar>
        <PlotForSaleListing></PlotForSaleListing>
      </div>

      <div id="PostPropertyPage">
        {/* <PostPropertyCard></PostPropertyCard> */}
      </div>
    </div>
    </>
  );
}

export default App;
