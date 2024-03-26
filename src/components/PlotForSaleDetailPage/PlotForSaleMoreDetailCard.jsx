import { React, useState } from "react";

export function PlotForSaleMoreDetailCard() {
  return (
    <div className="grid place-content-center">
      <div
        id="cardBody"
        className="m-4 p-6 w-[1100px] border border-cyan-100 rounded-lg shadow-xl"
      >
        <div className="mb-4">More Details</div>

        <div className="flex space-x-8">
          <div id="col1">
            <ul className="list-none  space-y-4">
              <li>Price Breakup</li>
              <li>Booking Amount</li>
              <li>Address</li>
              <li>Facing</li>
              <li>Type of Ownership</li>
              <li>Overlooking</li>
              <li>Floors Allowed for Construction</li>
            </ul>
          </div>
          <div id="col2">
            <ul className="space-y-4 font-semibold">
              <li>₹ 90 Lac</li>
              <li>₹ 100000</li>
              <li>Pune, Maharashtra</li>
              <li>East</li>
              <li>Co-operative Society</li>
              <li>Garden/Park</li>
              <li>10</li>
            </ul>
          </div>
        </div>

        <div className="my-6">
          Description : 3 side open Plot is available for sale. It has covered
          area of 998 sq-ft, it is a good location property. please contact for
          more details.
        </div>

        <div id="contactDetails">
          <div>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
              integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
              crossorigin="anonymous"
              referrerpolicy="no-referrer"
            />
          </div>

          <div className="text-start">
            <button className="text-sm text-white px-3 py-2 rounded-full bg-green-700">
              Contact Owner
              <i class="fa-solid fa-square-phone fa-lg pl-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
