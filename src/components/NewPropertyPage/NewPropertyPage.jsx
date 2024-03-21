import { NewPropertyListing } from "./NewPropertyListing";
import { PropertyPageNavbar } from "../PropertyPageNavbar";

export function NewPropertyPage() {
  return (
    <div>
      <PropertyPageNavbar></PropertyPageNavbar>
      <NewPropertyListing></NewPropertyListing>
    </div>
  );
}
