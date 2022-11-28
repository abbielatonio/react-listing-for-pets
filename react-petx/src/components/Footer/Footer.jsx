import React from "react";
import { Link } from "react-router-dom";
import footerlogo from "../../assets/logowhite.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="content">
              <Link reloadDocument to="/">
                <img src={footerlogo} alt="Logofoot" />
              </Link>
            </div>
          </div>
          <div className="col">
            <h3>Quick Links</h3>
            <div className="nav">
              <ul>
                <li>
                  <Link reloadDocument to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link reloadDocument to="/pets">
                    Pets
                  </Link>
                </li>
                <li>
                  <Link reloadDocument to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link reloadDocument to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <h3>About Us</h3>
            <div className="right">
              <p>
                Hope4Paws is an online platform that helps the users locate the
                pets available nearby for adoption. The goal of the project is
                to help get homeless pets out of the shelters and into loving
                homes.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr />
            <div className="copyRights">
              <p className="copy">HOPE4PAWS </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
