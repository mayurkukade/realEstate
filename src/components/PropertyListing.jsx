import React from "react";
import { SalePropertyCard } from "./SalePropertyCard";
import propertyImage1 from "../assets/images/propertyImage1.jpg";

export function PropertyListing() {
  // Sample property data array
  const propertyData = [
    {
      id: 1,
      owner: "Vivek Dethe",
      price: "INR.55 lakh",
      contact: "9028003579",
      location: "4.5km from Katraj",
      title: "2 BHK Apartments for Sale in Windsor County, Ambegaon Pune",
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
      owner: "Vivek Dethe",
      price: "INR.55 lakh",
      contact: "9028003579",
      location: "4.5km from Katraj",
      title: "2 BHK Apartments for Sale in Windsor County, Ambegaon Pune",
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
      id: 3,
      owner: "Vivek Dethe",
      price: "INR.55 lakh",
      contact: "9028003579",
      location: "4.5km from Katraj",
      title: "2 BHK Apartments for Sale in Windsor County, Ambegaon Pune",
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
      id: 4,
      owner: "Vivek Dethe",
      price: "INR.55 lakh",
      contact: "9028003579",
      location: "4.5km from Katraj",
      title: "2 BHK Apartments for Sale in Windsor County, Ambegaon Pune",
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
      id: 5,
      owner: "Vivek Dethe",
      price: "INR.55 lakh",
      contact: "9028003579",
      location: "4.5km from Katraj",
      title: "2 BHK Apartments for Sale in Windsor County, Ambegaon Pune",
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
    // Add more property objects as needed
  ];

  return (
    <div>
      {propertyData.map((property) => (
        <SalePropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
