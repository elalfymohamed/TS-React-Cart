import * as React from "react";

import { useAppDispatch, useAppSelector } from "../redux/app/hooks";

import { productAsync, selectData } from "../redux/counter/productSlice";


import { Loading, Header } from "../components";

import { DataItem } from "../models";

// Hooks React
const { useEffect } = React;

export const Product: React.FC = () => {
  const idParams = window.location.search.substring(2) as string;
  const dispatch = useAppDispatch();

  const { loading, productData } = useAppSelector(selectData);


  useEffect(() => {
    dispatch(productAsync(idParams));
  }, [dispatch, idParams]);

  if (loading) {
    return <Loading />;
  }

  const { title, price, description } = productData as DataItem

  return (
    <>
      <Header />
      <section className="section-product">
        <div className="product-container">

          <h3>{title}</h3>
          <h3>{price}</h3>
          <h3>{description}</h3>
        </div>
      </section>
    </>
  );
};
