import {
    Navbar,
    Button,
    Input,
  } from "@material-tailwind/react";

   
  export function ServiceNavbar() {
    return (
        <section className="mt-10">
     

      <div className=" flex mx-8 mt-5 justify-between ">
        <div>
            <Button
              size="sm"
              color="white"
              className="bg-[#ffffff] border capitalize text-sm font-normal mr-5"
            >
              Services
            </Button>
            <Button
              size="sm"
              color="white"
              className="bg-[#ffffff] border capitalize text-sm font-normal"
            >
              Top Service Providers
            </Button>
        </div>
      
            <div>
            <Button
              size="sm"
              color="white"
              className="flex text-end justify-end items-end rounded-full bg-[#ffffff]  border capitalize text-sm font-normal px-5"
            >
            Sort by : Relevance
            </Button>
            </div>
      </div>
      <div className="border-b-2 border-gray-200 mt-2"></div>
      </section>
    );
  }