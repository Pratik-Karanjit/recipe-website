import React from "react";
import "./nakhau.css";
const ItemCard = (props) => {
  return (
    <div className="col-10 col-md-6 col-lg-3 mx-1 mb-4 w-4 p-4">
      <div class="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.desc}</p>
          <button
            class="btn btn-secondary"
            // style={{
            //   background: "orange",
            //   border: "none",

            // }}
          >
            Teach me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
