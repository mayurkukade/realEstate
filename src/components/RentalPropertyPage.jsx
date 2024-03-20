import { RentalPropertyListing } from "./RentalPropertyListing";
import { RentalPropertyNavbar } from "./RentalPropertyNavbar";



export default function RentalPropertyPage() {
  return (
    <div>
      <RentalPropertyNavbar></RentalPropertyNavbar>
      <RentalPropertyListing></RentalPropertyListing>
    </div>
  );
}