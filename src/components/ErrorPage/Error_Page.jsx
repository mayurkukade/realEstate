import React from "react";

export function Error_Page() {
  return (
    <div>
      <div class="bg-gray-100 h-screen flex flex-col justify-center items-center">
        <div class="max-w-lg text-center">
          <h1 class="font-[poppins] text-9xl font-bold text-gray-800">404</h1>
          <p class="font-[poppins] text-2xl text-gray-600 mb-4">
            Page Not Found
          </p>
          <p class="font-[lato] text-lg text-gray-700">
            Oops! The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>

          <div class="font-[poppins] mt-4 inline-block px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300">
            <i class="fa-solid fa-house pr-2"></i>
            <a href="/">Home</a>
          </div>

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}

export default Error_Page;
