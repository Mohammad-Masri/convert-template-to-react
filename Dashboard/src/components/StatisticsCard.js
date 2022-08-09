import { Grid, Typography } from "@mui/material";
import React from "react";

const StatisticsCard = ({ backgroundColor, color, icon, label, count }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor, color, height: 140, padding: 10 }}
    >
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>{icon}</Grid>
          <Grid item>
            <Typography variant="h5">{count}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">{label}</Typography>
      </Grid>
    </Grid>
  );
};

export default StatisticsCard;
