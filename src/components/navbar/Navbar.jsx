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
          </div>{" "}
          <div className="profile  ">
            {" "}
            <ArrowDropDown />
            <div className="options">
              {" "}
              <span onClick={() => dispatch(logout())}>Log Out</span>
            </div>
            <img src={avatar} alt="" className="navAvatar" width={"30px"} />
          </div>
        </div>
      </div>
    </div>
  );
}
