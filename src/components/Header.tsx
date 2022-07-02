import * as React from "react";

import { Link, useNavigate } from "react-router-dom";
//  react icons
import { RiShoppingCartLine, RiHeartLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
// redux
import { useAppSelector } from "../redux/app/hooks";
import { selectData } from "../redux/counter/dataSlice";
import { choicesData } from "../redux/counter/userChoicesSlice";
// interface
import { DataItem, CountOption } from "../models";
// layout
import { ItemsSearch } from "./layout/ItemsSearch";

// Hooks React
const { useState, useTransition, useEffect } = React;

export const Header: React.FC = () => {
  let navigate = useNavigate();
  const QUANTITY_ZERO = 0 as number;

  const { data } = useAppSelector(selectData);
  const { cart, heart } = useAppSelector(choicesData);

  const [search, setSearch] = useState<string>("");
  const [filterTerm, setFilterTerm] = useState<DataItem[]>();
  const [isPending, startTransition] = useTransition();
  const [countOption, setCountOption] = useState<CountOption>({
    countInCart: 0,
    countInHeard: 0,
  });

  const handelSearch = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    startTransition(() => setSearch(e.target.value));
  };

  const handelClickSearch = () => {
    navigate(`/search/products/all/?=${search}`);
  };

  useEffect(() => {
    const filterSearch = data.filter((item: DataItem) => {
      return (
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilterTerm(filterSearch);
  }, [data, search]);

  useEffect(() => {
    let count = 0 as number;

    cart.map((item) => (count += item.quantity));

    setCountOption({
      countInHeard: heart.length,
      countInCart: count,
    });
  }, [cart, heart]);

  return (
    <header className="header-page">
      <div className="nav-page">
        <div className="header-icon">
          <Link to="/">
            <h4>TS</h4>
          </Link>
        </div>
        <div className="header-search">
          <input
            type={"text"}
            className="form-search"
            aria-label="search"
            placeholder="search"
            value={search}
            onChange={handelSearch}
          />
          <div className="search">
            <button
              className="btn"
              type={"button"}
              onClick={handelClickSearch}
              disabled={!search}
            >
              <FiSearch size={18} />
            </button>
          </div>
          {search && (
            <div className="search-content">
              <div className="">
                {isPending && <h3>loading....</h3>}

                <div className="items-search">
                  {filterTerm?.map((item: DataItem) => (
                    <div key={item.id}>
                      <ItemsSearch item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="header-options">
          <div className="header-heart">
            <Link to="/">
              <RiHeartLine size={32} color="#fff" />
              {countOption.countInHeard > QUANTITY_ZERO && (
                <span className="count-option">{countOption.countInHeard}</span>
              )}
            </Link>
          </div>
          <div className="header-cart">
            <Link to="/cart">
              <RiShoppingCartLine size={32} color="#fff" />
              {countOption.countInCart > QUANTITY_ZERO && (
                <span className="count-option">{countOption.countInCart}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
