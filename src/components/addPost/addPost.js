import React from "react";
import "./addPost.css"
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function addPost(){
    return (
        <div className="addPost">
            <div className="addPostContainer">
                <div className="addPostTop">
                    <img src="/images/dilan.jpeg" alt="" className="addPostPic"/>
                    <input type="text" className="addPostInput" placeholder="What's on your mind, Dilan Asiri...?"/>
                </div>
                <hr className="postHr"/>
                <div className="addPostBottom">
                    <div className="addPostOptions">
                        <div className="addPostOption">
                            <AddAPhotoIcon htmlColor="orange" className="addPhoto"/>
                            <span className="addPostOptionText">Add Photo/Video</span>
                        </div>
                        <div className="addPostOption">
                            <AddLocationAltIcon htmlColor="green" className="addPhoto"/>
                            <span className="addPostOptionText">Add Location</span>
                        </div>
                        <div className="addPostOption">
                            <LocalOfferIcon htmlColor="dodgerblue" className="addPhoto"/>
                            <span className="addPostOptionText">Add Tag</span>
                        </div>
                        <div className="addPostOption">
                            <LiveTvIcon htmlColor="tomato" className="addPhoto"/>
                            <span className="addPostOptionText">Go Live Stream</span>
                        </div>
                    </div>
                    <button className="addPostButton">Post</button>
                </div>
            </div>
        </div>
    )
}
