import React, { useContext } from "react";
import "./navbar.css";
import avatar from "./avatarMan.jpg";
import {
  NotificationsNone,
  Language,
  Settings,
  ArrowDropDown,
} from "@material-ui/icons";
import { logout } from "../../context/authContext/AuthActions";
import { AuthContext } from "../../context/authContext/AuthContext";
export default function Navbar() {
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    logout(dispatch);
  };
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
          <div className="profile">
            <img src={avatar} alt="" className="navAvatar" width={"30px"} />
            <span className="name">John</span>
            <div className="options">
              <div className="set"></div>
              <hr />
              <button onClick={handleLogout}>Log Out</button>
            </div>
            <ArrowDropDown />
          </div>
        </div>
      </div>
    </div>
  );
}
