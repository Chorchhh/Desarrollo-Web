import React, { useContext } from "react";
import { Link, useActionData } from "react-router-dom";
import "./../../Styles/sidebar.css";
import { ThemeContext } from "../../Context/ThemeContext";

const Sidebar = () => {
  const themeSettings = useContext(ThemeContext);

  return (
    <div className="sidebar">
      <div className="user-info">
        <img alt="Profile" className="profile-pic"></img>
        <h2>Jane Doe</h2>
        <p>@janedoe</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/new-releases">New Releases</Link>
          </li>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
        </ul>
      </nav>
      <div className="dark-mode-toggle">
        <span>Dark mode</span>
        {/* <Switch
                    onChange={() => themeSettings.switchMode()}
                    checked={themeSettings.mode === "dark"}
                /> */}
      </div>
    </div>
  );
};

export default Sidebar;


















































































b