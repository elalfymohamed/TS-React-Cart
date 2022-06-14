import { useRoutes } from "react-router-dom"

import { Home } from "../pages/Home";
import { Product } from "../pages/Product";



const Router: React.FC = () => {

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "product/:title/:id",
      element: <Product />
    }
  ])
  return routes;
};

export default Router;
