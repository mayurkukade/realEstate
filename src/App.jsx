import { Route, Routes } from "react-router-dom";
import Homepage from "./Compoments/Home/Homepage";
import LogIn from "./Compoments/LogIn";
import SingUp from "./Compoments/SingUp";
import Applayout from "./Compoments/Layout/Applayout";
import About from './Component/About';
import Services from './Component/Services';
//import SellRentCard from './Component/SellRentCard';
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


// import  PlotForSalePage  from "./components/PlotsForSalePage";
// //import  NewPropertyPage  from "./components/NewPropertyPage";
// import  RentalPropertyDetailPage  from "./components/RentalPropertyDetailPage";
// import  RentalPropertyPage  from "./components/RentalPropertyPage";
// import  ResalePropertyPage  from "./components/ResalePropertyPage";
// import  Error_Page  from "./components/Error_Page";
// //import  PostPropertyCard  from "./components/PostPropertyCard";
// //import { NewPropertyListing } from "./components/NewPropertyListing";
// // import  PreViewPropertyCard  from "./components/PreViewPropertyCard";

import  NewPropertyPage  from "./components/NewPropertyPage/NewPropertyPage";
import  RentalPropertyDetailPage  from "./components/RentalPropertyDetailPage/RentalPropertyDetailPage";
import  RentalPropertyPage  from "./components/RentalPropertyPage/RentalPropertyPage";
import  ResalePropertyPage  from "./components/ResalePropertyPage/ResalePropertyPage";
import  Error_Page  from "./components/ErrorPage/Error_Page";
import  PostPropertyCard  from "./components/PostPropertyPage/PostPropertyCard";
import  PlotForSalePage  from "./components/PlotForSalePage/PlotForSalePage";
 import  NewPropertyDetailPage  from "./components/NewPropertyDetailPage/NewPropertyDetailPage";
 import  PlotForSaleDetailPage  from "./components/PlotForSaleDetailPage/PlotForSaleDetailPage";
 import  ResalePropertyDetailPage  from "./components/ResalePropertyDetailPage/ResalePropertyDetailPage";


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
          
          <Route path="/resaleproperty" element={<ResalePropertyPage/> } />
          <Route path="/resalepropertydetail" element={<ResalePropertyDetailPage/> } />
          <Route path="/rentalproperty" element={<RentalPropertyPage/> } />
          <Route path="/rentalpropertydetail" element={<RentalPropertyDetailPage/>} />
          <Route path="/newproperty" element={<NewPropertyPage />} />
          <Route path="/newpropertydetail" element={<NewPropertyDetailPage />} />
          <Route path="/plotforsale" element={<PlotForSalePage />} />
          <Route path="/plotforsaledetails" element={<PlotForSaleDetailPage />} />
          <Route path="/postproprite" element={<PostPropertyCard />} />
          <Route path="/*" element={<Error_Page/>} />

        </Route>
      </Routes>
    
    
      </>
  );
}

export default App;
