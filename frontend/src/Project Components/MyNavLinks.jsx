import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import SignUp from "./SignUp";

const MyNavLinks = () => {
  const [navBar, setNavbar] = useState(false);
  const [logo, setLogo] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 20) {
      setNavbar(true);
      setLogo(true);
    } else {
      setNavbar(false);
      setLogo(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  // console.log(window.scrollY);
  return (
    <div className="header navbar-expand-lg nav-bar shadow-5-strong  fixed-top ">
      {/* <nav className={navBar ? "navBar active" : "navbar"}> */}
      {/* <nav
        className="navbar navbar-expand-lg nav-bar shadow-5-strong  fixed-top"
      > */}
      <nav className={navBar ? "navbar active" : "navbar"}>
        <div className="container-fluid">
          <a className={logo ? "logo active" : "logo"}>
            <img src="Pakau.svg" alt="logo" style={{ height: "40px" }} />
          </a>
          <button
            class="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon  "></span>
          </button>
          <div
            className="collapse active navbar-collapse  "
            // {
            //  { navBar ? "navBar:active" : "navbar navbar-expand-lg nav-bar shadow-5-strong  fixed-top"}
            // }
            id="navbarSupportedContent"
            style={{ paddingLeft: "15vh" }}
          >
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0  ">
              <li class="nav-item">
                <a class="nav-link active">
                  <NavLink to={"/recipe"} style={{ marginRight: "25vh" }}>
                    Recipes
                  </NavLink>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <NavLink to={"/quick-bites"} style={{ marginRight: "25vh" }}>
                    Quick-Bites
                  </NavLink>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <NavLink to={"/favourites"}>Favourites</NavLink>
                </a>
              </li>

              {/* <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
            </ul>
            {/* <form class="d-flex ms-auto" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}

            <ul className="navbar-nav ms-auto mb-2 mb-lg-3">
              <li>
                <SignUp></SignUp>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MyNavLinks;
