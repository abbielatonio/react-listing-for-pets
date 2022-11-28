import React from "react";
import headerlogo from "../../assets/logo.png";
import { Link } from "react-router-dom";

/*had to useLink reloaddocument cos link alone requires me to refresh the page :c */

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="top row">
          <div className="col">
            <Link reloadDocument to="/">
              {" "}
              <img src={headerlogo} className="logo" alt="header" />{" "}
            </Link>{" "}
          </div>
          <div className="col">
            <div className="nav">
              <ul>
                <li>
                  <Link reloadDocument to="/">
                    home
                  </Link>{" "}
                </li>
                <li>
                  <Link reloadDocument to="/pets">
                    adopt
                  </Link>{" "}
                </li>
                <li>
                  <Link reloadDocument to="/about">
                    about
                  </Link>{" "}
                </li>
                <li>
                  <Link reloadDocument to="/contact">
                    contact
                  </Link>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="buttons">
              <Link>
                Sign in
              </Link>
              <Link>
Register              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
