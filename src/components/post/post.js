import React from 'react';
import './post.css';

export default function Post(){
    return(
        <div className="post">
            <div className="postContainer">
                <div className="postTop">
                    <img src="/images/dilan.jpeg" alt="" className="postImage"/>
                    <span className="postUserName">Dilan Udayantha Asiri</span>
                    <span className="postTime">5min ago</span>
                </div>
                <div className="postCenter">
                    <div className="postCaption">
                        Hello I am Dilan Asiri. How can I help you...?
                    </div>
                    <img src="/images/dilan.jpeg" alt="" className="postedImage"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/images/like.png" alt="" className="reactionImage"/>
                        <img src="/images/heart.png" alt="" className="reactionImage"/>
                        <img src="/images/haha.jpeg" alt="" className="reactionImage"/>
                        <img src="/images/sadness.png" alt="" className="reactionImage"/>
                        <span className="likeCount">Asiri and 2k others</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="commentCount">15 comments</span>
                    </div>
                </div>

            </div>

        </div>
    )
}
