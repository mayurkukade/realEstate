import { Navbar, Button, Input } from "@material-tailwind/react";
import { FaMagnifyingGlass, FaArrowDownWideShort } from "react-icons/fa6";

export function FavoritePageNavbar() {
  return (
    <div>
      <Navbar
        variant="gradient"
        color="blue-gray"
        className="mx-auto max-w-screen-3xl rounded-none from-blue-700 p-3"
      >
        <div className="md:ml-40 flex flex-wrap items-center justify-between text-white">
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="white"
              label="Find your location"
              className=""
              containerProps={{
                className: "md:min-w-[388px]",
              }}
            />
            <Button
              size="sm"
              color="white"
              className="!absolute right-1 top-1 bottom-1 rounded"
            >
              <FaMagnifyingGlass style={{ fontSize: 16 }} />
            </Button>
          </div>
        </div>
      </Navbar>

      <div class="md:ml-60 flex flex-row items-center justify-between  md:flex-row mx-auto max-w-screen-xl pt-2 px-1">
        <div class="block  overflow-hidden md:w-max">
          <nav>
            <ul
              role="tablist"
              class="relative flex flex-row p-1 rounded-lg bg-blue-gray-200 bg-opacity-60"
            >
              <li
                role="tab"
                class="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-xs md:text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900"
                data-value="monitored"
              >
                <div class="z-20 text-inherit">
                  &nbsp;&nbsp;Properties&nbsp;&nbsp;
                </div>
              </li>
              <li
                role="tab"
                class="relative flex items-center justify-center min-w-fit h-full px-2 py-1 font-sans text-xs md:text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900"
                data-value="all"
              >
                <div class="z-20 text-inherit">
                  &nbsp;&nbsp;Favorite Property&nbsp;&nbsp;
                </div>
                <div class="absolute inset-0 z-10 h-full bg-white rounded-md shadow"></div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
