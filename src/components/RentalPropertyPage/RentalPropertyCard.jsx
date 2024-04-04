import React from "react";
import { FaRegHeart, FaShare } from "react-icons/fa";
import {
  FaEllipsisVertical,
  FaCouch,
  FaChartArea,
  FaBath,
  FaCar,
  FaUserShield,
} from "react-icons/fa6";
import { GiStairs } from "react-icons/gi";

export function RentalPropertyCard({ property }) {
  const {
    owner,
    price,
    contact,
    location,
    title,
    furnishing,
    carpetArea,
    bathroom,
    floor,
    parking,
    transaction,
    description,
    image,
  } = property;

  return (
    <div className="grid place-content-center my-4 ">
      <div
        id="cardBody"
        className="font-[lato] w-[1024px] border border-cyan-100 rounded-lg shadow-xl p-4"
      >
        <div className="flex">
          <div id="col1" className="w-[330px] border-cyan-600">
            <div id="image">
              <img
                src={image}
                alt="Property Image"
                className="w-full h-[190px] object-cover rounded-xl"
              />
            </div>

            <div id="details" className="text-sm pt-4">
              <div className="flex font-semibold">
                <div className="text-start">Owner: {owner}</div>
                <div className="pl-20">{price}</div>
              </div>

              <div className="text-start pt-2">Contact: {contact}</div>
              <div className="text-start pt-12 w-[800px]">{location}</div>
            </div>
          </div>

          <div id="col2" className="w-full pl-6">
            <div className="flex items-center justify-between pb-6 pt-8">
              <div
                id="heading"
                className="font-[poppins] font-semibold text-lg"
              >
                {title}
              </div>

              <div id="icons" className="justify-end items-center pl-8">
                <div className="flex">
                  <span className="hover:cursor-pointer mr-3">
                    <FaRegHeart />
                  </span>

                  <span className="hover:cursor-pointer mr-3">
                    <FaShare />
                  </span>

                  <span className="hover:cursor-pointer">
                    <FaEllipsisVertical />
                  </span>
                </div>
              </div>
            </div>

            <div
              id="icon"
              className="w-[550px] h-[100px] flex justify-evenly border-cyan-600"
            >
              <div id="column1" className="py-2 px-1 justify-evenly space-y-4">
                <div className="flex">
                  <span className="mr-3 text-gray-800">
                    <FaCouch style={{ fontSize: 40 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Furnishing</div>
                    <div className="text-xs">{furnishing}</div>
                  </div>
                </div>

                <div className="flex">
                  <span className="mr-3 mt-1 text-gray-800">
                    <FaChartArea style={{ fontSize: 34 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Carpet Area</div>
                    <div className="text-xs">{carpetArea}</div>
                  </div>
                </div>
              </div>

              <div id="column2" className="p-2 justify-evenly space-y-4">
                <div className="flex">
                  <span className="mr-3 mt-1 text-gray-800">
                    <FaBath style={{ fontSize: 34 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Bathroom</div>
                    <div className="text-xs">{bathroom}</div>
                  </div>
                </div>

                <div className="flex">
                  <span className="mr-3 mt-1 text-gray-800">
                    <GiStairs style={{ fontSize: 36 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Floor</div>
                    <div className="text-xs">{floor}</div>
                  </div>
                </div>
              </div>

              <div id="column3" className="p-2 justify-evenly space-y-4">
                <div className="flex">
                  <span className="mr-3 mt-1 text-gray-800">
                    <FaCar style={{ fontSize: 32 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Parking</div>
                    <div className="text-xs">{parking}</div>
                  </div>
                </div>

                <div className="flex">
                  <span className="mr-3 mt-1 text-gray-800">
                    <FaUserShield style={{ fontSize: 36 }} />
                  </span>

                  <div>
                    <div className="text-sm font-semibold">Security</div>
                    <div className="text-xs">{transaction}</div>
                  </div>
                </div>
              </div>
            </div>

            <div id="details" className="text-start mt-6 text-sm space-y-4">
              <div>Special Price Offered by Owner</div>
              <div>{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}