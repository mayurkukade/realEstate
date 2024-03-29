import React from "react";
import { NewPropertyCard } from "./NewPropertyCard";
import propertyImage11 from "../../assets/images/propertyImage11.jpg";
import propertyImage12 from "../../assets/images/propertyImage12.jpg";
import propertyImage13 from "../../assets/images/propertyImage13.jpg";
import propertyImage14 from "../../assets/images/propertyImage14.jpg";
import propertyImage15 from "../../assets/images/propertyImage15.jpg";

export function NewPropertyListing() {
  // Sample property data array
  const propertyData = [
    {
      id: 1,
      owner: "Rohan Rana",
      price: "INR.80 lakh",
      contact: "9328003275",
      location: "Yewlewadi, Pune",
      title: "4 BHK Apartments for Sale in Yewlewadi, Katraj Pune",
      furnishing: "Furnished",
      carpetArea: "1050 sqft",
      bathroom: 2,
      floor: "3 out of 9",
      parking: "Bike & Car Parking",
      transaction: "New Property",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage11,
    },

    {
      id: 2,
      owner: "Jatin Mishra",
      price: "INR.25 lakh",
      contact: "9437003228",
      location: "Hinjewadi, Pune",
      title: "1 BHK Apartments for Sale in Hinjewadi, Pune",
      furnishing: "Unfurnished",
      carpetArea: "592 sqft",
      bathroom: 1,
      floor: "7 out of 8",
      parking: "Bike & Car Parking",
      transaction: "New Property",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage12,
    },

    {
      id: 3,
      owner: "Priyansh Borde",
      price: "INR.18 lakh",
      contact: "8866445533",
      location: "200meter from Keshav Nagar",
      title: "2BHK Apartment for Sale in Konark Virtue Keshav Nagar, Pune",
      furnishing: "Furnished",
      carpetArea: "792 sqft",
      bathroom: 2,
      floor: "7 out of 18",
      parking: "Bike & Car Parking",
      transaction: "New Property",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage13,
    },

    {
      id: 4,
      owner: "Raj Shejwal",
      price: "INR.75 lakh",
      contact: "9876543210",
      location: "11km from Kothari International",
      title: "Office Space for Sale in Platinum Tower, Kharadi Pune",
      furnishing: "Semi-furnished",
      carpetArea: "1150 sqft",
      bathroom: 1,
      floor: "1 out of 9",
      parking: "Bike & Car Parking",
      transaction: "New Property",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage14,
    },

    {
      id: 5,
      owner: "Shubham Patel",
      price: "INR.35 lakh",
      contact: "9528553277",
      location: "Katraj-Kondhwa Road Pune",
      title: "Shop for Sale in Utima Business Center, Kondhwa Pune",
      furnishing: "Furnished",
      carpetArea: "892 sqft",
      bathroom: 1,
      floor: "4 out of 6",
      parking: "Bike & Car Parking",
      transaction: "New Property",
      description:
        "Brand New Flat in Brand new Society available for immediate possession.",
      image: propertyImage15,
    },
    // Add more property objects as needed
  ];

  return (
    <div>
      <div
        id="heading"
        className="font-[poppins] text-3xl font-semibold ml-64 mt-4"
      >
        New Properties for Sale in Pune
      </div>

      {propertyData.map((property) => (
        <NewPropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
