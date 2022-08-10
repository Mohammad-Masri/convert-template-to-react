import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Grid, Paper, Typography } from "@mui/material";
import MyTextFailed from "./MyTextField";

const ProductForm = ({ title, onSubmit, initValues }) => {
  const createProductSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    price: Yup.number().required("Price is required"),
  });

  const formik = useFormik({
    initialValues: initValues,
    validationSchema: createProductSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        component={Paper}
        spacing={1}
        style={{ padding: 20 }}
      >
        <Grid item xs={12}>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <MyTextFailed
            fullWidth
            id="title"
            name="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MyTextFailed
            fullWidth
            id="price"
            name="price"
            label="Price"
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
        </Grid>
        <Grid item>
          <Button fullWidth size="large" type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProductForm;
