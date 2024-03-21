import { useState } from "react";
import "./App.css";
import { Button } from "@material-tailwind/react";

import { NewPropertyPage } from "./components/NewPropertyPage/NewPropertyPage";
import { RentalPropertyDetailPage } from "./components/PropertyDetailPage/RentalPropertyDetailPage";
import { RentalPropertyPage } from "./components/RentalPropertyPage/RentalPropertyPage";
import { ResalePropertyPage } from "./components/ResalePropertyPage/ResalePropertyPage";
import { Error_Page } from "./components/ErrorPage/Error_Page";
import { PostPropertyCard } from "./components/PostPropertyPage/PostPropertyCard";
import { PlotForSalePage } from "./components/PlotForSalePage/PlotForSalePage";

function App() {
  return (
    <div>
      {/* <Error_Page></Error_Page> */}

      {/* <ResalePropertyPage></ResalePropertyPage> */}

      {/* <RentalPropertyPage></RentalPropertyPage> */}

      {/* <RentalPropertyDetailPage></RentalPropertyDetailPage> */}

      {/* <NewPropertyPage></NewPropertyPage> */}

      {/* <PlotForSalePage></PlotForSalePage> */}

      <PostPropertyCard></PostPropertyCard>
    </div>
  );
}

export default App;
