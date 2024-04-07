import { React, useState } from "react";
import { FaBed } from "react-icons/fa";
import {
  FaEllipsisVertical,
  FaCouch,
  FaBath,
  FaCar,
  FaHouseChimney,
  FaRegBuilding,
  FaChartSimple,
  FaFax,
  FaUser,
  FaBuildingColumns,
  FaPhone,
  FaRegUser,
} from "react-icons/fa6";
import { GiStairs } from "react-icons/gi";
import { MdBalcony } from "react-icons/md";

import Image1 from "../../assets/images/Image1.jpg";
import Image2 from "../../assets/images/Image2.jpg";
import Image3 from "../../assets/images/Image3.jpg";
import Image4 from "../../assets/images/Image4.jpg";

export function NewPropertyDetailCard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const imageSources = [Image2, Image3];

  return (
    <div className="md:grid md:place-content-center m-4">
      <div
        id="cardBody"
        className="font-[lato] p-6 md:w-[1100px] border border-cyan-100 rounded-lg shadow-xl  text-lg"
      >
        <div id="heading" className="font-[poppins] pt-2">
          <div id="line1" className="w-full flex flex-col md:flex-row my-1">
            <div className="flex min-w-fit">
              <div className="  ">₹ 90.0 Lac</div>
              <div className="px-4 ">EMI- ₹ 41k</div>
              <span className="leading-5 text-lg pt-1 pr-4">|</span>
            </div>

            <div className="w-full flex flex-row justify-between">
              <div className="">How much loan can I get?</div>

              <div id="icon" className="hover:cursor-pointer text-lg pt-1">
                <FaEllipsisVertical />
              </div>
            </div>
          </div>

          <div id="line2" className="text-start">
            2BHK Flat for Sale in Royal Rahadki Green Phase-1, Pune
          </div>
        </div>

        <div id="cardBody" className="flex flex-col md:flex-row">
          <div id="images" className="py-4  border-cyan-600">
            <div className="w-full md:w-80 h-auto overflow-hidden rounded-lg bg-clip-padding">
              <div className="w-full h-44 rounded-t-lg rounded-b-none bg-clip-padding">
                <img
                  onClick={() => openModal(Image1)}
                  className="w-full h-full object-cover hover:cursor-pointer"
                  src={Image1}
                  alt="building1"
                />
              </div>
              <ul className="w-full pt-1 flex justify-start items-start list-none m-0 p-0">
                {" "}
                {imageSources.map((imageSrc, index) => (
                  <li
                    key={index}
                    className="h-20 mr-1 overflow-hidden relative w-1/3 list-none m-0 p-0"
                  >
                    <img
                      className="w-full h-full object-cover hover:cursor-pointer"
                      src={imageSrc}
                      alt={`building${index + 1}`}
                      onClick={() => openModal(imageSrc)}
                    />
                  </li>
                ))}
                <img
                  onClick={() => openModal(Image4)}
                  className="w-1/3 object-cover hover:cursor-pointer h-20 relative list-none m-0 p-0 overflow-hidden"
                  src={Image4}
                  alt="building4"
                />
              </ul>
            </div>
            {modalOpen && (
              <div className="modal fixed left-0 top-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.7)]">
                <span
                  className="close absolute top-14 right-6 md:top-14 md:right-20 text-4xl font-semibold cursor-pointer hover:bg-white"
                  onClick={closeModal}
                >
                  &times;
                </span>
                <img
                  className="modal-content m-auto block h-[300px] md:w-[600px] md:h-[400px] mt-28 "
                  src={selectedImage}
                  alt="fullSizeImage"
                />
              </div>
            )}
          </div>

          <div id="information" className="md:pl-6 mt-4 text-sm">
            <div
              id="iconInformation"
              className="grid grid-cols-2 md:grid-flow-col gap-3 md:gap-6 p-3 bg-gray-200 rounded-lg md:w-fit"
            >
              <div className="flex">
                <span className="pr-1">
                  <FaBed style={{ fontSize: 22 }} />
                </span>
                1 Bed
              </div>

              <div className="flex">
                <span className="pr-1">
                  <FaBath style={{ fontSize: 18 }} />
                </span>
                1 Bath
              </div>

              <div className="flex">
                <span className="pr-1">
                  <MdBalcony style={{ fontSize: 20 }} />
                </span>
                2 Balconies
              </div>

              <div className="flex">
                <span className="pr-1">
                  <FaCar style={{ fontSize: 18 }} />
                </span>
                1 Covered Parking
              </div>
            </div>

            <div
              id="table"
              className="md:w-[550px] md:h-[200px] mt-4 md:mt-8 text-start  border-cyan-600"
            >
              <div
                id="paste here"
                className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
              >
                <div className="flex">
                  <span className="mr-1 mt-1 text-gray-800">
                    <FaRegBuilding style={{ fontSize: 32 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">
                      Super Built-Up Area
                    </div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="flex">
                  <span className="mr-1 mt-1 text-gray-800">
                    <GiStairs style={{ fontSize: 34 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Floor</div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="flex">
                  <span className="mr-1 mt-1 text-gray-800">
                    <FaHouseChimney style={{ fontSize: 32 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">
                      Transaction Type
                    </div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="flex">
                  <span className="mr-2 mt-1 text-gray-800">
                    <FaChartSimple style={{ fontSize: 32 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Status</div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="flex">
                  <span className="mr-2 mt-1 text-gray-800">
                    <FaFax style={{ fontSize: 30 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Facing</div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="flex">
                  <span className="mr-2 mt-1 text-gray-800">
                    <FaCouch style={{ fontSize: 32 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Furnished Area</div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="flex">
                  <span className="mr-2 mt-1 text-gray-800">
                    <FaCar style={{ fontSize: 30 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Car Parking</div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="flex">
                  <span className="mr-2 mt-1 text-gray-800">
                    <FaUser style={{ fontSize: 30 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">
                      Type of Ownership
                    </div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="flex">
                  <span className="mr-2 mt-1 text-gray-800">
                    <FaBuildingColumns style={{ fontSize: 30 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">
                      Age of Construction
                    </div>
                    <div className="text-sm">text</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-500 border-b-1 mt-4 md:mt-6"></div>

        <div id="cardFooter" className="flex justify-between pt-4">
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

          <div className="text-sm py-2">
            <div className="flex">
              <span className="pt-1 mr-1">
                <FaRegUser />
              </span>
              Last contact mode 1 day ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
