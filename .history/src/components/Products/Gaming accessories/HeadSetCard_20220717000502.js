import React from "react";
import { DATA } from ".././cons";

import "../Product.css";

function HeadSetsCard() {
  DATA.map((item, index) => {
    //   console.log(item.image);
    return (
      <div className="headsetscard">
        <h4>RESULTS</h4>
        <div className="headsetscard__cell">
          <img src={item.image} alt="" />
          <div className="headsetscard__cell__info">
            <div className="tittle">{item.title}</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similiquerem ipsum dolor sit amet consectetur adipisicing elit.
              Similiquerem ipsum dolor sit amet consectetur adipisicing elit.
              Similiquerem ipsum dolor sit amet consectetur adipisicing elit.
              Similiquerem ipsum dolor sit amet consectetur adipisicing elit.
              Similiquerem ipsum dolor sit amet consectetur adipisicing elit.
              Similique
            </div>
            <div className="price">@$@#@$#</div>
          </div>
        </div>
      </div>
    );
  });
}

export default HeadSetsCard;
