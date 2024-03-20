import React from "react";
import { PlotForSaleCard } from "./PlotForSaleCard";
import propertyImage16 from "../assets/images/propertyImage16.jpg";
import propertyImage17 from "../assets/images/propertyImage17.jpg";
import propertyImage18 from "../assets/images/propertyImage18.jpg";
import propertyImage19 from "../assets/images/propertyImage19.jpg";
import propertyImage20 from "../assets/images/propertyImage20.jpg";

export function PlotForSaleListing() {
  // Sample property data array
  const propertyData = [
    {
      id: 1,
      owner: "Rajesh Satav",
      price: "INR.80 lakh",
      contact: "9328001254",
      location: "near Raisoni College",
      title: "Residential Land / Plot in Wagholi, Pune",
      furnishing: "1050 sqft",
      carpetArea: "2",
      bathroom: "50x40",
      floor: "2",
      parking: "Free Hold",
      transaction: "New Property",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage16,
    },

    {
      id: 2,
      owner: "Vijay Dhamale",
      price: "INR.25 lakh",
      contact: "9566303228",
      location: "NIBM Road, Pune",
      title: "Residential Land / Plot in NIBM Road, Pune",
      furnishing: "1050 sqft",
      carpetArea: "4",
      bathroom: "58x70",
      floor: "3",
      parking: "Co-operative Society",
      transaction: "Resale",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage17,
    },

    {
      id: 3,
      owner: "Rakesh Sharma",
      price: "INR.74 lakh",
      contact: "8866469852",
      location: "Near Millenium School",
      title: "Residential Land / Plot in Wakad, Pune",
      furnishing: "2500 sqft",
      carpetArea: "2",
      bathroom: "30x83",
      floor: "2",
      parking: "Free Hold",
      transaction: "New Property",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage18,
    },

    {
      id: 4,
      owner: "Raj Shejwal",
      price: "INR.90 lakh",
      contact: "9876543210",
      location: "near Shri Ram Chowk",
      title: "Residential Land / Plot in Kale Padal, Pune",
      furnishing: "2000 sqft",
      carpetArea: "3",
      bathroom: "60x33",
      floor: "3",
      parking: "Free Hold",
      transaction: "New Property",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage19,
    },

    {
      id: 5,
      owner: "Tejas Shejwal",
      price: "INR.65 lakh",
      contact: "9607272056",
      location: "Talegaon-Chakan Road Pune",
      title: "Residential Land / Plot in Talegaon Dabhade, Pune",
      furnishing: "2691 sqft",
      carpetArea: "2",
      bathroom: "46x58",
      floor: "3",
      parking: "Free Hold",
      transaction: "New Property",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage20,
    },
    // Add more property objects as needed
  ];

  return (
    <div>
      {propertyData.map((property) => (
        <PlotForSaleCard key={property.id} property={property} />
      ))}
    </div>
  );
}
