import * as React from "react";

import { useParams } from "react-router-dom";

import { useAppSelector } from "../redux/app/hooks";

import { selectData } from "../redux/counter/dataSlice";

import { DataItem } from "../models";

import { Card, Header } from "../components";

// Hooks React
const { useEffect, useState } = React;

export const Products = () => {
  const { category } = useParams();

  const { data } = useAppSelector(selectData);

  const [products, setProducts] = useState<DataItem[]>([]);

  useEffect(() => {
    const res = data.filter((item: DataItem) => item.category === category);
    setProducts(res);
  }, [data, category]);

  return (
    <>
      <Header />
      <section className="section-products">
        <div className="container">
          <h2>
            all products {category} ({products.length})
          </h2>
          <div className="products-category">
            {products.map((item: DataItem) => (
              <div className="product-item" key={item.id}>
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
