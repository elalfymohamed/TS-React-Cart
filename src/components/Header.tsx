import * as React from 'react';

import { Link } from "react-router-dom"

import { RiShoppingCartLine, RiHeartLine } from "react-icons/ri"

import { FiSearch } from "react-icons/fi"

const { useState, useTransition } = React;

export const Header: React.FC = () => {
  const [search, setSearch] = useState("")

  // const handelSearch = () => {

  // }

  return (
    <header className='header-page'>
      <div className='nav-page'>
        <div className='header-icon'>
          <Link to="/">
            <h4>TS</h4>
          </Link>
        </div>
        <div className='header-search'>
          <input
            type={'text'}
            className="form-search"
            aria-label='search'
            placeholder='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className='search'>
            <Link to={`/search/products/all/?=${search}`}>
              <FiSearch size={18} />
            </Link>
          </div>
        </div>
        <div className='header-options'>
          <div className='header-heart'>
            <Link to="/">
              <RiHeartLine size={32} color="#fff" />
              {/* <span className='count-option'>0</span> */}
            </Link>
          </div>
          <div className='header-cart'>
            <Link to="/">
              <RiShoppingCartLine size={32} color="#fff" />
              {/* <span className='count-option'>0</span> */}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}