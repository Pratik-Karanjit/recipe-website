import React from "react";
import "./navbar.css";
import "./home.css";
const HomePage = () => {
  return (
    <div className="home">
      <div className="homebg">
        <picture className="hero">
          <source srcset="back2.jpg" type="" />
          <img src="bg.jpg" class="img-fluid img-thumbnail" alt="image" />
        </picture>
      </div>
      {/* hello */}
    </div>
  );
};

export default HomePage;
