import { Grid, Typography } from "@mui/material";
import React from "react";
import { region_image_url } from "../../../data/regions";

const RegionSection = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={1}
    >
      <Grid item>
        <Typography variant="h6">Regions</Typography>
      </Grid>
      <Grid item>
        <img
          src={region_image_url}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default RegionSection;
