import * as React from "react";

import { useAppDispatch, useAppSelector } from "../redux/app/hooks";

import { choicesData } from "../redux/counter/userChoicesSlice";

import { DataItem } from "../models";
import { Header } from "../components";
import { FaStar } from "react-icons/fa";

export const Cart: React.FC = () => {
  const { cart } = useAppSelector(choicesData);
  return (
    <>
      <Header />
      <section className="cart-section">
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((item: DataItem) => (
              <div className="card-item" key={item.id}>
                <img className="card-image" src={item.image} alt={item.title} />
                <div className="card-info">
                  <p className="card-title">{item.title}</p>
                  <div className="card-price">
                    <span>$</span>
                    <span>{item.price}</span>
                  </div>
                  <div className="card-rate">
                    <span className="star">
                      <FaStar size={17} />
                    </span>
                    <span className="rate">{item.rating.rate}</span>
                    <span className="count">({item.rating.count})</span>
                  </div>
                  <div className="card-quantity">
                    <span>quantity: </span>
                    {item.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};
