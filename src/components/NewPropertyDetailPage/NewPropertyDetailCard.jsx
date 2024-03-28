import { React, useState } from "react";

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
                <div>
                  <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                    crossorigin="anonymous"
                    referrerpolicy="no-referrer"
                  />
                </div>
                <div className="">
                  <i class="fa-solid fa-ellipsis-vertical hover:cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>

          <div id="line2" className="text-start">
            2BHK Flat for Sale in Royal Rahadki Green Phase-1, Pune
          </div>
        </div>

        <div id="cardBody" className="flex  ">
          <div id="images" className="py-4  border-cyan-600">
            <div className="w-80 h-auto overflow-hidden rounded-lg bg-clip-padding ">
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

          <div id="information" className="pl-6 mt-4 text-sm  ">
            <div
              id="iconInformation"
              className="flex gap-6 p-3 bg-gray-200 rounded-lg w-fit"
            >
              <div className="">
                <i class="fa-solid fa-bed fa-lg p-1"></i>1 Bed
              </div>
              <div>
                <i class="fa-solid fa-bath fa-lg p-1"></i>1 Bath
              </div>
              <div>
                <i class="fa-solid fa-hotel fa-lg p-1"></i>2 Balconies
              </div>
              <div>
                <i class="fa-solid fa-car fa-lg p-1"></i>1 Covered Parking
              </div>
            </div>

            <div
              id="table"
              className="w-[550px] h-[200px] mt-8 text-start  border-cyan-600"
            >
              <div id="row1" className="flex py-2 px-1 justify-start">
                <div className="w-1/3 flex">
                  <div>
                    <i class="fa-regular fa-building fa-2x mr-2 pt-1 text-gray-800"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">
                      Super Built-Up Area
                    </div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="w-1/3 flex">
                  <div>
                    <i class="fa-solid fa-stairs fa-2x mr-2 pt-1 text-gray-800"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Floor</div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="w-1/3 flex">
                  <div>
                    <i class="fa-solid fa-house-chimney fa-2x mr-2 pt-1 text-gray-800"></i>
                  </div>
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
                  <div>
                    <i class="fa-solid fa-chart-simple fa-2x mr-2 pt-1 text-gray-800"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Status</div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="w-1/3 flex">
                  <div>
                    <i class="fa-solid fa-fax fa-2x mr-2 pt-1 text-gray-800"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Facing</div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="w-1/3 flex">
                  <div>
                    <i class="fa-solid fa-couch fa-2x mr-2 pt-1 text-gray-800"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Furnished Area</div>
                    <div className="text-sm">text</div>
                  </div>
                </div>
              </div>

              <div id="row3" className="flex py-2 px-1 justify-start">
                <div className="w-1/3 flex">
                  <div>
                    <i class="fa-solid fa-car fa-2x mr-2 pt-1 text-gray-800"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Car Parking</div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="w-1/3 flex">
                  <div>
                    <i class="fa-solid fa-user fa-2x mr-2 pt-1 text-gray-800"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">
                      Type of Ownership
                    </div>
                    <div className="text-sm">text</div>
                  </div>
                </div>

                <div className="w-1/3 flex">
                  <div>
                    <i class="fa-solid fa-building-columns fa-2x mr-2 pt-1 text-gray-800"></i>
                  </div>
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

        <div className="border border-gray-500 border-b-1 mt-6"></div>

        <div id="cardFooter" className="flex justify-between pt-4">
          <div className="text-start">
            <button className="text-sm text-white px-3 py-2 rounded-full bg-green-700">
              Contact Owner
              <i class="fa-solid fa-square-phone fa-lg pl-1"></i>
            </button>
          </div>

          <div className="text-sm py-2">
            <i class="fa-regular fa-user pr-2"></i>
            Last contact mode 1 day ago
          </div>
        </div>
      </div>
    </div>
  );
}
