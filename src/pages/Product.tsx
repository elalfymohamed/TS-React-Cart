import * as React from "react";

import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/app/hooks";

import { productAsync, selectData } from "../redux/counter/productSlice";
import {
  choicesData,
  setCart,
  setHeart,
} from "../redux/counter/userChoicesSlice";

import { FaStar } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { Loading, Header } from "../components";

import { DataItem } from "../models";

import { MdKeyboardArrowDown } from "react-icons/md";

// Hooks React
const { useEffect, useState } = React;

export const Product: React.FC = () => {
  const idParams = window.location.search.substring(2) as string;
  const dispatch = useAppDispatch();

  const { loading, productData } = useAppSelector(selectData);
  const { heart } = useAppSelector(choicesData);

  const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as number[];

  const [openMenuCount, setOpenMenuCount] = useState<boolean>(false);
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [productInHeart, setProductInHeart] = useState<boolean>(false);

  const handelClickProductQuantity = (quantity: number) => {
    setProductQuantity(quantity);
    setOpenMenuCount(false);
  };

  useEffect(() => {
    dispatch(productAsync(idParams));

    document.body.classList.add("product");

    return () => {
      document.body.classList.remove("product");
    };
  }, [dispatch, idParams]);

  useEffect(() => {
    const productHeart = heart.some((item) => item.id === +idParams) as boolean;
    setProductInHeart(productHeart);
  }, [heart, idParams]);

  if (loading) {
    return <Loading />;
  }

  const product = productData as DataItem;

  return (
    <>
      <Header />
      <section className="section-product">
        <div className="product-container">
          <div className="product-image">
            <img
              src={product.image}
              alt={product.title}
              width={"100%"}
              height={"100%"}
              className="image"
            />
          </div>
          <div className="product-info">
            <div className="product-info-CH">
              <Link
                to={`/products/${product.category}`}
                className="product-category"
              >
                {product.category}
              </Link>
              <div
                className="product-heart"
                role={"button"}
                onClick={() => dispatch(setHeart(product))}
              >
                {productInHeart ? (
                  <AiFillHeart size={26} color="#3866df" />
                ) : (
                  <AiOutlineHeart size={26} />
                )}
              </div>
            </div>
            <h2 className="product-title">{product.title}</h2>
            <div className="product-rate">
              <div className="product-star">
                {product.rating?.rate}
                <span>
                  {" "}
                  <FaStar size={11} />
                </span>
              </div>
              <div className="product-ratings">
                <span>{product.rating?.count} Ratings</span>
                <div className="line" />
              </div>
            </div>
            <h2 className="product-price">$&nbsp;{product.price}</h2>
            <p className="product-description">{product.description}</p>
            <div className="product-quantity-cart">
              <div className="product-quantity-a">
                <h6>quantity</h6>
                <div
                  className={`product-quantity-select ${
                    openMenuCount ? "product-quantity-select-open" : ""
                  }`}
                  role={"button"}
                  onClick={() => setOpenMenuCount(!openMenuCount)}
                >
                  <div className="product-quantity-btn">
                    <span>{productQuantity}</span>
                  </div>
                  <div className="product-quantity-arrow">
                    <MdKeyboardArrowDown size="22" />
                  </div>
                </div>

                {openMenuCount && (
                  <div className="product-quantity-menu">
                    {quantity.map((item: number, index: number) => (
                      <div
                        key={index}
                        role={"button"}
                        className="product-count"
                        onClick={() => handelClickProductQuantity(item)}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="product-cart">
                <button
                  className="btn-cart"
                  type={"button"}
                  onClick={() =>
                    dispatch(
                      setCart({ product: product, quantity: productQuantity })
                    )
                  }
                >
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
