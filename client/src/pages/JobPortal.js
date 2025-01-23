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

  // Load initial job data
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/api/v1/property/distances/19.05,72.86/unit/km"
        );

        const properties = response.data.data.result.map((property) => ({
          id: property._id,
          name: property.name,
          location: `${property.city}, ${property.state}`,
          distance: `${property.distance.toFixed(2)} km`,
          priceRange: `${Math.floor(Math.random() * 100000)} - ${Math.floor(Math.random() * 200000)} INR`,
          ratings: Math.floor(Math.random() * 5) + 1, // Simulated ratings
        }));

        setMainData(properties);
        setFilteredData(properties); // Set initial data as filtered data
      } catch (error) {
        console.error("Error fetching initial data:", error);
        setMainData([]); // Fallback to empty array
        setFilteredData([]);
      }
    };

    fetchInitialData();
  }, []);

  // Function to handle the API search when the button is clicked
  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      setFilteredData(mainData); // Reset to original data if input is empty
      return;
    }

    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/api/v1/property/distances/19.05,72.86/unit/km",
        { params: { query: searchQuery } }
      );

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

        <label htmlFor="location">Location:</label>
        <select id="location">
          <option value="city">City</option>
          <option value="suburbs">Suburbs</option>
          <option value="rural">Rural</option>
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
