import * as React from "react";

import { Link } from "react-router-dom";

import { DataItem } from "../models"

import { FaStar } from "react-icons/fa"

interface Props {
  item: DataItem
}


export const Card: React.FC<Props> = ({ item }) => {
  const pathName = item.title.toLowerCase().replace(/ /g, "-");
  const pathCategory = item.category.toLowerCase().replace(/ /g, "-")
  return (
    <div className="card-item">
      <div className="card-body">
        <Link to={`/product/${pathName}/${pathCategory}/?=${item.id}`}>
          <div className="card-content">
            <div className="card-img">
              <img src={item.image ?? `https://via.placeholder.com/150`} alt="" width={"210px"} height={"220px"} />
            </div>
            <p className="card-title">{item.title}</p>
            <div className="card-price">
              <span>$</span>
              <span>{item.price}</span>
            </div>
            <div className="card-rate">
              <span className="star">
                <FaStar size={17} />
              </span>
              <span className="rate">
                {item.rating.rate}
              </span>
              <span className="count">
                ({item.rating.count})
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
