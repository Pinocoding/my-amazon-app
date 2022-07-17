import React from "react";
import { HeadPhonesDATA } from "../../FakeData/HeadPhonesDATA";

import "../Product.css";

function HeadSetsCard() {
  return (
    <div className="section-card">
      <h4>RESULTS</h4>

      {HeadPhonesDATA.map((item) => {
        return (
          <div class="card">
            <div class="img-container">
              <img
                src="https://www.downloadclipart.net/large/sony-headphone-png-photos.png"
                alt=""
              />
            </div>
            <div class="infos">
              <h3 class="name">Wirless Headphone</h3>
              <h2 class="price">$255.3</h2>
              <button class="btn btn-buy">Buy now</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HeadSetsCard;
