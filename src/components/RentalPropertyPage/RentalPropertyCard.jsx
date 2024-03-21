import React from "react";

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
    <div className="grid place-content-center my-4">
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </div>

      <div
        id="cardBody"
        className=" text-gray-800 w-[1024px] border border-cyan-100 rounded-lg shadow-xl"
      >
        <div className="flex">
          <div id="col1" className="w-[330px] p-4 border-cyan-600">
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
              <div className="text-start pt-12">{location}</div>
            </div>
          </div>

          <div id="col2" className="pl-6">
            <div className="flex pb-6 pt-8">
              <div id="heading" className="font-semibold text-lg">
                {title}
              </div>

              <div id="icons" className="justify-end items-center pl-8">
                <i class="fa-regular fa-heart mr-3 hover:cursor-pointer"></i>
                <i class="fa-solid fa-share mr-3 hover:cursor-pointer"></i>
                <i class="fa-solid fa-ellipsis-vertical hover:cursor-pointer"></i>
              </div>
            </div>

            <div
              id="icon"
              className="w-[550px] h-[100px] flex justify-evenly border-cyan-600"
            >
              <div id="column1" className="py-2 px-1 justify-evenly space-y-4">
                <div className="flex">
                  <i class="fa-solid fa-couch fa-2x mr-3"></i>
                  <div>
                    <div className="text-sm font-semibold">Furnishing</div>
                    <div className="text-xs">{furnishing}</div>
                  </div>
                </div>

                <div className="flex">
                  <i class="fa-solid fa-chart-area fa-2x mr-3"></i>
                  <div>
                    <div className="text-sm font-semibold">Carpet Area</div>
                    <div className="text-xs">{carpetArea}</div>
                  </div>
                </div>
              </div>

              <div id="column2" className="p-2 justify-evenly space-y-4">
                <div className="flex">
                  <i class="fa-solid fa-bath fa-2x mr-3"></i>
                  <div>
                    <div className="text-sm font-semibold">Bathroom</div>
                    <div className="text-xs">{bathroom}</div>
                  </div>
                </div>

                <div className="flex">
                  <i class="fa-solid fa-stairs fa-2x mr-3"></i>
                  <div>
                    <div className="text-sm font-semibold">Floor</div>
                    <div className="text-xs">{floor}</div>
                  </div>
                </div>
              </div>

              <div id="column3" className="p-2 justify-evenly space-y-4">
                <div className="flex">
                  <i class="fa-solid fa-car fa-2x mr-3"></i>
                  <div>
                    <div className="text-sm font-semibold">Parking</div>
                    <div className="text-xs">{parking}</div>
                  </div>
                </div>

                <div className="flex">
                  <i class="fa-solid fa-user-shield fa-2x mr-3"></i>
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
