import { React, useState } from "react";
import { FaPhone } from "react-icons/fa6";

export function ResalePropertyMoreDetailCard() {
  return (
    <div className="md:grid md:place-content-center m-4">
      <div
        id="cardBody"
        className="font-[lato] p-6 w-full md:w-[1100px] border border-cyan-100 rounded-lg shadow-xl"
      >
        <div id="heading" className="font-[poppins] font-semibold text-xl mb-4">
          More Details
        </div>

        <div className="flex space-x-8">
          <div id="col1">
            <ul className="list-none  space-y-4">
              <li>Price Breakup</li>
              <li>Booking Amount</li>
              <li>Address</li>
              <li>Furnishing</li>
              <li>Type of Ownership</li>
              <li>Overlooking</li>
              <li>Age of Construction</li>
            </ul>
          </div>
          <div id="col2">
            <ul className="space-y-4 font-semibold">
              <li>₹ 90 Lac</li>
              <li>₹ 100000</li>
              <li>Pune, Maharashtra</li>
              <li>Unfurnished</li>
              <li>Co-operative Society</li>
              <li>Garden/Park</li>
              <li>5 to 10 years</li>
            </ul>
          </div>
        </div>

        <div className="my-4 md:my-6">
          Description : Multistorey 3 side open apartment is available for sale.
          It has covered area of 998 sq-ft, it is a good location property.
          please contact for more details.
        </div>

        <div id="contactDetails">
          <div className="text-start">
            <button className="text-sm text-white px-3 py-2 rounded-full bg-green-700">
              <div className="flex">
                Contact Owner
                <span className="pt-1 ml-1">
                  <FaPhone />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
