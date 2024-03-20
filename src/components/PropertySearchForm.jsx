import React, { useState } from 'react';

const PropertySearchForm = () => {
  // State variables to hold input values
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your search functionality here
    console.log("Property Type:", propertyType);
    console.log("Location:", location);
    console.log("Price Range:", priceRange);
  };

  // Predefined options for location
  const locationOptions = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    // Add more locations as needed
  ];

  // Predefined options for price range
  const priceRangeOptions = [
    "0 - 100,000",
    "100,000 - 200,000",
    "200,000 - 300,000",
    "300,000 - 400,000",
    // Add more price ranges as needed
  ];

  return (

    <form onSubmit={handleSubmit} className="flex justify-center ml-72 ring-1 ring-gray-300 shadow-2xl p-4 bg-gray-50 w-1/2 rounded-xl ">
     
      <div className="flex flex-col items-start mr-6">
        <label htmlFor="propertyType" className="mb-2 ml-1 font-semibold">Property Type</label>
        <select
          id="propertyType"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="border p-2 rounded-lg"
          style={{ backgroundColor: "#faf8ed" }}
        >
          <option value="">Please Select</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="flex flex-col items-start mr-6">
        <label htmlFor="location" className="mb-2 ml-1 font-semibold">Location</label>
        <select
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded-lg"
          style={{ backgroundColor: "#faf8ed" }}
        >
          <option value="">Please Select</option>
          {locationOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-start mr-4">
        <label htmlFor="priceRange" className="mb-2 font-semibold">Price Range</label>
        <select
          id="priceRange"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="border p-2 rounded-lg"
          style={{ backgroundColor: "#faf8ed" }}
        >
          <option value="">Please Select</option>
          {priceRangeOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="bg-green-800 text-white font-semibold py-2 px-4 rounded-lg mt-7" style={{ backgroundColor: "#33691E" },{ height: "2.5em" }}>Search</button>
    </form>
  );
};

export default PropertySearchForm;
