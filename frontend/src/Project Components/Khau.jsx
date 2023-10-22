import React from "react";
import "./style.css"; // Add the import for your external CSS file
import ItemCard from "./ItemCard";

const data = {
  productData: [
    {
      name: "Mo:Mo",
      image: "momo.png",
      desc: "Unwrapping happiness in every bite",
    },
    {
      name: "Thukpa",
      image: "momo.png", // Change the image URLs as needed
      desc: "Dish that will make you warm and cozy in the rain",
    },
    {
      name: "Chatamari",
      image: "momo.png",
      desc: "Rice dough based pizza from the newar",
    },
    // {
    //   name: "Sel Roti",
    //   image: "momo.png",
    //   desc:"qqqqqqqqqqqqq"

    // },
  ],
};

const Khau = () => {
  return (
    <div className="row  justify-content-center">
      {data.productData.map((value, i) => {
        return (
          <ItemCard
            img={value.image}
            name={value.name}
            desc={value.desc}
            key={i}
          ></ItemCard>
        );
      })}
    </div>
  );
};

export default Khau;
