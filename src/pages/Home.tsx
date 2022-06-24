import * as React from "react";

import { useAppDispatch, useAppSelector } from "../redux/app/hooks";

import { dataAsync, selectData } from "../redux/counter/dataSlice";

import { filtersData } from "../redux/counter/filterSlice";

import { DataItem } from "../models";

import { Loading, Header, Card, Filter } from "../components";

// Hooks React
const { useEffect } = React;

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { loading } = useAppSelector(selectData);
  const { filters } = useAppSelector(filtersData);

  useEffect(() => {
    dispatch(dataAsync());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <main className="main-page">
        <div className="container main-container">
          <div className="products">
            {filters.length ? (
              <div className="products-content">
                {filters.map((item: DataItem) => (
                  <div className="product-item" key={item.id}>
                    <Card item={item} />
                  </div>
                ))}
              </div>
            ) : (
              <h5>Not Found products</h5>
            )}
          </div>
          <div className="products-filter">
            <Filter />
          </div>
        </div>
      </main>
    </>
  );
};
