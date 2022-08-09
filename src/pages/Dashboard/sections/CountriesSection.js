import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { purple, grey } from "@mui/material/colors";
import { getCountries } from "../../../data/countries";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const MoreCountriesButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[700]),
  backgroundColor: grey[700],
  "&:hover": {
    backgroundColor: grey[500],
  },
}));

const CountriesSection = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const date = getCountries();
    setCountries(date);
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item xs={12}>
        <Typography variant="h6">Countries</Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper style={{ width: "100%" }}>
          <TableContainer>
            <Table aria-label="sticky table">
              <TableBody>
                {countries.map((row) => (
                  <StyledTableRow hover key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.value}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">
          <MoreCountriesButton
            variant="contained"
            endIcon={<ArrowForwardIcon />}
          >
            More Countries
          </MoreCountriesButton>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CountriesSection;
