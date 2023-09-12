import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Recipe from "./Recipe";
import Favourites from "./Favourites";
import QuickBites from "./QuickBites";
import HomePage from "./HomePage";
import HOE from "./HOE";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Outlet></Outlet>
            </div>
          }
        >
          <Route
            index
            element={
              <div>
                <HomePage></HomePage>
                {/* <HOE></HOE> */}
              </div>
            }
          ></Route>
        </Route>
        <Route
          path="/recipe"
          element={
            <div>
              <Outlet></Outlet>
            </div>
          }
        >
          <Route
            index
            element={
              <div>
                <Recipe></Recipe>
              </div>
            }
          ></Route>
        </Route>
        <Route
          path="quick-bites"
          element={
            <div>
              <Outlet></Outlet>
            </div>
          }
        >
          <Route
            index
            element={
              <div>
                <QuickBites></QuickBites>
              </div>
            }
          ></Route>
        </Route>
        <Route
          path="favourites"
          element={
            <div>
              <Outlet></Outlet>
            </div>
          }
        >
          <Route
            index
            element={
              <div>
                <Favourites></Favourites>
              </div>
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
