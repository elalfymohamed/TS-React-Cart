import * as React from "react";

import { useAppSelector } from "../redux/app/hooks";
import { selectData } from "../redux/counter/dataSlice";

import { DataItem } from "../models";

import { Card, Header } from "../components";

// Hooks React
const { useEffect, useState } = React;

export const Search: React.FC = () => {
  const searchParams = window.location.search.substring(2) as string;
  const { data } = useAppSelector(selectData);

  const [researchRes, setResearchRes] = useState<DataItem[]>([]);

  useEffect(() => {
    if (!searchParams) return;
    const res = data.filter((item: DataItem) =>
      item.title.toLowerCase().includes(searchParams.toLowerCase())
    );
    setResearchRes(res);
  }, [data, searchParams]);

  return (
    <>
      <Header />
      <section className="section-search">
        <div className="container">
          {researchRes.length ? (
            <div className="search-products">
              {researchRes.map((item: DataItem) => (
                <div className="product-item" key={item.id}>
                  <Card item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="products-not-data">
              <h3>No results found for "{searchParams}"</h3>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
