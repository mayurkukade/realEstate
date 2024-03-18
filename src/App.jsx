import { useState } from 'react'
import './App.css'
import { Button } from "@material-tailwind/react";
import {Error_Page} from "./components/Error_Page";
import {NavbarBlue} from "./components/NavbarBlue";
import {PostPropertyCard} from "./components/PostPropertyCard";
import {SalePropertyCard} from "./components/SalePropertyCard";
import {SalePropertyCardTwo} from "./components/SalePropertyCardTwo";

function App() {


  return (
    <div>
      {/* <Error_Page></Error_Page> */}
      <NavbarBlue></NavbarBlue>
    </div>
  )
}

export default App
