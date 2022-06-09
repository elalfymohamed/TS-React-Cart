import * as React from "react";
import { Link } from "react-router-dom";


export const Card = () => {
  return (
    <div className="card">
      <div className="card-body">
        <Link to="/">
          <div className="card-content">
            <div className="card-img">
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
            <h5 className="card-title">Card title</h5>
            <div className="card-price">
              <span>$</span>
              <span>99</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
