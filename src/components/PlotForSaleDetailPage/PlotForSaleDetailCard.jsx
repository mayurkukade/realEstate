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
  FaToriiGate,
  FaRegCalendarCheck,
  FaClone,
  FaMaximize,
  FaTrowelBricks,
  FaBorderAll,
} from "react-icons/fa6";
import { GiStairs } from "react-icons/gi";
import { MdBalcony } from "react-icons/md";

import PlotForSaleImage1 from "../../assets/images/PlotForSaleImage1.jpeg";
import PlotForSaleImage2 from "../../assets/images/PlotForSaleImage1.jpeg";
import PlotForSaleImage3 from "../../assets/images/PlotForSaleImage3.jpeg";
import PlotForSaleImage4 from "../../assets/images/PlotForSaleImage1.jpeg";

export function PlotForSaleDetailCard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const imageSources = [PlotForSaleImage2, PlotForSaleImage3];

  return (
    <div className="grid place-content-center">
      <div
        id="cardHeading"
        className="font-[lato] m-4 p-6 w-[1100px] border border-cyan-100 rounded-lg shadow-xl  text-lg"
      >
        <div id="heading" className="font-[poppins] pt-2">
          <div id="line1" className="flex my-1">
            <div>₹ 90.0 Lac</div>
            <div className="px-4">EMI- ₹ 41k</div>
            <span className="leading-5 text-lg pt-1">|</span>

            <div className=" flex justify-evenly">
              <div className="px-4">How much loan can I get?</div>

              <div id="icon" className="pl- ml-[540px] text-lg">
                <div className="">
                  <span className="hover:cursor-pointer">
                    <FaEllipsisVertical />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div id="line2" className="text-start">
            Plot for Sale in Royal Rahadki Green Phase-1, Pune
          </div>
        </div>

        <div id="cardBody" className="flex  ">
          <div id="images" className="py-4  border-cyan-600">
            <div className="w-80 h-auto overflow-hidden rounded-lg bg-clip-padding ">
              <div className="w-full h-44 rounded-t-lg rounded-b-none bg-clip-padding">
                <img
                  onClick={() => openModal(PlotForSaleImage1)}
                  className="w-full h-full object-cover hover:cursor-pointer"
                  src={PlotForSaleImage1}
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
                  onClick={() => openModal(PlotForSaleImage4)}
                  className="w-1/3 object-cover hover:cursor-pointer h-20 relative list-none m-0 p-0 overflow-hidden"
                  src={PlotForSaleImage4}
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

          <div id="information" className="pl-6 mt-4 text-sm  ">
            <div
              id="iconInformation"
              className="flex gap-6 p-3 bg-gray-200 rounded-lg w-fit"
            >
              <div className="flex">
                <span className="pr-1">
                  <FaToriiGate style={{ fontSize: 18 }} />
                </span>
                Gated Colony
              </div>
              <div className="flex">
                <span className="pr-1">
                  <FaRegCalendarCheck style={{ fontSize: 18 }} />
                </span>
                PMRDA Approved
              </div>
              <div className="flex">
                <span className="pr-1">
                  <FaClone style={{ fontSize: 16 }} />
                </span>
                Corner Plot
              </div>
            </div>

            <div
              id="table"
              className="w-[550px] h-[200px] mt-8 text-start  border-cyan-600"
            >
              <div id="row1" className="flex py-2 px-1 justify-start">
                <div className="w-1/3 flex">
                  <span className="mr-1 mt-1 text-gray-800">
                    <FaRegBuilding style={{ fontSize: 32 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Plot Area</div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="w-1/3 flex">
                  <span className="mr-1 mt-1 text-gray-800">
                    <FaMaximize style={{ fontSize: 30 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Dimension (LxB)</div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="w-1/3 flex">
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
              </div>

              <div id="row2" className="flex py-2 px-1 justify-start">
                <div className="w-1/3 flex">
                  <span className="mr-2 mt-1 text-gray-800">
                    <FaChartSimple style={{ fontSize: 32 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Status</div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="w-1/3 flex">
                  <span className="mr-2 mt-1 text-gray-800">
                    <FaFax style={{ fontSize: 30 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Facing</div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="w-1/3 flex">
                  <span className="mr-2 mt-1 text-gray-800">
                    <FaTrowelBricks style={{ fontSize: 28 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">
                      Any Construction
                    </div>
                    <div className="text-sm">text</div>
                  </div>
                </div>
              </div>

              <div id="row3" className="flex py-2 px-1 justify-start">
                <div className="w-1/3 flex">
                  <span className="mr-2 mt-1 text-gray-800">
                    <FaCar style={{ fontSize: 30 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Overlooking</div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="w-1/3 flex">
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

                <div className="w-1/3 flex">
                  <span className="mr-2 mt-1 text-gray-800">
                    <FaBorderAll style={{ fontSize: 30 }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Boundry Wall</div>
                    <div className="text-sm">text</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-500 border-b-1 mt-6"></div>

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
