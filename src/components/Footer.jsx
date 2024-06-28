
import { Typography, } from "@material-tailwind/react";
 

 
export function Footer() {
  const expandContent = () => {
    // Your expandContent function logic here
};

const openUrlInNewTab = (link) => {
    // Your openUrlInNewTab function logic here
};
  return (
    <footer className="relative w-full h-full md:w-full">
      <div>
        <div className="bg-gray-100">
        <div className="flex bg-slate-500">
            {/* Left Section */}
            <div className="mb-footer__main__left w-3/5 pr-24 ml-8 mb-8 mt-8">
                <div className="mb-footer__main__title text-xl font-semibold text-gray-800 mb-4">About Real Estate</div>
                <div className="mb-footer__main__content text-base text-gray-800 mb-20">
                    <span className="mb-footer__main__content__txt">
                      Real Estate is a full stack service provider for all real estate needs...
                    </span>
                    <span className="mb-footer__main__content__toggle text-base text-gray-800 cursor-pointer underline ml-2" onClick={expandContent}>Read more</span>
                </div>
                <div className="mb-footer__main__title text-xl font-semibold text-gray-800 mb-4">More from our Network</div>
                <ul className="mb-footer__partnerslist flex flex-wrap ">
                    <li className="mb-footer__partnerslist__val  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 pr-4">
                        <span data-link="" className="mb-footer__partnerslist__val__link text-gray-800"  rel="nofollow noreferrer noopener">MensXp</span>
                    </li>
                    <li className="mb-footer__partnerslist__val  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 pr-4">
                        <span data-link="" className="mb-footer__partnerslist__val__link text-gray-800"  rel="nofollow noreferrer noopener">iDiva</span>
                    </li>
                    <li className="mb-footer__partnerslist__val  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 pr-4">
                        <span data-link="" className="mb-footer__partnerslist__val__link text-gray-800"  rel="nofollow noreferrer noopener">Gadget Now</span>
                    </li>
                    <li className="mb-footer__partnerslist__val  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 pr-4">
                        <span data-link="" className="mb-footer__partnerslist__val__link text-gray-800"  rel="nofollow noreferrer noopener">Economic Times</span>
                    </li>
                    <li className="mb-footer__partnerslist__val  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 pr-4">
                        <span data-link="" className="mb-footer__partnerslist__val__link text-gray-800"  rel="nofollow noreferrer noopener">Filmfare</span>
                    </li>
                    <li className="mb-footer__partnerslist__val  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 pr-4">
                        <span data-link="" className="mb-footer__partnerslist__val__link text-gray-800"  rel="nofollow noreferrer noopener">Times of India</span>
                    </li>
                    <li className="mb-footer__partnerslist__val  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 pr-4">
                        <span data-link="" className="mb-footer__partnerslist__val__link text-gray-800" rel="nofollow noreferrer noopener">USA Today</span>
                    </li>
                    <li className="mb-footer__partnerslist__val  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 pr-4">
                        <span data-link="" className="mb-footer__partnerslist__val__link text-gray-800"  rel="nofollow noreferrer noopener">New York Post</span>
                    </li>
                    <li className="mb-footer__partnerslist__val  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 pr-4">
                        <span data-link="" className="mb-footer__partnerslist__val__link text-gray-800"  rel="nofollow noreferrer noopener">Chicago Tribune</span>
                    </li>

                    
                </ul>
            </div>
            {/* Right Section */}
            <div className="mb-footer__main__right w-2/5 mb-8 mr-4 mt-8">
                <div className="mb-footer__main__title text-xl font-semibold text-gray-800 mb-4">Properties in India</div>
                <div className="mb-footer__main__right__content-1 mb-6">
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2 text-gray-800" >Property in Mumbai</a>
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2 pl-2 text-gray-800" >Property in Pune</a>
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2 pl-2 text-gray-800" >Property in Delhi</a>
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2 pl-2 text-gray-800" >Property in New Mumbai</a>
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2 pl-2 text-gray-800" >Property in Chennai</a>
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2 pl-2 text-gray-800" >Property in Bengaluru</a>
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2 pl-2 text-gray-800" >Property in Thane</a>
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2 pl-2 text-gray-800" >Property in Kalyan</a>
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2 pl-2 text-gray-800" >Property in Nagar</a>

                    
                </div>
                <div className="mb-footer__main__title text-xl font-semibold text-gray-800 mb-4">New Projects in India</div>
                <div className="mb-footer__main__right__content-2 text-gray-800">
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2" >New Projects in Mumbai</a>
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2 pl-2" >New Projects in Pune</a>
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2 pl-2" >New Projects in Delhi</a>
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2 pl-2" >New Projects in New Mumbai</a>
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2 pl-2" >New Projects in Chennai</a>
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2 pl-2" >New Projects in Bengaluru</a>
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2 pl-2" >New Projects in Thane</a>
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2 pl-2" >New Projects in Kalyan</a>
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2 pl-2" >New Projects in Nagar</a>
                    <a href="#" className="mb-footer__main__right__link border-r border-black pr-2 pl-2" >New Projects in Ahmadabad</a>
                    
                </div>
            </div>
        </div>
        </div>
        
        
        
        <div className="bg-indigo-700 w-full h-auto md:h-20 sm:h-20  flex flex-col md:flex-row  items-center justify-between">
          <div className="flex gap-6 md:gap-8 justify-start md:ml-16">
            <Typography as="a" href="#" className=" transition-opacity hover:opacity-100">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </Typography> 
            <Typography as="a" href="#" className=" transition-opacity hover:opacity-100">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            </Typography>
            <Typography as="a" href="#" className=" transition-opacity hover:opacity-100">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
            </Typography>
            <Typography as="a" href="#" className=" transition-opacity hover:opacity-100">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
            </Typography>
            <Typography as="a" href="#" className=" transition-opacity hover:opacity-100">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            </Typography>
            <Typography as="a" href="#" className=" transition-opacity hover:opacity-100">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
            </Typography>
          </div>
          <div className="flex gap-6 md:gap-8 justify-end md:mr-16">
            <Typography variant="h6" color="white">Advertise with us</Typography>
            <Typography variant="h6" color="white">Contact us</Typography>
            <Typography variant="h6" color="white">Privacy Policy</Typography>
            <Typography variant="h6" color="white">Careers</Typography>
            <Typography variant="h6" color="white">Help Center</Typography>
          </div>
        </div>
        
        
        <div className="w-full h-10 bg-gray-700 text-white text-sm text-left p-2 sm:h-12 md:h-10">All trademarks, logos and names are properties of their respective owners. All Rights Reserved. &copy; Copyright 2024 Real Estate Realty Services Limited.
        </div>
      </div>
    </footer>
  );
}


export default Footer;