import React from "react";
import "./leftplane.css"
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function leftPlane(){
    return (
        <div className="leftPlaneBox">
            <div className="leftContainer">
                <div className="leftMainMenu">
                    <li className="leftPlanMenuItem">
                        <ChatIcon className="leftPlaneMenuIcon"/>
                        <span className="leftPlanMainMenuText">Messages</span>
                    </li>
                    <li className="leftPlanMenuItem">
                        <GroupIcon className="leftPlaneMenuIcon"/>
                        <span className="leftPlanMainMenuText">Groups</span>
                    </li>
                    <li className="leftPlanMenuItem">
                        <RssFeedIcon className="leftPlaneMenuIcon"/>
                        <span className="leftPlanMainMenuText">Feed</span>
                    </li>
                    <li className="leftPlanMenuItem">
                        <FlagIcon className="leftPlaneMenuIcon"/>
                        <span className="leftPlanMainMenuText">Pages</span>
                    </li>
                    <li className="leftPlanMenuItem">
                        <CalendarMonthIcon className="leftPlaneMenuIcon"/>
                        <span className="leftPlanMainMenuText">Events</span>
                    </li>
                    <li className="leftPlanMenuItem">
                        <BuildIcon className="leftPlaneMenuIcon"/>
                        <span className="leftPlanMainMenuText">Settings</span>
                    </li>
                    <li className="leftPlanMenuItem">
                        <SportsEsportsIcon className="leftPlaneMenuIcon"/>
                        <span className="leftPlanMainMenuText">Games</span>
                    </li>
                    <li className="leftPlanMenuItem">
                        <NewspaperIcon className="leftPlaneMenuIcon"/>
                        <span className="leftPlanMainMenuText">News</span>
                    </li>
                    <li className="leftPlanMenuItem">
                        <WorkOutlineIcon className="leftPlaneMenuIcon"/>
                        <span className="leftPlanMainMenuText">Jobs</span>
                    </li>
                    <li className="leftPlanMenuItem">
                        <AddShoppingCartIcon className="leftPlaneMenuIcon"/>
                        <span className="leftPlanMainMenuText">Market</span>
                    </li>
                    <hr/>
                    <div className="pagesYouLike">
                        <h3>Pages You Liked</h3>
                    </div>
                    <div className="pageList">
                        <li className="pageListItem">
                            <img src="/images/dilan.jpeg" alt="" className="pagePic"/>
                            <span className="pagesName">Dilan Asiri</span>
                        </li>
                        <li className="pageListItem">
                            <img src="/images/dilan.jpeg" alt="" className="pagePic"/>
                            <span className="pagesName">Dilan Asiri</span>
                        </li>
                        <li className="pageListItem">
                            <img src="/images/dilan.jpeg" alt="" className="pagePic"/>
                            <span className="pagesName">Dilan Asiri</span>
                        </li>
                        <li className="pageListItem">
                            <img src="/images/dilan.jpeg" alt="" className="pagePic"/>
                            <span className="pagesName">Dilan Asiri</span>
                        </li>
                        <li className="pageListItem">
                            <img src="/images/dilan.jpeg" alt="" className="pagePic"/>
                            <span className="pagesName">Dilan Asiri</span>
                        </li>

                    </div>

                </div>

            </div>
        </div>
    )
}
