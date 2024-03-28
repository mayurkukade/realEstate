import { PropertyPageNavbar } from "../PropertyPageNavbar";
import { ResalePropertyListing } from "./ResalePropertyListing";

export function ResalePropertyPage() {
  return (
    <div>
      <PropertyPageNavbar></PropertyPageNavbar>
      <ResalePropertyListing></ResalePropertyListing>
    </div>
  );
}
