import * as React from "react";

import { Header } from "../components/Header"

export const Product: React.FC = () => {
  return (
    <>
      <Header />
      <section className="section-product">
        <div>
          <h4 className="title-section">Product</h4>
        </div>
      </section>
    </>
  )
}