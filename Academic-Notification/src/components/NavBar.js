import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaClipboardList, FaBook } from "react-icons/fa";
import '../styles.css';

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="navbar-container">
      <div className={`navbar ${collapsed ? "collapsed" : ""}`}>
        <button onClick={() => setCollapsed(!collapsed)}>
          <FaBars size={30} />
        </button>

        <ul>
          <li>
            <Link to="/">
              <FaHome />
              <span>ID Select</span>
            </Link>
          </li>
          <li>
            <Link to="/degree-progress/:studentID">
              <FaClipboardList />
              <span>Progress Page</span>
            </Link>
          </li>
          <li>
            <Link to="/wishlist">
              <FaBook />
              <span>Wish List</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
