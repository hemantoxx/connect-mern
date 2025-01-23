import React from "react"
import Faqs from "../components/Faqs"
import { ReactTyped } from "react-typed";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Canvas } from "@react-three/fiber";
import { Overlay } from "../components/Overlay";
//import {  Experience } from "../components/Experience";
export default function Home(){
    return(
        <div className="vision">
            <h1>{" "}
        <ReactTyped
          strings={["BUY", "SEARCH", "RENT", "All AT ONE PLACE","WELCOME TO HOMIFIND"]}
          typeSpeed={90}
          loop
          backSpeed={25}
          cursorChar="."
          showCursor={true}
                /></h1>
            <div className="vision_content">
                <p>🚨Many low-income families struggle to find affordable housing due to a lack of clear pricing, access to government aid programs, and credible community reviews. This results in confusion, frustration, and missed opportunities for securing safe and affordable homes. The goal is to create a platform that streamlines this process by providing a user-friendly interface where families can easily find and compare affordable housing options, access financial support information, and benefit from transparent reviews from otherresidents.</p>
               <img src={require("../images/happyface.png")} alt="" style={{ borderRadius: "20px" }} />
            </div>
            <div className="vision_content" id="vision_content2">
                <img src={require("../images/happyface2.png")} alt="" style={{ borderRadius: "20px" }} />
                <p>Main Features: Searchable Housing Listings: A robust search feature that allows users to filter affordable housing based on location, price range, amenities, and proximity to public services. Government Aid Integration: A section that automatically pulls in relevant government housing programs, grants, or subsidies available for users in their location. Transparent Pricing: Display pricing breakdowns, including rent, utilities, and hidden fees, to ensure users fully understand the costs before committing. Community Reviews & Ratings: A review system where current or past tenants can leave ratings and reviews based on their experiences, helping families make informed decisions.</p>
            </div>
            <Faqs />
        </div>
    )
}