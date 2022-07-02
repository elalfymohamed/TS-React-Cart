import * as React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { dataAsync, selectData } from "./redux/counter/dataSlice";

import { useAppDispatch, useAppSelector } from "./redux/app/hooks";

import { Footer, Loading } from "./components";

import Routers from "./router/Router";

// Hooks React
const { useEffect } = React;

function App() {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(selectData);

  useEffect(() => {
    dispatch(dataAsync());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }
  return (
    <Router>
      <Routers />
      <Footer />
    </Router>
  );
}

export default App;
