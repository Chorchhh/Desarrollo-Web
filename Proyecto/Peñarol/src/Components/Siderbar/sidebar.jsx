import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./../../Styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
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
            <ul>
              <li>
                <Link to="/new-releases/this-week">This week</Link>
              </li>
              <li>
                <Link to="/new-releases/this-month">This month</Link>
              </li>
              <li>
                <Link to="/new-releases/coming-soon">Coming soon</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/popular">Popular</Link>
            <ul>
              <li>
                <Link to="/popular/last-searches">Last searches</Link>
              </li>
              <li>
                <Link to="/popular/best-of-the-year">Best of the year</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
