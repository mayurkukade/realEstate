import React from "react";
import img1 from "../assets/img1.png";
import Header from '../components/Header';


function Home() {
    return (
      
        <>
          <div className="relative h-screen ">
        
        <img
          className=" h-full w-full object-cover object-center"
          src={img1}
          alt="nature image"
        />
        <Header />
        <div className="absolute top-20 left-0 p-4 text-black ml-8"> 
          <h1 className="text-3xl font-bold">Real Estate</h1>
          <p className="text-lg font-bold mt-2">We'll lead you the way home</p>
        </div>
      </div>
        </>
      
    )
  }
  
  export default Home;