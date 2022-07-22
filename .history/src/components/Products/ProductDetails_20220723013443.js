import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";
import "./Product.css";

function ProductDetails() {
  const context = useContext(AuthContext);
  const currentItem = context.currentItem;

  return (
    <div class="card-wrapper">
      <div class="card">
        <div class="product-imgs">
          <div class="img-display">
            {/* <div class="img-showcase">
              <img src="" alt="/#" />
              <img src="" alt="/#" />
              <img src="" alt="/#" />
              <img src="" alt="/#" />
            </div> */}
          </div>
          <div class="img-select">
            <div class="img-item">
              <a href="/#">
                <img src="" alt="" />
              </a>
            </div>
            <div class="img-item">
              <a href="/#">
                <img src="" alt="" />
              </a>
            </div>
            <div class="img-item">
              <a href="/#" data-id="3">
                <img src="" alt="" />
              </a>
            </div>
            <div class="img-item">
              <a href="/#" />
              <img src="" alt="" />
            </div>
          </div>
        </div>

        <div class="product-content">
          <h2 class="product-title">{currentItem.title}</h2>
          <a href="#" class="product-link">
            visit nike store
          </a>
          <div class="product-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <span>4.7(21)</span>
          </div>

          <div class="product-price">
            <p class="last-price">
              Old Price: <span>$257.00</span>
            </p>
            <p class="new-price">
              New Price: <span>$249.00 (5%)</span>
            </p>
          </div>

          <div class="product-detail">
            <h2>about this item: </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet veniam tempora fuga tenetur placeat sapiente architecto
              illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.
            </p>
            <ul>
              <li>
                Color: <span>Black</span>
              </li>
              <li>
                Available: <span>in stock</span>
              </li>
              <li>
                Category: <span>Shoes</span>
              </li>
              <li>
                Shipping Area: <span>All over the world</span>
              </li>
              <li>
                Shipping Fee: <span>Free</span>
              </li>
            </ul>
          </div>

          <div class="purchase-info">
            <input type="text" />
            <button type="button" class="btn">
              Add to Cart <i class="fas fa-shopping-cart"></i>
            </button>
            <button type="button" class="btn">
              Compare
            </button>
          </div>

          <div class="social-links">
            <p>Share At: </p>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="#">
              <i class="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
