import { RentalPropertyListing } from "./RentalPropertyListing";
import { RentalPropertyNavbar } from "./RentalPropertyNavbar";



export function RentalPropertyPage() {
  return (
    <div>
      <RentalPropertyNavbar></RentalPropertyNavbar>
      <RentalPropertyListing></RentalPropertyListing>
    </div>
  );
}