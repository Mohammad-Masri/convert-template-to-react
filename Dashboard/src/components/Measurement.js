import { Grid } from "@mui/material";
import React from "react";
import ProgressIndicator from "./ProgressIndicator";

const Measurement = ({ title, backgroundColor, labels }) => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        {title}
      </Grid>
      <Grid item xs={12}>
        <ProgressIndicator
          height={6}
          value={100}
          label=""
          backgroundColor={backgroundColor}
          color="white"
        />
      </Grid>

      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          style={{ paddingTop: 10 }}
        >
          {labels.map((l) => (
            <Grid item xs={12}>
              {l}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Measurement;
