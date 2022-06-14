import * as React from "react"

import { useAppDispatch, useAppSelector } from "../../redux/app/hooks"

import { categoriesAsync, selectData } from "../../redux/counter/categoriesSlice"

import { DataCategories } from "../../models"


// Hooks React
const { useEffect } = React;

export const Categories = () => {
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
                onChange={() => { }}
              />
              <span className="filter-category-text">{category}</span>
            </label>
          </div>
        ))
      }
    </div>
  )
}