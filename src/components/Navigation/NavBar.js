 import React from "react";
 import SearchIcon from '@mui/icons-material/Search';
 import PersonIcon from '@mui/icons-material/Person';
 import ChatIcon from '@mui/icons-material/Chat';
 import SettingsIcon from '@mui/icons-material/Settings';
 import "./navBar.css";

 export default function NavBar(){
    return(
        <div className="navBarBox">
            <div className="navBarLeft">
                <span className="logo">Facebook</span>
            </div>
            <div className="navBarCenter">
                <div className="searchBar" >
                    <SearchIcon className="searchIcon"/>
                    <input type="text" placeholder="Search Your Friend" className="searchInput"/>
                </div>
            </div>
            <div className="navBarRight">
                <div className="navBarLinks">
                    <span className="navBarLink">HomePage</span>
                    <span className="navBarLink">Profile</span>
                </div>
                <div className="navBarIcons">
                    <div className="navBarIcon">
                        <PersonIcon/>
                        <span className="iconTag">3</span>
                    </div>
                </div>
                <div className="navBarIcons">
                    <div className="navBarIcon">
                        <ChatIcon/>
                        <span className="iconTag">8</span>
                    </div>
                </div>
                <div className="navBarIcons">
                    <div className="navBarIcon">
                        <SettingsIcon/>
                        <span className="iconTag">4</span>
                    </div>
                </div>
                <div className="pic">
                    <img src="/images/dilan.jpeg" alt="" className="profilePic"/>

                </div>
            </div>
        </div>
    )
 }
