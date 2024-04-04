import React from "react";
import { IoMdHome } from "react-icons/io";

export function Error_Page() {
  return (
    <div>
      <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
        <div className="max-w-lg text-center">
          <h1 className="font-[poppins] text-9xl font-bold text-gray-800">404</h1>
          <p className="font-[poppins] text-2xl text-gray-600 mb-4">
            Page Not Found
          </p>
          <p className="font-[lato] text-lg text-gray-700">
            Oops! The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>

          <div className="font-[poppins] mt-4 inline-block px-5 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300">
            <div className="flex">
              <span className="pr-1">
                <IoMdHome style={{ fontSize: 20 }} />
              </span>

              <a href="/">Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error_Page;