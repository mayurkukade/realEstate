import React from "react";
import { Avatar, Select, Option, Button } from "@material-tailwind/react";

export default function Header() {
  return (
    <div className="flex justify-center">
      <div>
        <div className="mt-10 flex ml-48">
          <div>
            <p
              className="text-[3rem] text-[#1F2046] "
              style={{ fontFamily: "Kalam" }}
            >
              Where Dreams{" "}
            </p>
            <span
              className="text-[3rem] text-[#1F2046] ml-5 "
              style={{ fontFamily: "Kalam" }}
            >
              Comes True{" "}
            </span>
          </div>

          {/* <div className='ml-28 mt-10'>
           <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" className='ml-6' />
           <div className='flex mt-2'>
             <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
             <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" className='ml-2' />
           </div>
         </div> */}
        </div>

        <div className="flex mt-5 rounded-md bg-gray-100 shadow-md shadow-gray-500 py-2 px-2">

          <div>
            <p>Property Type</p>
            <Select label="Select Version">
              <Option>A</Option>
              <Option>B</Option>
              <Option>C</Option>
              <Option>D</Option>
              <Option>E</Option>
            </Select>
          </div>

          <div className="ml-2">
            <p>Location</p>
            <Select label="Select Version">
            <Option>A</Option>
              <Option>B</Option>
              <Option>C</Option>
              <Option>D</Option>
              <Option>E</Option>
            </Select>
          </div>

          <div className="ml-2">
            <p>Price Range</p>
            <Select label="Select Version">
            <Option>A</Option>
              <Option>B</Option>
              <Option>C</Option>
              <Option>D</Option>
              <Option>E</Option>
            </Select>
          </div>

           <div className="ml-2 mt-6">
             <Button className="bg-green-600">Search</Button>
           </div>
        </div>
      </div>
    </div>
  );
}
