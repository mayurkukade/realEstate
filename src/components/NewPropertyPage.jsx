import { NewPropertyListing } from "./NewPropertyListing";
import { NewPropertyNavbar } from "./NewPropertyNavbar";


export default function NewPropertyPage() {
  return (
    <div>
      <NewPropertyNavbar></NewPropertyNavbar>
      <NewPropertyListing></NewPropertyListing>
    </div>
  );
}