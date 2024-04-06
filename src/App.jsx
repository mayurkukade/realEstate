import { useState } from "react";
import "./App.css";
import { Button } from "@material-tailwind/react";

import { NewPropertyPage } from "./components/NewPropertyPage/NewPropertyPage";
import { RentalPropertyDetailPage } from "./components/RentalPropertyDetailPage/RentalPropertyDetailPage";
import { RentalPropertyPage } from "./components/RentalPropertyPage/RentalPropertyPage";
import { ResalePropertyPage } from "./components/ResalePropertyPage/ResalePropertyPage";
import { Error_Page } from "./components/ErrorPage/Error_Page";
import { PostPropertyCard } from "./components/PostPropertyPage/PostPropertyCard";
import { PlotForSalePage } from "./components/PlotForSalePage/PlotForSalePage";
import { NewPropertyDetailPage } from "./components/NewPropertyDetailPage/NewPropertyDetailPage";
import { PlotForSaleDetailPage } from "./components/PlotForSaleDetailPage/PlotForSaleDetailPage";
import { ResalePropertyDetailPage } from "./components/ResalePropertyDetailPage/ResalePropertyDetailPage";

function App() {
  return (
    <div>
      {/* <Error_Page></Error_Page> */}

      {/* <ResalePropertyPage></ResalePropertyPage> */}

      <ResalePropertyDetailPage></ResalePropertyDetailPage>

      {/* <RentalPropertyPage></RentalPropertyPage> */}

      {/* <RentalPropertyDetailPage></RentalPropertyDetailPage> */}

      {/* <NewPropertyPage></NewPropertyPage> */}

      {/* <NewPropertyDetailPage></NewPropertyDetailPage> */}

      {/* <PlotForSalePage></PlotForSalePage> */}

      {/* <PlotForSaleDetailPage></PlotForSaleDetailPage> */}

      {/* <PostPropertyCard></PostPropertyCard> */}
    </div>
  );
}

export default App;
