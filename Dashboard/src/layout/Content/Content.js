import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import styles from "./Content.module.css";

const Dashboard = React.lazy(() => import("../../pages/Dashboard/Dashboard"));

const AllProducts = React.lazy(() => import("../../pages/Product/AllProducts"));
const CreateNewProduct = React.lazy(() =>
  import("../../pages/Product/CreateNewProduct")
);
const EditProduct = React.lazy(() => import("../../pages/Product/EditProduct"));

const Content = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} name="Dashboard" component={Dashboard} />
        <Route
          path="/product"
          exact={true}
          name="All Products"
          component={AllProducts}
        />
        <Route
          path="/product/create"
          exact={true}
          name="Create New Product"
          component={CreateNewProduct}
        />
        <Route
          path="/product/update/:product_id"
          exact={true}
          name="Edit Product"
          component={EditProduct}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default Content;
