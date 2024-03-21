import { PropertyListing } from "./PropertyListing";
import { PropertyPageNavbar } from "../PropertyPageNavbar";

export function ResalePropertyPage() {
  return (
    <div>
      <PropertyPageNavbar></PropertyPageNavbar>
      <PropertyListing></PropertyListing>
    </div>
  );
}
