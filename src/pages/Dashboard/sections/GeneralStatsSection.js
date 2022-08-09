import { Grid, Typography } from "@mui/material";
import React from "react";
import ProgressIndicator from "../../../components/ProgressIndicator";

const GeneralStatsSection = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Grid xs={12}>
        <Typography variant="h6">General Stats</Typography>
      </Grid>
      <Grid xs={12}>
        <Typography variant="p">New Visitors</Typography>
      </Grid>
      <Grid xs={12}>
        <ProgressIndicator
          height={30}
          value={25}
          label="+25%"
          backgroundColor="#4CAF50"
          color="white"
        />
      </Grid>
      <Grid xs={12}>
        <Typography variant="p">New Users</Typography>
      </Grid>
      <Grid xs={12}>
        <ProgressIndicator
          height={30}
          value={50}
          label="50%"
          backgroundColor="#ff9800"
          color="black"
        />
      </Grid>
      <Grid xs={12}>
        <Typography variant="p">Bounce Rate</Typography>
      </Grid>
      <Grid xs={12}>
        <ProgressIndicator
          height={30}
          value={75}
          label="75%"
          backgroundColor="#f44336"
          color="white"
        />
      </Grid>
    </Grid>
  );
};

export default GeneralStatsSection;
