import React from "react";
import { textAlign } from "@mui/system";
import ReactStars from "react-rating-stars-component"; // Import the stars component
import "./JobCard.css";

const JobCard = (props) => {
  return (
    <table className="box">
      <tr>
        <td rowSpan={5}>
          <img
            src={require("../images/flat.jpg")}
            style={{ marginRight: "10px" }}
            alt="Flat"
          ></img>
        </td>
        <td>
          <h1 style={{ textAlign: "center" }}>BANDRA</h1>
        </td>
      </tr>
      <tr>
        <td>
          Foot Over Bridge Khar, Govind Dham, Ram Krishna Nagar, Khar West,
          Mumbai, Maharashtra 400052
        </td>
      </tr>
      <tr>
        <td>Date</td>
      </tr>
      <tr>
        <td>
          <div className="capsule">2Cr - 3Cr</div>
        </td>
      </tr>
      <tr>
        <td>
          <ReactStars
            count={5} // Total number of stars
            value={4} // Current rating value (you can pass this as a prop)
            size={36} // Size of stars
            activeColor="#ffd700" // Color for the filled stars
            edit={false} // Disable editing if it's just for display
          />
        </td>
      </tr>
    </table>
  );
};

export default JobCard;
