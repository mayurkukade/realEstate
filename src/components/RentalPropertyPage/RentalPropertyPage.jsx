import { PropertyPageNavbar } from "../PropertyPageNavbar";
import { RentalPropertyListing } from "./RentalPropertyListing";

export default function RentalPropertyPage() {
  return (
    <div>
      <PropertyPageNavbar></PropertyPageNavbar>
      <RentalPropertyListing></RentalPropertyListing>
    </div>
  );
}
