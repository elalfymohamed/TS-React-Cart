import * as React from "react"

import { Categories } from './layout/Categories'
import { Rate } from './layout/Rate';

import { useAppDispatch, useAppSelector } from "../redux/app/hooks";

import { selectData } from "../redux/counter/dataSlice";
import { setData } from "../redux/counter/filterSlice";



// Hooks React
const { useEffect } = React;

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(selectData);


  useEffect(() => {
    dispatch(setData(data));
  }, [data, dispatch]);


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