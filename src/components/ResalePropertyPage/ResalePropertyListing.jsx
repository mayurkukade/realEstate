import React from "react";
import { ResalePropertyCard } from "./ResalePropertyCard";
import propertyImage1 from "../../assets/images/propertyImage1.jpg";
import propertyImage2 from "../../assets/images/propertyImage2.jpg";
import propertyImage3 from "../../assets/images/propertyImage3.jpg";
import propertyImage4 from "../../assets/images/propertyImage4.jpg";
import propertyImage5 from "../../assets/images/propertyImage5.jpg";

export function ResalePropertyListing() {
  // Sample property data array
  const propertyData = [
    {
      id: 1,
      owner: "Vivek Dethe",
      price: "INR.55 lakh",
      contact: "9028003579",
      location: "4.5km from Katraj",
      title: "2 BHK Apartments for Sale in Windsor County, Ambegaon",
      furnishing: "Furnished",
      carpetArea: "732 sqft",
      bathroom: 1,
      floor: "3 out of 7",
      parking: "Bike & Car Parking",
      transaction: "Resale",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage1,
    },

    {
      id: 2,
      owner: "Vikram Singh",
      price: "INR.47 lakh",
      contact: "9428003255",
      location: "500meter from Chichwad Railway Station",
      title: "2 BHK Apartments for Sale in Cherry Hills, Chinchwad",
      furnishing: "Fully-furnished",
      carpetArea: "692 sqft",
      bathroom: 1,
      floor: "7 out of 8",
      parking: "Bike & Car Parking",
      transaction: "Resale",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage2,
    },

    {
      id: 3,
      owner: "Sumedh Wagh",
      price: "INR.65 lakh",
      contact: "9928003566",
      location: "200meter from Ayush Garden Pune",
      title: "2BHK Apartment for Sale in Raje Shivaji Nagar Pune",
      furnishing: "Furnished",
      carpetArea: "690 sqft",
      bathroom: 2,
      floor: "5 out of 8",
      parking: "Bike & Car Parking",
      transaction: "Resale",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage3,
    },

    {
      id: 4,
      owner: "Rajeev Shukla",
      price: "INR.95 lakh",
      contact: "9938003233",
      location: "office space for sale in Marvel Feugo, Magarpatta Pune",
      title: "Office Space for Sale in Marvel Feugo, Magarpatta Pune",
      furnishing: "Semi-furnished",
      carpetArea: "1200 sqft",
      bathroom: 2,
      floor: "7 out of 9",
      parking: "Bike & Car Parking",
      transaction: "Resale",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage4,
    },

    {
      id: 5,
      owner: "Dhruv Patel",
      price: "INR.45 lakh",
      contact: "9528003277",
      location: "JSPM Engineering College, Hinjewadi Pune",
      title: "2 BHK Apartments for Sale in Celebration, Hinjewadi Pune",
      furnishing: "Furnished",
      carpetArea: "820 sqft",
      bathroom: 1,
      floor: "3 out of 7",
      parking: "Bike & Car Parking",
      transaction: "Resale",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage5,
    },
    // Add more property objects as needed
  ];

  return (
    <div>
      <div
        id="heading"
        className="font-[poppins] text-3xl font-semibold w-full grid place-content-center m-4 "
      >
        Owner Properties for Resale in Pune
      </div>

      {propertyData.map((property) => (
        <ResalePropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
