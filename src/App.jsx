

import { Route, Routes } from "react-router-dom";
import Homepage from "./Compoments/Home/Homepage";
import LogIn from "./Compoments/LogIn";
import SingUp from "./Compoments/SingUp";

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/singup" element={<SingUp/>}/>
    </Routes>
      
    </>
  )
}

export default App
