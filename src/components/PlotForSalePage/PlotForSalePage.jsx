import { Navbar, Button, Input } from "@material-tailwind/react";

import { PropertyPageNavbar } from "../PropertyPageNavbar";
import { PlotForSaleListing } from "./PlotForSaleListing";


export function PlotForSalePage() {
  return (
    <div>
      <PropertyPageNavbar></PropertyPageNavbar>
      <PlotForSaleListing></PlotForSaleListing>
    </div>
  );
}
