import React, { useEffect } from 'react';
import CookiePolicybg from '../assets/CookiePolicybg.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function CookiePolicy() {
  
  return (
  <div className="mx-auto">
    <div className=" relative max-h-[350px]  overflow-hidden flex justify-center items-center h-[250px]">
          <img
            src={CookiePolicybg}
            alt="Cookie Policy"
            className="w-full h-full absolute object-cover  align-middle overflow-clip "
          />
          <div className="relative">
            <h1 className="text-[#fff] text-6xl font-[Lato] font-bold text-center ">
              Cookie Policy
            </h1>
          </div>
        </div>
        
    <div className="flex flex-col md:flex-row gap-4 mt-8">
      {/* left section */}
      <div className=" w-full md:w-1/2 flex flex-col gap-4">
        <div className="shadow-lg rounded-xl p-4 shadow-indigo-700/70">
        <p className="text-3xl font-bold font-[Lato] ">Introduction</p>
                  <p className="mt-8 text-lg font-serif">RealEstate is committed to protecting your privacy. We aim to provide trustworthy, industry-leading products and services so that you can focus on building meaningful connections. Our approach to privacy is to provide you with clear information about our data practices. That’s why we have tried to keep legal and technical jargon to a minimum.</p>
                  <p className="mt-4 text-lg font-serif">This Cookie Policy explains what cookies are, what types of cookies are placed on your device when you visit our website and how we use them.</p>
                  <p className="mt-4 text-lg font-serif">This Cookie Policy does not address how we deal with your personal information generally.</p>  
        </div>
        <div className="shadow-lg rounded-xl md:mt-52 p-4 shadow-indigo-700/70" data-aos="fade-right" data-aos-duration="1500">
        <p className="text-3xl font-bold font-[Lato]  ">Are there different types of cookies?</p>
                  <p className="mt-8 text-xl font-serif"><b>First-party and third-party cookies</b></p>
                  <p className="mt-2 text-lg font-serif">There are first-party cookies and third-party cookies. First-party cookies are placed on your device directly by us. For example, we use first-party cookies to adapt our website to your browser’s language preferences and to better understand your use of our website. Third-party cookies are placed on your device by our partners and service providers. For example, we use third-party cookies to measure user numbers on our website or to enable you to share content with others across social media platforms.</p>
                  <p className="mt-8 text-xl font-serif"><b>Session and persistent cookies</b></p>
                  <p className="mt-2 text-lg font-serif">There are session cookies and persistent cookies. Session cookies only last until you close your browser. We use session cookies for a variety of reasons, including to learn more about your use of our website during one single browser session and to help you to use our website more efficiently. Persistent cookies have a longer lifespan and are not automatically deleted when you close your browser. These types of cookies are primarily used to help you quickly sign-in to our website again and for analytical purposes.</p>
        </div>
        <div className="shadow-lg rounded-xl p-4 md:mt-[1110px] shadow-indigo-700/70" data-aos="fade-right" data-aos-duration="1500">
        <p className="text-3xl font-bold font-[Lato]  ">How can you control cookies?</p>
  
  <p className="mt-8 text-lg font-serif">There are several cookie management options available to you. Please note that changes you make to your cookie preferences may make browsing our website a less satisfying experience. In some cases, you may even find yourself unable to use all or part of our site.</p>
  <p className="mt-8 text-xl font-serif"><b>Browser and devices controls</b></p>
  <p className="mt-2 text-lg font-serif">Some web browsers provide settings that allow you to control or reject cookies or to alert you when a cookie is placed on your computer. The procedure for managing cookies is slightly different for each internet browser. You can check the specific steps in your particular browser help menu.</p>
  <p className="mt-4 text-lg font-serif">You also may be able to reset device identifiers by activating the appropriate setting on your mobile device. The procedure for managing device identifiers is slightly different for each device. You can check the specific steps in the help or settings menu of your particular device.</p>
  <p className="mt-8 text-xl font-serif"><b>Interest-based advertising tools</b></p>
  <p className="mt-2 text-lg font-serif">You can opt out of seeing online interest-based advertising from participating companies through the Digital Advertising Alliance, the Interactive Digital Advertising Alliance or Appchoices (apps only).</p>
  <p className="mt-4 text-lg font-serif">Opting out does not mean you will not see advertising - it means you won’t see personalized advertising from the companies that participate in the opt-out programs. Also, if you delete cookies on your device after you opted out, you will need to opt-out again.</p>
        </div>
        <div className="shadow-lg rounded-xl p-4 md:mt-[260px]  shadow-indigo-700/70" data-aos="fade-right" data-aos-duration="1500">
        <p className="text-3xl font-bold font-[Lato] ">Adobe Flash Player™ Flash cookies</p>
  
  <p className="mt-6 text-lg font-serif">Adobe Flash Player™ is an application for viewing and interacting with dynamic content using the Flash platform. Flash (and similar applications) use a technology akin to cookies to memorize parameters, preferences and uses of this content. However, Adobe Flash Player manages this information and your choices via an interface separate from that supplied by your browser.</p>
  <p className="mt-4 text-lg font-serif">If your terminal is likely to display content developed using the Flash platform, we suggest you access your Flash cookie management tools directly via https://www.adobe.com.</p>
  <p className="mt-4 text-lg font-serif"><b>Google™ Cookies</b></p>
  <p className="mt-4 text-lg font-serif"><b>Stuff Google Wants to Make Sure You Know about Google’s Data Collection Technology</b></p>
  <p className="mt-4 text-lg font-serif"><b>Google™ Maps API Cookies</b></p>
  <p className="mt-4 text-lg font-serif">Some features of our website and some RealEstate services rely on the use of Google™ Maps API Cookies. Such cookies will be stored on your device.</p>
  <p className="mt-4 text-lg font-serif">When browsing this website and using the services relying on Google™ Maps API cookies, you consent to the storage, collection of such cookies on your device and to the access, usage and sharing by Google of the data collected thereby.</p>
  <p className="mt-4 text-lg font-serif">Google™ manages the information and your choices pertaining to Google™ Maps API Cookies via an interface separate from that supplied by your browser. For more information, please see https://www.google.com/policies/technologies/cookies/.</p>
  <p className="mt-4 text-lg font-serif"><b>Google Analytics</b></p>
  <p className="mt-4 text-lg font-serif">We use Google Analytics, which is a Google service that uses cookies and other data collection technologies to collect information about your use of the website and services in order to report website trends.</p>
  <p className="mt-4 text-lg font-serif">You can opt out of Google Analytics by visiting www.google.com/settings/ads or by downloading the Google Analytics opt-out browser add-on at https://tools.google.com/dlpage/gaoptout.</p>
                   
        </div>
        
      </div>

      {/* right section */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <div className="shadow-lg p-4 rounded-xl md:mt-[325px] shadow-indigo-700/70" data-aos="fade-left" data-aos-duration="1500">
        <p className="text-3xl font-bold font-[Lato] ">What are cookies?</p>
                  <p className="mt-6 text-lg font-serif">Cookies are small text files that are sent to or accessed from your web browser or your device’s memory. A cookie typically contains the name of the domain (internet location) from which the cookie originated, the “lifetime” of the cookie (i.e., when it expires) and a randomly generated unique number or similar identifier. A cookie also may contain information about your device, such as user settings, browsing history and activities conducted while using our services.</p>
        </div>
        <div className="shadow-lg rounded-xl p-4 md:mt-[520px] border-2 shadow-indigo-700/70" data-aos="fade-left" data-aos-duration="1500">
        <p className="text-3xl font-bold font-[Lato] ">What about other tracking technologies, like web beacons?</p>
                  <p className="mt-8 text-lg font-serif">Other technologies such as web beacons (also called pixel tags or clear gifs), tracking URLs or software development kits (SDKs) are used for similar purposes. Web beacons are tiny graphics files that contain a unique identifier that enable us to recognise when someone has visited our service or opened an email that we have sent them. Tracking URLs are custom generated links that help us understand where the traffic to our web pages comes from. SDKs are small pieces of code included in apps, which function like cookies and web beacons.</p>
                  <p className="mt-4 text-lg font-serif">For simplicity, we also refer to these technologies as “cookies” in this Cookie Policy.</p>
                  <p className="mt-4 text-xl font-bold font-serif">What do we use cookies for?</p>
                  <p className="mt-2 text-lg font-serif">Like all providers of online services, we use cookies to provide, secure and improve our services, including by remembering your preferences, recognizing you when you visit our website and personalizing and tailoring ads to your interests. To accomplish these purposes, we also may link information from cookies with other personal information we hold about you.</p>
                  <p className="mt-4 text-lg font-serif">When you visit our website, some or all of the following types of cookies may be set on your device.</p>
  
                  <p className="flex text-lg mt-8 mb-3 font-serif"><b>Essential website cookies: </b><span> These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.</span></p>
                  <hr />
                  <p className="mt-8 text-lg mb-3 font-serif"><b>Analytics cookies: </b> These cookies help us understand how our website is being used, how effective marketing campaigns are, and help us customize and improve our websites for you.</p>
                  <hr />
                  <p className="flex text-lg mt-8 mb-3 font-serif"><b>Advertising cookies: </b> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers,selecting advertisements that are based on your interests and measuring the number of ads displayed and their performance, such as how many people clicked on a given ad.</p>
                  <hr />
                  <p className="flex text-lg mt-8 mb-3 font-serif"><b>Social networking cookies: </b> These cookies are used to enable you to share pages and content that you find interesting on our website through third-party social networking and other websites. These cookies may also be used for advertising purposes too.</p>
                  <hr />
        </div>
        <div className="shadow-lg rounded-xl p-4 md:mt-[670px] shadow-indigo-700/70" data-aos="fade-left" data-aos-duration="1500">
        
        <p className="text-3xl font-bold font-[Lato]">Social Cookies</p>
                  <p className="mt-6 text-lg font-serif">To allow you to share content on social media, some features of this website use social media plug-ins (e.g., Twitter™ “Share to Twitter” or LinkedIn™ “in” buttons or Facebook). Depending on your social media account settings, we automatically receive information from the social media platform when you use the corresponding button on our website.</p>
                  <p className="mt-4 text-lg font-serif">To learn more about social media cookies, we suggest you refer to your social media platform’s cookie policy and privacy policy.</p>   
        </div>
        <div className="shadow-lg rounded-xl md:mt-[880px] p-4 mb-10 shadow-indigo-700/70" data-aos="fade-left" data-aos-duration="1500">
        <p className="text-3xl font-bold font-[Lato]">How to contact us?</p>
  
  <p className="mt-6 text-lg font-serif">If you have questions about this Cookie Policy, here’s how you can reach us:</p>
  <p className="mt-6 text-lg font-serif">Online: contact@RealEstate.me</p>
  <p className="mt-6 text-lg font-serif">By phone:</p>
  <p className="mt-6 text-lg font-serif">By post: RealEstate Pvt. Ltd. 1128, 3rd floor, Rd Number 36, Jubilee Square, Jubilee Hills, Pune, Maharashtra 500033</p>
        </div>
        
      </div>
    </div>
    
  </div>
  );
}

export default CookiePolicy;