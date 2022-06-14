import * as React from "react";

import { Header } from "../components/Header"

export const Search: React.FC = () => {
  return (
    <>
      <Header />
      <section className="section-Search">
        <div>
          <h4 className="title-section">Search</h4>
        </div>
      </section>
    </>
  )
}