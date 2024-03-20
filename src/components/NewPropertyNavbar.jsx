import { Navbar, Button, Input } from "@material-tailwind/react";

export function NewPropertyNavbar() {
  return (
    <div className="mt-8">
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </div>

      

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
          <i class="fa-solid fa-arrow-down-wide-short fa-lg"></i>
          Sort by: Relevance
        </button>
      </div>

      <div id="heading" className="text-3xl font-semibold ml-64 mt-4 text-gray-800">
        New Properties for Sale in Pune
      </div>
    </div>
  );
}
