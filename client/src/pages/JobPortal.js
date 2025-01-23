import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import JobCard from "../components/JobCard";
import jobdata from "./jobdata";
import "./JobPortal.css";
import axios from "axios";

const JobPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [mainData, setMainData] = useState([]);
  const [job, setJob] = useState("Search");

  // Load initial job data
  useEffect(() => {
    setMainData(jobdata);
    setFilteredData(jobdata);
  }, []);

  // Function to handle the API search when the button is clicked
  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      setFilteredData(mainData); // Reset to original data if input is empty
      return;
    }

    try {
      // Make a GET request to the API
      const response = await axios.get("http://127.0.0.1:5000/api/v1/property/distances/19.05,72.86/unit/km", {
        params: { query: searchQuery }, // Pass the search query as a parameter
      });

      // Assuming the API returns the data in the required format
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch data. Please try again.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity()) {
      const formData = new FormData(form);
      const formValues = {};
      formData.forEach((value, key) => {
        formValues[key] = value;
      });

      const newJob = {
        company: formValues.company,
        jobTitle: formValues.jobTitle,
        jobtype: [formValues.jobtype],
        salaryMin: formValues.salaryMin,
        salaryMax: formValues.salaryMax,
        location: formValues.location,
      };

      setMainData((prevData) => {
        const updatedData = [newJob, ...prevData];
        setFilteredData(updatedData); // Update filtered data to include new job
        return updatedData;
      });

      setJob("Search"); // Go back to the search view after submission
    } else {
      console.log("Please fill out all required fields.");
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
                filteredData.map((jobDataList, index) => (
                  <JobCard
                    key={index}
                    company={jobDataList.company}
                    jobTitle={jobDataList.jobTitle}
                    salaryMin={jobDataList.salaryMin}
                    salaryMax={jobDataList.salaryMax}
                    jobtype={jobDataList.jobtype}
                    location={jobDataList.location}
                  />
                ))
              ) : (
                <p>No jobs found. Try a different query.</p>
              )}
            </div>
          </div>
        </>
      )}

      {job === "Addjob" && (
        <div className="cards_set_head">
          <div
            style={{
              background: "#DADADA",
              borderRadius: "40px",
              marginLeft: "35%",
              width: "30%",
              padding: "1%",
              marginTop: "7rem",
            }}
          >
            <Button
              style={{
                marginLeft: "3.5%",
                background: "#1E90FF",
                borderRadius: "40px",
                color: "white",
              }}
              onClick={() => {
                setJob("Search");
                setSearchQuery("");
              }}
            >
              Back
            </Button>
            <form onSubmit={handleSubmit}>
              <ul className="exp_ul">
                <li>
                  <TextField
                    label="Enter Company"
                    name="company"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </li>
                <li>
                  <TextField
                    label="Enter Title"
                    name="jobTitle"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </li>
                <li>
                  <TextField
                    label="Job Description"
                    name="jobtype"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </li>
                <li>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <TextField
                            label="Minimum Salary"
                            name="salaryMin"
                            variant="outlined"
                            fullWidth
                            required
                          />
                        </td>
                        <td>
                          <TextField
                            label="Maximum Salary"
                            name="salaryMax"
                            variant="outlined"
                            fullWidth
                            required
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li>
                  <TextField
                    label="Location"
                    name="location"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </li>
                <li>
                  <Button
                    type="submit"
                    style={{
                      background: "#1E90FF",
                      width: "100%",
                      borderRadius: "40px",
                      color: "white",
                    }}
                  >
                    ADD
                  </Button>
                </li>
              </ul>
            </form>
          </div>
          <br />
        </div>
      )}
    </>
  );
};

export default JobPage;
