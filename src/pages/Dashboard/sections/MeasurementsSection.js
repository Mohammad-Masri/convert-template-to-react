import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Measurement from "../../../components/Measurement";
import { getMeasurements } from "../../../data/measurements";

const MeasurementsSection = () => {
  const [measurements, setMeasurements] = useState([]);
  useEffect(() => {
    const date = getMeasurements();
    setMeasurements(date);
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      style={{ backgroundColor: "#616161", padding: 20, color: "white" }}
      spacing={1}
    >
      {measurements.map((m) => {
        return (
          <Grid item xs={3}>
            <Measurement
              title={m.title}
              backgroundColor={m.backgroundColor}
              labels={m.labels}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MeasurementsSection;
