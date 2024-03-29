import { NewPropertyListing } from "./NewPropertyListing";
import { PropertyPageNavbar } from "../PropertyPageNavbar";

export default function NewPropertyPage() {
  return (
    <div>
      <PropertyPageNavbar></PropertyPageNavbar>
      <NewPropertyListing></NewPropertyListing>
    </div>
  );
}
