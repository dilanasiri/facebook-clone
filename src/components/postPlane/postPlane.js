import React from "react";
import "./postPlane.css"
import AddPost from "../addPost/addPost"
import Post from "../post/post";
export default function postPlane(){
    return (
        <div className="postPlaneBox">
            <AddPost/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
