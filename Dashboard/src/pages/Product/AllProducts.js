import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosObject } from "../../config/axios";
import {
  DELETE_PRODUCT_END_POINT,
  GET_ALL_PRODUCTS_END_POINT,
} from "../../config/server";

const CreateProductButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[700]),
  backgroundColor: grey[700],
  "&:hover": {
    backgroundColor: grey[500],
  },
}));

const AllProducts = () => {
  const history = useHistory();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axiosObject
      .get(GET_ALL_PRODUCTS_END_POINT)
      .then((response) => {
        console.log("response.data : ", response.data);
        setProducts(response.data);
      })
      .catch((error) => {});
  }, []);

  const handelDeleteProduct = (id) => {
    axiosObject
      .delete(DELETE_PRODUCT_END_POINT + id)
      .then((response) => {
        console.log("response.data : ", response.data);
        setProducts(response.data);
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
        <Typography variant="h6">
          <CreateProductButton
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={() => {
              history.push("/product/create");
              window.location.reload(true);
            }}
          >
            Create new product
          </CreateProductButton>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item>
                        <Button
                          onClick={() => {
                            history.push("/product/update/" + row.id);
                            window.location.reload(true);
                          }}
                          variant="contained"
                          color="primary"
                        >
                          Edit
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          onClick={() => {
                            const result = window.confirm(
                              "Are you sure for delete this product ?"
                            );
                            if (result) {
                              handelDeleteProduct(row.id);
                            }
                          }}
                          variant="contained"
                          color="error"
                        >
                          Delete
                        </Button>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default AllProducts;
