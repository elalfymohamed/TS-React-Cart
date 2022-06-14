import * as React from "react";

import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { dataAsync, selectData } from "../redux/counter/dataSlice";

import { DataItem } from "../models";

import { Loading } from "../components/Loading";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Filter } from "../components/Filter";

const { useEffect } = React;

export const Home: React.FC = () => {
  const { data, loading } = useAppSelector(selectData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dataAsync());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  console.log(data);

  return (
    <>
      <Header />
      <main className="main-page">
        <div className="container">
          <div className="products">
            <div className="products-content">
              {data.map((item: DataItem) => (
                <div className="product-item" key={item.id}>
                  <Card item={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="products-filter">
            <Filter />
          </div>
        </div>
      </main>
    </>
  );
};
