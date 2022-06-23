import * as React from "react"

import { useAppDispatch, useAppSelector } from "../../redux/app/hooks"

import { categoriesAsync, selectData } from "../../redux/counter/categoriesSlice"
import { filterCategory } from "../../redux/counter/filterSlice"

import { DataCategories } from "../../models"


// Hooks React
const { useEffect } = React;

export const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(selectData)


  useEffect(() => {
    dispatch(categoriesAsync())
  }, [dispatch])


  return (
    <div className="filter-categories">
      <h6 className="title-section">Categories :</h6>
      {
        categories.map((category: DataCategories, index: number) => (
          <div className="filter-category" key={index}>
            <label className="filter-category-label">
              <input type="checkbox" className="filter-category-input"
                value={category}
                onChange={(e) => {
                  dispatch(filterCategory(e.target.value))
                }}
              />
              <span className="filter-category-text">{category}</span>
            </label>
          </div>
        ))
      }
    </div>
  )
}