import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const MyNavLinks = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg nav-bar shadow-5-strong bg-transparent fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="Pakau.svg" alt="logo" style={{ height: "90px" }} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active">
                  <NavLink to={"/recipe"} style={{ marginRight: "20px" }}>
                    Recipes
                  </NavLink>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <NavLink to={"/quick-bites"} style={{ marginRight: "20px" }}>
                    Quick-Bites
                  </NavLink>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <NavLink to={"/favourites"} style={{ marginRight: "20px" }}>
                    Favourites
                  </NavLink>
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

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <NavLink to={"/sign-up"} style={{ marginRight: "20px" }}>
                  Sign in
                </NavLink>
              </li>

              <li>
                <NavLink to={"/login-in"} style={{ marginRight: "20px" }}>
                  Log-in
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MyNavLinks;
