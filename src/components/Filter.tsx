import * as React from "react"

import { Categories } from './layout/Categories'
import { Rate } from './layout/Rate'

export const Filter: React.FC = () => {
  return (
    <div className="filter-card">
      <div className="filter-container">
        <h4 className="filter-title">
          Filter
        </h4>
        <Categories />
        <Rate />
      </div>
    </div>
  )
}