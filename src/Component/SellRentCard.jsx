import { React, useState } from "react";
import whatsapp from "../assets/images/whatsapp.jpg";


function SellRentCard() {
  const [formValues, setFormValues] = useState({
    personal: "",
    Name: "",
    Email: "",
    Mobile: "",
    countryCode: null,
    property: "",
    propertyType: "",
    city: "",
    locality: "",
  });
  const [errors, setErrors] = useState({});
  

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formValues.Name.trim()) {
      validationErrors.Name = "Name is Required";
    }
    if (!formValues.Email.trim()) {
      validationErrors.Email = "Email is Required";
    } else if (!email_pattern.test(formValues.Email)) {
      validationErrors.Email = "Email is not valid";
    }
    if (formValues.Mobile.length !== 10) {
      validationErrors.Mobile = "Contact number must be 10 digits.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      console.error("form validation failed", validationErrors);
    } else {
      console.log("form Details: ", formValues);
    }
  };

  return (
    <form
      action="Property"
      method="Post"
      onSubmit={handleSubmit}
      className="m-0 p-0 border-0 font-normal items-baseline"
    >
      <div className="w-[412px] md:max-w-[600px] font-[cambria] m-auto md-w-[1200px] flex justify-center">
        <div className="md:w-[500px] m-0 py-0 ">
          <div className="pt-16 pb-8 px-0 box-border md:w-[500px] ">
            <span>
              <h1 className="text-3xl font-bold font-[serif] pb-2.5">
                Sell or Rent your Property
              </h1>
              <div className="md:w-[500px] font-[opensans]">
                You are posting this property for{" "}
                <span className="w-12 bg-[#fc3] inline-block text-center font-semibold border rounded-sm">
                  Free
                </span>
              </div>
            </span>
          </div>

          <div className="border-t-0 border-solid">
            <div className="pt-2.5 pb-5 ">
              <div className="text-lg pb-7 font-bold text-[#303030] ">
                Personal Details
              </div>
              <div id="formEle" className=" float-left w-[315px] pb-5">
                <div className="md:pr-8 pr-6 float-left leading-4 text-sm md:text-base text-[#606060]">
                  I am
                </div>
                <div className="float-left relative  text-sm md:text-base">
                  <div>
                    <ul className="font-normal list-none m-0 p-0">
                      <li className="ml-0 inline">
                        <span className="w-5 h-5 mr-[3px] inline-block cursor-pointer">
                          <input
                            type="radio"
                            name="personal"
                            value="Owner"
                            className="w-5 box-border opacity-80"
                            onChange={handleInput}
                            checked={formValues.personal === "Owner"}
                          />
                        </span>
                        <label
                          htmlFor="owner"
                          className="cursor-pointer font-[] relative text-[#303030]"
                        >
                          Owner
                        </label>
                      </li>
                      <li className="inline ml-5">
                        <span className="w-5 h-5 mr-[3px] inline-block cursor-pointer">
                          <input
                            type="radio"
                            name="personal"
                            value="Agent"
                            className="w-5 box-border opacity-80"
                            onChange={handleInput}
                            checked={formValues.personal === "Agent"}
                          />
                        </span>
                        <label
                          htmlFor="agent"
                          className="cursor-pointer relative text-[#303030]"
                        >
                          Agent
                        </label>
                      </li>
                      <li className="inline ml-5">
                        <span className="w-5 h-5 mr-[3px] inline-block cursor-pointer">
                          <input
                            type="radio"
                            name="personal"
                            value="Builder"
                            className="w-5 box-border opacity-80"
                            onChange={handleInput}
                            checked={formValues.personal === "Builder"}
                          />
                        </span>
                        <label
                          htmlFor="builder"
                          className="cursor-pointer relative text-[#303030]"
                        >
                          Builder
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  id="Name"
                  className="float-left w-[315px] pb-5 mt-4 text-[#303030] block"
                >
                  <div className="w-full text-sm md:text-base pb-1 pt-2">
                    Name
                  </div>
                  <div id="formvalue" className="relative text-sm md:text-base">
                    <span className="inline-block relative">
                      <input
                        name="Name"
                        placeholder="Enter Your Name"
                        value={formValues.Name}
                        type="text"
                        className="h-8 leading-8 w-[280px] md:w-[315px] cursor-text pr-2 bg-none border-solid  border-b-[2px]"
                        onChange={handleInput}
                      />

                      {errors.Name && (
                        <p style={{ color: "red" }}>{errors.Name}</p>
                      )}
                    </span>
                  </div>
                </div>

                <div id="mobile" className="block float-left w-[400px] pb-5">
                  <div className="w-full pb-2 text-sm md:text-base">Mobile</div>
                  <div className="flex items-center gap-4">
                    <select
                      name="countryCode"
                      onChange={handleInput}
                      value={formValues.countryCode}
                      className="bg-white border-b-2 pb-1 w-18 text-gray-400 hover:text-black text-sm md:text-base"
                    >
                      <option label="IND +91" value="+91">
                        +91
                      </option>
                      <option label="Uk +44" value="+44">
                        +44
                      </option>
                      <option label="USA +1" value="+1">
                        +1
                      </option>
                    </select>
                    <input
                      name="Mobile"
                      type="tel"
                      size="sm"
                      placeholder="Mobile Number"
                      className="md:text-base border-b-2 md:w-[225px] "
                      onChange={handleInput}
                    />
                  </div>

                  {errors.Mobile && (
                    <p style={{ color: "red" }}>{errors.Mobile}</p>
                  )}

                  <div
                    id="wrapper"
                    className="w-[302px] md:w-[350px] h-[72px] py-3 px-4 border mt-5 rounded-lg border-solid border-[#ffde82] bg-[#fffcf2]"
                  >
                    <div className="text-sm font-semibold">
                      Enter your{" "}
                      <span className="w-6 h-6 inline-block align-middle mx-1 ">
                        <img src={whatsapp} alt="#" />
                      </span>
                      WhatsApp No. to get enquiries from Buyer / Tenant
                    </div>
                  </div>
                </div>

                <div id="Email" className="block float-left w-[315px] pb-5">
                  <div className="w-full text-sm md:text-base pb-1 pt-2">
                    Email
                  </div>
                  <div className="relative float-left text-sm md:text-base">
                    <span className="inline-block relative">
                      <input
                        name="Email"
                        type="email"
                        value={formValues.Email}
                        placeholder="Enter Your Email"
                        className="border-b-2 w-[280px] md:w-[315px] overflow-hidden leading-8 h-8 pr-2 cursor-text"
                        onChange={handleInput}
                      />
                      {errors.Email && (
                        <p style={{ color: "red" }}>{errors.Email}</p>
                      )}
                    </span>
                  </div>
                </div>

                <div id="property" className="pt-2 pb-4">
                  <div className="text-lg  pb-5 font-bold text-[#303030]">
                    Property Details{" "}
                  </div>
                  <div className="w-[360px] float-left pb-5 text-[#303030]">
                    <div className="pr-6 md:pr-8 text-sm md:text-base float-left leading-4 text-[#606060]">
                      For
                    </div>
                    <div id="formval" className="relative float-left text-sm">
                      <div classname="">
                        <ul className="m-0 p-0 font-normal">
                          <li className="ml-0 inline float-left list-none">
                            <span className="w-5 h-5 mr-[3px] inline-block cursor-pointer align-[1px]">
                              <input
                                name="property"
                                type="radio"
                                value="Sale"
                                className="h-5 md:h-6 w-4"
                                onChange={handleInput}
                                checked={formValues.property === "Sale"}
                              />
                            </span>
                            <label className="relative left-[1px] text-sm md:text-base top-[-5px]">
                              Sale
                            </label>
                          </li>
                          <li className="inline ml-5 md:ml-8 float-left">
                            <span className="w-5 h-5 mr-[3px] inline-block cursor-pointer align-[1px]">
                              <input
                                name="property"
                                value="Rent/Lease"
                                type="radio"
                                className="h-5 md:h-6 w-4"
                                onChange={handleInput}
                                checked={formValues.property === "Rent/Lease"}
                              />
                            </span>
                            <label className="relative left-[px] text-sm md:text-base top-[-5px]">
                              Rent / Lease
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="propType" className="float-left w-[315px] pb-5 ]">
                  <div className="w-full text-sm md:text-base pb-3">
                    Property Type
                  </div>
                  <div className="w-full md-w-full">
                    <select
                      name="propertyType"
                      placeholder="Property Type"
                      onChange={handleInput}
                      value={formValues.propertyType}
                      className="w-full p-2 bg-white border border-black"
                    >
                      <option value="-1">Select Property Type</option>
                      <optgroup label="All Residential"></optgroup>
                      <option value="flat/Apartment">Flat/Apartment</option>
                      <option value="Residential House">
                        Residential House
                      </option>
                      <option value="Villa">Villa</option>
                      <option value="Builder Floor Apartment">
                        Builder Floor Apartment
                      </option>
                      <option value="Penthouse">Penthouse</option>
                      <option value="Studio Apartment">Studio Apartment</option>
                    </select>
                  </div>
                </div>

                <div id="propLocation " className="float-left">
                  <div className="pt-[10px] pb-[15px] ">
                    <div className="pb-4 text-lg font-bold text-[#303030]">
                      Property Location
                    </div>
                    <div className="w-full text-sm md:text-base pb-2">City</div>
                    <div className="float-left text-sm md:text-base">
                      <span className="inline-block relative">
                        <input
                          type="text"
                          name="city"
                          value={formValues.city}
                          placeholder="Enter City"
                          className="h-8 leading-8 w-[280px] md:w-[315px] cursor-text border-0 border-b-[2px]"
                          onChange={handleInput}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="relative w-[315px] pb-5">
                    <div className="pr-6 pt-10 leading-4 text-sm md:text-base pb-2">
                      Locality
                    </div>
                    <div className="float-left text-sm md:text-base">
                      <span className="inline-block relative">
                        <input
                          type="text"
                          name="locality"
                          value={formValues.locality}
                          placeholder="Enter Locality"
                          className="h-8 leading-8 w-[280px] md:w-[315px] cursor-text border-0 border-b-[2px] "
                          onChange={handleInput}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div id="login" className="pt-14 float-left">
                  <div className="pt-3 text-sm md:text-base">
                    <ul>
                      <li className="w-[630px] ml-0">
                        <span className="mr-1 w-5 h-5 align-[2px]">
                          <input
                            type="checkbox"
                            name="exclusive"
                            id="exclusive"
                          />
                        </span>
                        <label className="relative left-[1px] md:ml-4 ml-2">
                          I am Posting this property 'exclusively' on
                          Magicbricks
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-3 text-sm md:text-base">
                    <ul>
                      <li className="w-[412px] md:w-[630px] ml-0">
                        <span className="mr-1 w-5 h-5 align-[2px]">
                          <input type="checkbox" id="agreeterms" />
                        </span>
                        <label
                          htmlFor="agreeTerms"
                          className="relative left-[1px] ml-2 md:ml-4"
                        >
                          I agree to Magicbricks T&C, Privacy Policy, & Cookie
                          Policy
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-3 text-sm md:text-base">
                    <ul>
                      <li className="w-[630px] ml-0">
                        <span className="mr-1 w-5 h-5 align-[2px]">
                          <input
                            type="checkbox"
                            name="whatsapp"
                            id="whatsapp"
                          />
                        </span>
                        <label className="relative left-[1px] ml-2 md:ml-4">
                          I want to receive responses on{" "}
                          <span>
                            <img
                              className="w-4 h-4 inline-block align-middle mr-[2px] "
                              src={whatsapp}
                              alt="whatsapp"
                            />
                          </span>{" "}
                          Whatsapp
                        </label>
                      </li>
                    </ul>
                  </div>

                  <div
                    id="loginBtn"
                    className="pt-[25px] pb-[30px] w-[200px] relative"
                  >
                    <button
                      id="btnLogin"
                      onClick={handleSubmit}
                      className="leading-8 p-2 text-sm md:text-base text-center border rounded text-[#fff] bg-blue-700  hover:bg-blue-900"
                    >
                      Login & Post Property
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SellRentCard;
