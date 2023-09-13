import React from "react";
import "./home.css";
import NavBar from "../../components/navigation/NavBar";
import LeftPlane from "../../components/leftPlane/leftPlane";
import PostPlane from "../../components/postPlane/postPlane";
import RightPlane from "../../components/rightPlane/rightPlane";

export default function Home(){
    return(
        <>
            <NavBar/>
            <div className="bottomContainer">
                <LeftPlane/>
                <PostPlane/>
                <RightPlane/>
            </div>

        </>

    )
}
