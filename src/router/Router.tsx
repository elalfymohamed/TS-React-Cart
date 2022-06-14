import { useRoutes } from "react-router-dom"

import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Search } from "../pages/Search";



const Router: React.FC = () => {

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product/:title/:id",
      element: <Product />
    },
    {
      path: "/search/products/all/:search",
      element: <Search />
    }
  ])
  return routes;
};

export default Router;
