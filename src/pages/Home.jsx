import * as React from "react";

import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { dataAsync, selectData } from "../redux/counter/dataSlice";

import { DataItem } from "../models"


const { useEffect } = React;

export const Home:React.FC = ()  =>  {
  const { data, loading } = useAppSelector(selectData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dataAsync());
  }, [dispatch]);

  if (loading) {
    return <h1>loading...</h1>;
  }

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        {data.map((item: DataItem) => (
          <h4 key={item.id}>{item.title}</h4>
        ))}
      </header>
    </div>
  );
}
