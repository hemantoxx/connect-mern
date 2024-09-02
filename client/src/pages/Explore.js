import React from "react"
import Domains from "./Domains"
import { Outlet } from "react-router-dom"
import { ReactTyped } from "react-typed";

export default function Explore(){
    return(
        <div className="explore">
            <div className="explore_contents">
                <h1> {" "}
        <ReactTyped
          strings={["Domains","Alumni","Filtered"]}
          typeSpeed={90}
          loop
          backSpeed={25}
          cursorChar="."
          showCursor={true}
          
        /></h1>
            </div>
            <div className="search_bar"></div>
            <Domains />
            <Outlet />
        </div>
    )
}
