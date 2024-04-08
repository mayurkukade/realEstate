import { FavoritePageNavbar } from "../FavoritePageNavbar";
import { FavoritePageListing } from "./FavoritePageListing";

export function FavoritePage() {
  return (
    <div>
      <FavoritePageNavbar></FavoritePageNavbar>
      <FavoritePageListing></FavoritePageListing>
    </div>
  );
}
