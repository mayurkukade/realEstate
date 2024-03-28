import { Card, Input, Button, Typography } from "@material-tailwind/react";

import Select from "react-select";
import React, { useState } from "react";
import whatsapp from "../../assets/images/whatsapp.jpg";
import icon from "../../assets/images/icon.jpg";
import image from "../../assets/images/image.jpg";
import PostPropertyIcon1 from "../../assets/images/PostPropertyIcon1.png";
import PostPropertyIcon2 from "../../assets/images/PostPropertyIcon2.png";
import PostPropertyIcon3 from "../../assets/images/PostPropertyIcon3.png";
import PostPropertyImage1 from "../../assets/images/PostPropertyImage1.png";
import PostPropertyImage2 from "../../assets/images/PostPropertyImage2.png";
import PostPropertyImage3 from "../../assets/images/PostPropertyImage3.png";

const countryCodes = [
  { label: "+1 (USA)", value: "+1" },
  { label: "+44 (UK)", value: "+44" },
  { label: "+91 (IND)", value: "+91" },
];

export function PostPropertyCard() {
  const [formData, setFormData] = useState({
    countryCode: null,
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setValidationErrors({ ...validationErrors, [field]: "" });
  };

  const validateForm = () => {
    const errors = {};
    const { phoneNumber } = formData;

    if (phoneNumber.length !== 10)
      errors.phoneNumber = "Contact number must be 10 digits.";

    return errors;
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      console.error("Form validation failed:", errors);
    } else {
      console.log("Form is valid, proceed with sign up");
      console.log("Form Data:", formData);
    }
  };

  return (
    <div className="grid place-content-center">
      <div className="flex">
        <div className="w-[400px]">
          <img className="w-full pt-24" src={image} alt="" />
        </div>

        <div className="pt-[148px] h-[306px] w-[410px] pl-8">
          <div className="space-y-3">
            <div className="font-[poppins] pb-8 text-start space-y-3">
              <div className="text-4xl font-semibold space-y-3">
                Post property Ad to sell or rent online for
              </div>
              <div className="text-4xl font-semibold text-teal-400">Free!</div>
            </div>
          </div>

          <ul
            class="list-disc list-inside"
            className="font-sans text-xl font-semibold text-start space-y-3"
          >
            <li class="flex items-center space-x-3">
              <img src={icon} alt="Icon" class="h-4 w-4" />
              <span>Get Access to 4 Lakh + Buyers</span>
            </li>
            <li class="flex items-center space-x-3">
              <img src={icon} alt="Icon" class="h-4 w-4" />
              <span>Sell Faster with Premium Service</span>
            </li>
            <li class="flex place-items-baseline space-x-3">
              <img src={icon} alt="Icon" class="h-4 w-4" />
              <span>Get Expert Advice on Market Trends and Insights</span>
            </li>
          </ul>
        </div>

        <Card
          color="transparent"
          shadow={false}
          className="w-[390px] h-[543px] p-6 border border-teal-100 ml-8 mt-8"
        >
          <form className="">
            <div className="flex flex-col gap-6">
              <Typography
                variant="h6"
                color="blue-gray"
                className="font-[poppins] text-2xl font-semibold mb-1 flex flex-initial"
              >
                Let's get you started
              </Typography>

              <Typography
                variant="h6"
                color="blue-gray"
                className="font-[lato] text-base font-semibold flex flex-initial"
              >
                You are:
              </Typography>

              <div className="align-top text-start relative flex -mb-2">
                <div className="w-[90px] h-[44px]">
                  <input
                    type="radio"
                    name="youAre"
                    id="Owner"
                    autoComplete="off"
                    onClick={"Owner"}
                    className="hidden"
                  />
                  <label
                    htmlFor="Owner"
                    className="py-3 px-4 border border-gray-400 rounded-full cursor-pointer"
                  >
                    Owner
                  </label>
                </div>

                <div className="w-[90px] h-[44px]">
                  <input
                    type="radio"
                    name="youAre"
                    id="Agent"
                    autoComplete="off"
                    onClick={"Agent"}
                    className="hidden"
                  />
                  <label
                    htmlFor="Agent"
                    className="py-3 px-4 border border-gray-400 rounded-full cursor-pointer"
                  >
                    Agent
                  </label>
                </div>
                <div className="w-[90px] h-[44px]">
                  <input
                    type="radio"
                    name="youAre"
                    id="Builder"
                    autoComplete="off"
                    onClick={"Builder"}
                    className="hidden"
                  />
                  <label
                    htmlFor="Builder"
                    className="py-3 px-4 border border-gray-400 rounded-full cursor-pointer"
                  >
                    Builder
                  </label>
                </div>
              </div>

              <Typography
                variant="h6"
                color="blue-gray"
                className="text-base font-semibold flex flex-initial"
              >
                You are here to:
              </Typography>

              <div className="p-0 align-top mr-2 text-start relative flex mb-3">
                <div className="w-[90px] h-[44px]">
                  <input
                    type="radio"
                    name="hereto"
                    id="sell"
                    autoComplete="off"
                    onClick={"sell"}
                    className="hidden"
                  />
                  <label
                    htmlFor="sell"
                    className="py-3 px-4 border border-gray-400 rounded-full cursor-pointer"
                  >
                    sell
                  </label>
                </div>
                <div className="w-[90px] h-[44px] -ml-5">
                  <input
                    type="radio"
                    name="hereto"
                    id="Rent"
                    autoComplete="off"
                    onClick={"Rent"}
                    className="hidden"
                  />
                  <label
                    htmlFor="Rent"
                    className="py-3 px-4 border border-gray-400 rounded-full cursor-pointer"
                  >
                    Rent/lease
                  </label>
                </div>
                <div className="w-[90px] h-[44px] ml-7">
                  <input
                    type="radio"
                    name="hereto"
                    id="pg"
                    autoComplete="off"
                    onClick={"pg"}
                    className="hidden"
                  />
                  <label
                    htmlFor="pg"
                    className="py-3 px-4 border border-gray-400 rounded-full cursor-pointer mr-0"
                  >
                    list PG
                  </label>
                </div>
              </div>
            </div>

            <Typography
              variant="h6"
              color="blue-gray"
              className="text-base font-semibold flex flex-initial mb-3"
            >
              Your contact number
            </Typography>

            <div className="flex items-center gap-4 mb-3">
              {/* Contact Number */}
              <Select
                options={countryCodes}
                value={formData.countryCode}
                onChange={(selectedOption) =>
                  handleInputChange("countryCode", selectedOption)
                }
                className="w-32 text-sm"
              />
              <Input
                label="WhatsApp Number"
                type="tel"
                size="sm"
                placeholder="Mobile Number"
                className="text-sm "
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
              />

              {validationErrors.phoneNumber && (
                <Typography color="red" variant="small">
                  {validationErrors.phoneNumber}
                </Typography>
              )}
            </div>

            <div
              id="wrapper"
              className="w-full h-[72px] py-3 px-4 border rounded-lg border-solid border-[#ffde82] bg-[#fffcf2]"
            >
              <div className="text-sm font-semibold">
                Enter your{" "}
                <span className="w-6 h-6 inline-block align-middle mx-1 ">
                  <img src={whatsapp} alt="#" />
                </span>
                WhatsApp No. to get enquiries from Buyer / Tenant
              </div>
            </div>

            <Button className="mt-6 bg-red-700 text-sm rounded-full" fullWidth>
              Start Now
            </Button>
          </form>
        </Card>
      </div>

      <div className="mt-12">
        <div className="grid place-content-center">
          <div className="font-[poppins] text-4xl  text-center w-96 font-semibold">
            Post Your Property in 3 Simple Steps
          </div>
        </div>

        <div className="font-[lato] flex justify-evenly mt-6">
          <div id="col1" className="w-[350px] ">
            <div className="h-[48px] w-[48px]">
              <img src={PostPropertyIcon1} alt="Icon" />
            </div>
            <div className="text-base font-semibold mt-3">
              01. Add details of your property
            </div>
            <div className="text-sm mt-2">
              Begin by telling us the few basic details about your property like
              your property type, locations, number of room, etc.
            </div>
          </div>

          <div id="col2" className="w-[350px]">
            <div className="h-[48px] w-[48px]">
              <img src={PostPropertyIcon2} alt="Icon" />
            </div>
            <div className="text-base font-semibold mt-3">
              02. Upload Photos & Videos
            </div>
            <div className="text-sm mt-2">
              Upload photos & videos of your property either via your desktop
              device or from your mobile phone.
            </div>
          </div>

          <div id="col3" className="w-[350px]">
            <div className="h-[48px] w-[48px]">
              <img src={PostPropertyIcon3} alt="Icon" />
            </div>
            <div className="text-base font-semibold mt-3">
              03. Add Pricing & Ownership
            </div>
            <div className="text-sm mt-2">
              Just update your property's ownership details and your expected
              price then your property is ready for posting.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 mb-16">
        <div className="grid place-content-center">
          <div className="font-[poppins] text-4xl  text-center w-96 font-semibold">
            How it works
          </div>
        </div>

        <div className="font-[lato] flex justify-evenly mt-6">
          <div id="col1" className="w-[350px]">
            <div className="h-[120px] w-[160px]">
              <img src={PostPropertyImage1} alt="Icon" />
            </div>
            <div className="text-base font-semibold mt-3">
              Step 1: Post your Property Ad
            </div>
            <div className="text-sm mt-2">
              Enter all details like locality name, amenities, etc along with
              uploading photos.
            </div>
          </div>

          <div id="col2" className="w-[350px]">
            <div className="h-[120px] w-[160px]">
              <img src={PostPropertyImage2} alt="Icon" />
            </div>
            <div className="text-base font-semibold mt-3">
              Step 2: Check Responses on Dashboard
            </div>
            <div className="text-sm mt-2">
              Get acsess to Buyer/Tenant contact details & connect easily.
            </div>
          </div>

          <div id="col3" className="w-[350px]">
            <div className="h-[120px] w-[160px]">
              <img src={PostPropertyImage3} alt="Icon" />
            </div>
            <div className="text-base font-semibold mt-3">
              Step 3: Sell/Rent faster with instant connect
            </div>
            <div className="text-sm mt-2">
              Negotiate with your prospective Buyer/Tenant and mutually close
              the deal(site-visit).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
