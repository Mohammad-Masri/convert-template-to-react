import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ProductForm from "../../components/ProductForm";
import { axiosObject } from "../../config/axios";
import {
  GET_PRODUCT_END_POINT,
  UPDATE_PRODUCT_END_POINT,
} from "../../config/server";

const EditProduct = ({ match }) => {
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [initValues, setInitValues] = useState({
    title: "",
    price: "",
  });

  useEffect(() => {
    axiosObject
      .get(GET_PRODUCT_END_POINT + match.params.product_id)
      .then((response) => {
        setInitValues(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  const onSubmit = (values) => {
    console.log("values\n", values);
    axiosObject
      .put(UPDATE_PRODUCT_END_POINT + match.params.product_id, values)
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
        {loading ? (
          ""
        ) : (
          <ProductForm
            title="Edit Product"
            onSubmit={onSubmit}
            initValues={initValues}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default EditProduct;
