import React from "react";
import ReactStars from "react-rating-stars-component"; // Import the stars component
import "./JobCard.css";

const JobCard = ({ title = "", address = "", priceRange = "", ratings = 0, image = "" }) => {
  return (
    <table className="box">
      <tbody>
        <tr>
          <td rowSpan={5}>
            {/* Display a dynamic image or fallback to a default */}
            <img
              src={image || require("../images/flat.jpg")} // Replace with a placeholder image
              style={{ marginRight: "10px", width: "150px", height: "150px" }}
              alt="Property"
            />
          </td>
          <td>
            {/* Display the property title dynamically or default to "No Title" */}
            <h1 style={{ textAlign: "center" }}>{title || "Property Title"}</h1>
          </td>
        </tr>
        <tr>
          {/* Display the address dynamically or default to "No Address" */}
          <td>{address || "Property Address"}</td>
        </tr>
        <tr>
          {/* Optionally include a dynamic date */}
          <td>{new Date().toLocaleDateString()}</td>
        </tr>
        <tr>
          {/* Display the price range dynamically or default to "No Price Range" */}
          <td>
            <div className="capsule">{priceRange || "Price Range"}</div>
          </td>
        </tr>
        <tr>
          <td>
            {/* Display dynamic star ratings */}
            <ReactStars
              count={5} // Total number of stars
              value={ratings || 0} // Current rating value
              size={36} // Size of stars
              activeColor="#ffd700" // Color for filled stars
              edit={false} // Display-only mode
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default JobCard;