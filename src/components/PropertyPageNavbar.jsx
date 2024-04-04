import { Navbar, Button, Input } from "@material-tailwind/react";
import { FaMagnifyingGlass, FaArrowDownWideShort } from "react-icons/fa6";

export function PropertyPageNavbar() {
  return (
    <div>
      

      <Navbar
        variant="gradient"
        color="blue-gray"
        className="mx-auto max-w-screen-3xl rounded-none from-blue-700  py-3"
      >
        <div className="ml-40 flex flex-wrap items-center justify-between gap-y-4 text-white">
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="white"
              label="Find your location"
              className="pr-20"
              containerProps={{
                className: "min-w-[388px]",
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

      <div class="flex flex-col items-center justify-between gap-4 md:flex-row mx-auto max-w-screen-xl pt-2">
        <div class="block w-full overflow-hidden md:w-max">
          <nav>
            <ul
              role="tablist"
              class="relative flex flex-row p-1 rounded-lg bg-blue-gray-50 bg-opacity-60"
            >
              <li
                role="tab"
                class="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900"
                data-value="all"
              >
                <div class="z-20 text-inherit">
                  &nbsp;&nbsp;Properties(13,197)&nbsp;&nbsp;
                </div>
                <div class="absolute inset-0 z-10 h-full bg-white rounded-md shadow"></div>
              </li>
              <li
                role="tab"
                class="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900"
                data-value="monitored"
              >
                <div class="z-20 text-inherit">
                  &nbsp;&nbsp;Top Agents&nbsp;&nbsp;
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <button
          class="flex select-none items-center gap-2 rounded-lg bg-gray-200 py-2 px-4 text-center align-middle font-sans text-xs font-bold text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <FaArrowDownWideShort style={{ fontSize: 16 }} />
          Sort by: Relevance
        </button>
      </div>
    </div>
  );
}
