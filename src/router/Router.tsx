import { useRoutes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Products } from "../pages/Products";
import { Search } from "../pages/Search";

const Router: React.FC = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product/:title/:id",
      element: <Product />,
    },
    {
      path: "/products/:category",
      element: <Products />,
    },
    {
      path: "/search/products/all/",
      element: <Search />,
    },
  ]);
  return routes;
};

export default Router;
