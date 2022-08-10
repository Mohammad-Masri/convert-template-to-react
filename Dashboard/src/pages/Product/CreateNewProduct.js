import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ProductForm from "../../components/ProductForm";
import { axiosObject } from "../../config/axios";
import { CREATE_PRODUCT_END_POINT } from "../../config/server";

const CreateNewProduct = () => {
  const history = useHistory();

  const [initValues, setInitValues] = useState({
    title: "",
    price: "",
  });

  const onSubmit = (values) => {
    console.log("values\n", values);
    axiosObject
      .post(CREATE_PRODUCT_END_POINT, values)
      .then(() => {
        history.push("/product");
        window.location.reload(true);
      })
      .catch((error) => {});
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      style={{ padding: 30 }}
      spacing={1}
    >
      <Grid item xs={12}>
        <ProductForm
          title="Create New Product"
          onSubmit={onSubmit}
          initValues={initValues}
        />
      </Grid>
    </Grid>
  );
};

export default CreateNewProduct;
