import * as React from "react";

import { useAppSelector } from "../redux/app/hooks";

import { filtersData } from "../redux/counter/filterSlice";

import { DataItem } from "../models";

import { Header, Card, Filter } from "../components";

export const Home: React.FC = () => {
  const { filters } = useAppSelector(filtersData);

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
