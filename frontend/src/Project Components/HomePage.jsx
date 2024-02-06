import React from "react";
import "./style.css";
// import ItemCard from "./ItemCard";
import Khau from "./Khau";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HomePage = () => {
  return (
    // <div className="home">
    //   {/* <div
    //     className="bg"
    //     style={{
    //       width: "100%",
    //       height: "500px",
    //       backgroundSize: "cover",
    //       backgroundImage: "url('./back2.jpg')",
    //     }}
    //   ></div> */}
    //   <div className="homebg">
    //     <div className="image-container">
    //       <div className="img-overlay"></div>
    //       <picture>
    //         <source srcset="back2.jpg" type="" />
    //         <img
    //           src="back2.jpg"
    //           class="img-fluid img-thumbnail"
    //           alt="image"
    //           // style={{
    //           //   width: "100%",
    //           //   height: "500px",
    //           //   backgroundSize: "cover",
    //           //   backgroundImage: "url('./back2.jpg')",
    //           // }}
    //         />
    //       </picture>

    //       {/* <div className="logo">
    //         <source srcset="Pakau.svg" type="" />
    //         <img src="Pakau.svg" class="img-fluid img-thumbnail" alt="image" />
    //       </div> */}
    //     </div>

    //     <div className="foodDiv">
    //       <picture>
    //         <source srcset="restbg.jpg" type="" />
    //         <img src="restbg.jpg" class="img-fluid img-thumbnail" alt="image" />
    //       </picture>
    //     </div>
    //   </div>
    //   {/* hello */}
    //   {/* phone ko lagi photo hide */}
    // </div>
    <div className="home">
      <div className="homePage" style={{ backgroundImage: "url(/back2.jpg)" }}>
        <div className="color-overlay d-flex justify-content-center align-items-center">
          <img className="logs" src="Pakau.svg" alt="logo" />
          <div className="search d-flex justify-content-center align-items-center">
            <form>
              <input
                type="text"
                name=""
                id="searchme"
                style={{
                  width: "400px",
                  height: "50px",
                  borderRadius: "30px",
                  border: "none",
                }}
              />
            </form>
          </div>
        </div>
      </div>
      <section className="background d-flex justify-content-center align-items-center">
        <h1 className="heading">Discover the rich tastes of Nepal</h1>
        {/* <Products></Products> */}
        {/* <ItemCard img="" title="title" desc="desc"></ItemCard> */}
        {/* <AauKhau></AauKhau> */}
        <Khau></Khau>
      </section>
    </div>
  );
};

export default HomePage;
