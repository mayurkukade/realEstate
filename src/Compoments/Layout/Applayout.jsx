
import Navbars from "../Home/Navbars"
import Footers from "../Home/Footers"
import { Outlet } from 'react-router-dom'

export default function Applayout() {
  return (
    <div>
        <Navbars/>
        <Outlet/>
        <Footers/>
    </div>
  )
}
