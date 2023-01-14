import React from "react";
import "./navbar.css";
import avatar from "./avatarMan.jpg";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navLeft">
          <span className="logo">js</span>
        </div>
        <div className="navRight">
          <div className="navbarIconContainer">
            <NotificationsNone />
            <span className="navIconBadge">2</span>
          </div>
          <div className="navbarIconContainer">
            <Language />
            <span className="navIconBadge">2</span>
          </div>
          <div className="navbarIconContainer">
            <Settings />
          </div>
          <img src={avatar} alt="" className="navAvatar" width={"30px"} />
        </div>
      </div>
    </div>
  );
}
