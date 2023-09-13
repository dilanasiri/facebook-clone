import React from "react";
import "./rightPlane.css";

export default function rightPlane(){
    return (
        <div className="rightPlaneBox">
            <div className="rightPlaneContainer">
                <div className="addContainer">
                    <span className="sponsored">Sponsored by</span>
                    <img src="/images/advertising.jpg" alt="" className="adImage"/>
                    <span className="adText">
                        A type of ad that includes a graphic to promote your business. An image ad consists of an image that you provide featuring information about your business, services, or products. When people click anywhere on your ad, they'll be taken to your website.
                    </span>
                </div>
                <div className="birthdayContainer">
                    <img src="/images/birthday.jpg" alt="" className="birthdayImage"/>
                    <span className="birthdayText"> <b>Jayantha </b> and <b> 2 others </b> having birthday today..!</span>
                </div>
                <div className="friendList">
                    <li className="onlineFriend">
                        <div className="onlineFriendImageContainer">
                            <img src="/images/anne.jpg" alt="" className="onlineFriendImg"/>
                            <span className="onlineStatus"></span>
                        </div>
                        <div className="onlineFriendName">Anne Fenando</div>
                    </li>
                    <li className="onlineFriend">
                        <div className="onlineFriendImageContainer">
                            <img src="/images/kumara.jpeg" alt="" className="onlineFriendImg"/>
                            <span className="onlineStatus"></span>
                        </div>
                        <div className="onlineFriendName">Kumara Kalumsiri</div>
                    </li>
                    <li className="onlineFriend">
                        <div className="onlineFriendImageContainer">
                            <img src="/images/ruwan.jpg" alt="" className="onlineFriendImg"/>
                            <span className="onlineStatus"></span>
                        </div>
                        <div className="onlineFriendName">Ruwan Anoj</div>
                    </li>
                    <li className="onlineFriend">
                        <div className="onlineFriendImageContainer">
                            <img src="/images/sandamali.jpg" alt="" className="onlineFriendImg"/>
                            <span className="onlineStatus"></span>
                        </div>
                        <div className="onlineFriendName">Sandamali Rathnasekara</div>
                    </li>

                </div>

            </div>
        </div>
    )
}
