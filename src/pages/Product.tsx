import * as React from "react";

import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/app/hooks";

import { productAsync, selectData } from "../redux/counter/productSlice";

import { FaStar } from "react-icons/fa";

import { Loading, Header } from "../components";

import { DataItem } from "../models";

// Hooks React
const { useEffect } = React;

export const Product: React.FC = () => {
  const idParams = window.location.search.substring(2) as string;
  const dispatch = useAppDispatch();

  const { loading, productData } = useAppSelector(selectData);

  useEffect(() => {
    dispatch(productAsync(idParams));

    document.body.classList.add("product");

    return () => {
      document.body.classList.remove("product");
    };
  }, [dispatch, idParams]);

  if (loading) {
    return <Loading />;
  }

  const { title, price, description, image, category, rating } =
    productData as DataItem;

  return (
    <>
      <Header />
      <section className="section-product">
        <div className="product-container">
          <div className="product-image">
            <img
              src={image}
              alt={title}
              width={"100%"}
              height={"100%"}
              className="image"
            />
          </div>
          <div className="product-info">
            <Link to={`/products/${category}`} className="product-category">
              {category}
            </Link>
            <h2 className="product-title">{title}</h2>
            <div className="product-rate">
              <div className="product-star">
                {rating?.rate}
                <span>
                  {" "}
                  <FaStar size={11} />
                </span>
              </div>
              <div className="product-ratings">
                <span>{rating?.count} Ratings</span>
                <div className="line" />
              </div>
            </div>
            <h2 className="product-price">$&nbsp;{price}</h2>
            <p className="product-description">{description}</p>
            <div className="product-quantity">
              <h6>quantity</h6>
              <div className="product-cart">
                <div></div>
                <button className="btn-cart" type={"button"}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
