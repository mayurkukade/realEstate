import { PropertyPageNavbar } from "../PropertyPageNavbar";
import { RentalPropertyListing } from "./RentalPropertyListing";

export function RentalPropertyPage() {
  return (
    <div>
      <PropertyPageNavbar></PropertyPageNavbar>
      <RentalPropertyListing></RentalPropertyListing>
    </div>
  );
}
