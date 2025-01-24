import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import JobCard from "../components/JobCard";
import axios from "axios";
import "./JobPortal.css";

const JobPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [mainData, setMainData] = useState([]);
  const [job, setJob] = useState("Search");

  // Dummy data to be shown when the app first loads
  const dummyData = [
    {
      id: "1",
      name: "Dummy Property 1",
      location: "City 1",
      distance: "10 km",
      priceRange: "50,000 - 100,000 INR",
      ratings: 4,
    },
    {
      id: "2",
      name: "Dummy Property 2",
      location: "City 2",
      distance: "20 km",
      priceRange: "100,000 - 150,000 INR",
      ratings: 3,
    },
    {
      id: "3",
      name: "Dummy Property 3",
      location: "City 3",
      distance: "30 km",
      priceRange: "150,000 - 200,000 INR",
      ratings: 5,
    },
  ];

  // Function to fetch latitude and longitude based on the city name
  const getCoordinates = async (cityName) => {
    try {
      // Replace with your API key for the chosen Geocoding API
      const apiKey = 'cb17cd5c7fe24c5b983f9abbb0d4d0ca'; // e.g., OpenCage, Google Maps
      const geocodeUrl = `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${apiKey}`;

      const response = await axios.get(geocodeUrl);
      const result = response.data.results[0];

      if (result) {
        const { lat, lng } = result.geometry;
        return { lat, lng };
      } else {
        throw new Error("City not found");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      alert("Could not fetch coordinates. Please check the city name.");
      return null;
    }
  };

  // Load initial dummy data
  useEffect(() => {
    setFilteredData(dummyData);
    setMainData(dummyData); // Set dummy data on initial load
  }, []);

  // Function to handle the API search when the button is clicked
  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      setFilteredData(mainData); // Reset to original data if input is empty
      return;
    }

    // Step 1: Get the coordinates (lat, long) of the city
    const coordinates = await getCoordinates(searchQuery);
    if (!coordinates) {
      return; // If coordinates are not found, do not proceed
    }

    console.log("Coordinates:", coordinates); // Log the coordinates for debugging

    // Step 2: Construct the dynamic API URL with the latitude and longitude
    const { lat, lng } = coordinates;
    const apiUrl = `http://127.0.0.1:5000/api/v1/property/distances/${lat},${lng}/unit/km`;
    console.log("API URL:", apiUrl); // Log the API URL to ensure it's correct

    try {
      // Step 3: Make the API call with the dynamic coordinates
      const response = await axios.get(apiUrl, { params: { query: searchQuery } });

      console.log("API Response:", response); // Log the response to check the data

      const properties = response.data.data.result.map((property) => ({
        id: property._id,
        name: property.name,
        location: `${property.city}, ${property.state}`,
        distance: `${property.distance.toFixed(2)} km`,
        priceRange: `${Math.floor(Math.random() * 100000)} - ${Math.floor(Math.random() * 200000)} INR`,
        ratings: Math.floor(Math.random() * 5) + 1, // Simulated ratings
      }));

      setFilteredData(properties); // Update filtered data with the search results
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch data. Please try again.");
    }
  };

  return (
    <>
      <div className="filter-sidenav">
        <h3>Filter Options</h3>
        <label htmlFor="price-range">Price Range:</label>
        <select id="price-range">
          <option value="0-50000">Under $50,000</option>
          <option value="50000-100000">$50,000 - $100,000</option>
          <option value="100000-200000">$100,000 - $200,000</option>
          <option value="200000-500000">$200,000 - $500,000</option>
          <option value="500000+">Over $500,000</option>
        </select>

        {/* <label htmlFor="location">Location:</label>
        <select id="location">
          <option value="city">City</option>
          <option value="suburbs">Suburbs</option>
          <option value="rural">Rural</option>
        </select> */}

      <label for="bedrooms">Bedrooms:</label>
  <select id="bedrooms">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4+">4+</option>
  </select> 
  
  <label for="bathrooms">Bathrooms:</label>
  <select id="bathrooms">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3+">3+</option>
  </select>
  
    <label for="property-type">Property Type:</label>
    <select id="property-type">
      <option value="house">House</option>
      <option value="apartment">Apartment</option>
      <option value="townhouse">Townhouse</option>
      <option value="other">Other</option>
    </select> 
  </div>

      {job === "Search" && (
        <>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              marginBottom: "20px",
              marginTop: "8rem",
              marginLeft: "23rem",
              background: "white",
              borderRadius: "20px",
              width: "60%",
            }}
          />
          <Button
            style={{
              width: "10%",
              background: "blue",
              marginTop: "9rem",
              marginLeft: "1rem",
              borderRadius: "20px",
              height: "3rem",
              color: "white",
              translate: "0px -10px",
            }}
            onClick={handleSearch} // Call API on button click
          >
            Search
          </Button>
          <div className="cards_set_head">
            <div className="cards1_set">
              {filteredData.length > 0 ? (
                filteredData.map((property) => (
                  <JobCard
                    key={property.id}
                    title={property.name}
                    address={property.location}
                    priceRange={property.priceRange}
                    ratings={property.ratings}
                  />
                ))
              ) : (
                <p>No properties found. Try a different query.</p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default JobPage;