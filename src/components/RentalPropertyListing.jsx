import React from "react";
import { RentalPropertyCard } from "./RentalPropertyCard";
import propertyImage6 from "../assets/images/propertyImage6.jpg";
import propertyImage7 from "../assets/images/propertyImage7.jpg";
import propertyImage8 from "../assets/images/propertyImage8.jpg";
import propertyImage9 from "../assets/images/propertyImage9.jpg";
import propertyImage10 from "../assets/images/propertyImage10.jpg";

export function RentalPropertyListing() {
  // Sample property data array
  const propertyData = [
    {
      id: 1,
      owner: "Raj Patel",
      price: "INR.16,000",
      contact: "7028003275",
      location: "1.5km from Konark Virtue",
      title: "2 BHK Apartments for Sale in Konark Virtue, Keshav Nagar, Pune",
      furnishing: "Unfurnished",
      carpetArea: "792 sqft",
      bathroom: 2,
      floor: "7 out of 10",
      parking: "Bike & Car Parking",
      transaction: "Security Guard & CCTV",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage6,
    },

    {
      id: 2,
      owner: "Santosh Satav",
      price: "INR.8,500",
      contact: "9828005825",
      location: "10km from Wagholi",
      title: "1 BHK Apartment for Rent in Lohgaon, Pune",
      furnishing: "Semi-furnished",
      carpetArea: "680 sqft",
      bathroom: 1,
      floor: "2 out of 9",
      parking: "Bike & Car Parking",
      transaction: "Security Guard & CCTV",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage7,
    },

    {
      id: 3,
      owner: "Ajinkya Rao",
      price: "INR.30,000",
      contact: "9556564212",
      location: "12km from Katraj Bus Depo",
      title: "Office Space for Rent in Kothrud, Pune",
      furnishing: "Furnished",
      carpetArea: "990 sqft",
      bathroom: 2,
      floor: "7 out of 9",
      parking: "Bike & Car Parking",
      transaction: "Security Guard & CCTV",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage8,
    },

    {
      id: 4,
      owner: "Jay Varma",
      price: "INR.13,500",
      contact: "9885642531",
      location: "0.9km from World Trade Center",
      title: "2 BHK Apartment for Rent in Prasun Loreto, Kharadi Pune",
      furnishing: "Unfurnished",
      carpetArea: "820 sqft",
      bathroom: 1,
      floor: "7 out of 12",
      parking: "Bike & Car Parking",
      transaction: "Security Guard & CCTV",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage9,
    },

    {
      id: 5,
      owner: "Akash Patel",
      price: "INR.15,000",
      contact: "9685963214",
      location: "0.2km from Vidya Valley School",
      title: "2 BHK Apartments for Rent in Tirth Avila, Sus Pune",
      furnishing: "Semi-furnished",
      carpetArea: "750 sqft",
      bathroom: 2,
      floor: "5 out of 10",
      parking: "Bike & Car Parking",
      transaction: "Security Guard & CCTV",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage10,
    },
    // Add more property objects as needed
  ];

  return (
    <div>
      {propertyData.map((property) => (
        <RentalPropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
