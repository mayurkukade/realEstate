import { useState } from 'react'
import './App.css'
import { Button } from "@material-tailwind/react";
import Header from './components/Header'
import Home from "./pages/Home";

function App() {


  return (
    <>
    <Header/>
      <Home />
    <Button>Button</Button>
    </>
  )
}

export default App
