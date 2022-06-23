import * as React from "react";

import { useAppDispatch } from "../../redux/app/hooks"
import { filterRate } from "../../redux/counter/filterSlice";

import { FaStar } from "react-icons/fa"


export const Rate: React.FC = () => {
  const rate = [1, 2, 3, 4, 5] as number[];

  const dispatch = useAppDispatch()

  return (
    <div className="rate-card">
      <div className="rate-container">
        <h6 className="title-section">
          Rate :
        </h6>
        <div className="rate-container-stars">
          {
            rate.map((item: number, index: number) => (
              <div className="rate-star" key={index}>
                <label className="filter-rate-label">
                  <input type="checkbox" className="filter-rate-input"
                    value={item}
                    onChange={(e) => { dispatch(filterRate(+e.target.value)) }}
                  />
                  <div className="count-star">
                    {item}
                    <span className="star">
                      <FaStar size={17} color="#ffc107" />
                    </span>
                  </div>
                </label>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

