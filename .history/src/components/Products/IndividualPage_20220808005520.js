import React, { useEffect, useContext, useState } from "react";
import { useStateValue } from "../DataLayer/Datalayer";
import { DataContext } from "../DataLayer/Datalayer";
import StarRateIcon from "@mui/icons-material/StarRate";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "./Product.css";
import Author from "../Author/Author";
import ShowMoreLessBtn from "../ShowMoreLessBtn/ShowMoreLessBtn";
import AlSoLike from "../AlSoLike/AlSoLike";
import ProductCarousel from "../CarouselForm/ProductCarousel";
import ProductDetails from "../ProductDetail/ProductDetails";

function IndividualPage() {
  const [img, setImg] = useState();
  const context = useContext(DataContext);
  const addToCart = context.addToCart;
  const buyNow = context.buyNow;

  const [{ itembox }] = useStateValue();
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(itembox));
  }, [itembox]);

  const handleAddToCart = (item) => {
    addToCart(item);
  };
  const handleBuyNow = (item) => {
    buyNow(item);
  };
  const handleHoverLeave = () => {
    setImg();
  };
  const handleHover = (item) => {
    setImg(item.image);
  };

  return (
    <div className="individual__wrap">
      {itembox.map((item) => {
        return (
          <>
            <div>{console.log(item)}</div>
            <div key={item.id} className="individual__container">
              <div className="individualleft__column">
                <div className="individualleft__mainimg">
                  <div className="individualleft__InnerImageZoom">
                    <InnerImageZoom
                      src={item.image}
                      zoomSrc={item.image}
                      zoomScale="1.3"
                      zoomPreload="true"
                      zoomType="hover"
                    />
                  </div>
                  <div className="individualleft__ProductCarousel">
                    <ProductCarousel img={item.image} />
                  </div>
                </div>

                <div className="individualleft__altimg">
                  <div
                    className="individualleft__altimgmini"
                    onMouseOver={() => handleHover(item)}
                    onMouseLeave={() => handleHoverLeave(item)}
                  >
                    <span>1</span>
                    <img src={item.image} alt="" />
                  </div>
                  <div
                    onMouseOver={() => handleHover(item)}
                    onMouseLeave={() => handleHoverLeave(item)}
                    className="individualleft__altimgmini"
                  >
                    <span>2</span>
                    <img src={item.image} alt="" />
                  </div>
                  <div
                    onMouseOver={() => handleHover(item)}
                    onMouseLeave={() => handleHoverLeave(item)}
                    className="individualleft__altimgmini"
                  >
                    <span>3</span>
                    <img src={item.image} alt="" />
                  </div>
                  <div
                    onMouseOver={() => handleHover(item)}
                    onMouseLeave={() => handleHoverLeave(item)}
                    className="individualleft__altimgmini"
                  >
                    <span>4</span>
                    <img src={item.image} alt="" />
                  </div>
                </div>
              </div>
              <div className="individualright__column">
                <h1>{item.title}</h1>
                {item.author && (
                  <p className="individualright__columnAuthor">
                    by {item.author.name} (Author)
                  </p>
                )}

                <div className="product__description">
                  <p className="product__rating">
                    {Array(item.rating)
                      .fill()
                      .map(() => (
                        <StarRateIcon />
                      ))}
                  </p>
                  <div className="product__info">
                    <p className="product__description">
                      <h3>
                        {item.author ? "About this Book" : "About this item"}
                      </h3>

                      <ShowMoreLessBtn limit={350}>
                        {item.description}
                      </ShowMoreLessBtn>
                    </p>
                    {item.author && (
                      <div>
                        {" "}
                        <div
                          style={{
                            maxWidth: "450px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <p>
                              <strong>
                                Publisher : Atria (August 2, 2016)
                              </strong>
                            </p>
                            <p>
                              <strong>Language : English</strong>
                            </p>
                            <p>
                              <strong>Paperback : 384 pages</strong>
                            </p>
                            <p>
                              <strong>Item Weight: 10.4 ounces</strong>
                            </p>
                            <p>
                              <strong>Dimensions :</strong>
                            </p>
                          </div>
                          <div>
                            <p>{item.author.publisher}</p>
                            <p>{item.author.language}</p>
                            <p> {item.author.paperback}</p>
                            <p> {item.author.Itemweight}</p>
                            <p> {item.author.dimensions}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    {item.details && (
                      <div
                        style={{
                          maxWidth: "450px",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <p>
                            <strong>Brand :</strong>
                          </p>
                          <p>
                            <strong>Color :</strong>
                          </p>
                          <p>
                            <strong>Connectivity Technology:</strong>
                          </p>
                          <p>
                            <strong>Model :</strong>
                          </p>
                          <p>
                            <strong>Noise :</strong>
                          </p>
                        </div>
                        <div>
                          <p>{item.details.brand}</p>
                          <p>{item.details.color}</p>
                          <p> {item.details.connectivity}</p>
                          <p> {item.details.model}</p>
                          <p> {item.details.noise}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="product__price">
                  <div>Price&nbsp;:&nbsp;{item.price}$</div>
                </div>

                <div className="product__buy">
                  <button
                    className="cart__btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to cart
                  </button>

                  <button
                    onClick={() => handleBuyNow(item)}
                    className="buy__btn"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            {item.details && <ProductDetails img={item.image} />}
            {item.author && (
              <Author name={item.author.name} infor={item.author.infor} />
            )}
          </>
        );
      })}

      <div className="relatedProduct">
        <AlSoLike />
      </div>
    </div>
  );
}

export default IndividualPage;
