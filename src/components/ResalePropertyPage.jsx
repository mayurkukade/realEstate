import { PropertyListing } from "./PropertyListing";
import { ResalePropertyNavbar } from "./ResalePropertyNavbar";



export default function ResalePropertyPage() {
  return (
    <div>
      <ResalePropertyNavbar></ResalePropertyNavbar>
      <PropertyListing></PropertyListing>
    </div>
  );
}