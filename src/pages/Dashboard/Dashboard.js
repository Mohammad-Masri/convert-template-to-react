import * as React from "react";

import { Grid, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";

import { region_image_url } from "../../data/regions";

import ProgressIndicator from "../../components/ProgressIndicator";

import CountriesSection from "./sections/CountriesSection";
import StatisticsSection from "./sections/StatisticsSection";
import RegionSection from "./sections/RegionSection";
import FeedsSection from "./sections/FeedsSection";
import GeneralStatsSection from "./sections/GeneralStatsSection";
import RecentUsersSection from "./sections/RecentUsersSection";
import RecentCommentsSection from "./sections/RecentCommentsSection";
import MeasurementsSection from "./sections/MeasurementsSection";

const Dashboard = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ padding: 30 }}
      spacing={1}
    >
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={1}>
            <DashboardIcon />
          </Grid>
          <Grid item xs={11}>
            <Typography variant="h6">My Dashboard</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <StatisticsSection />
      </Grid>
      <Grid item xs={12}>
        <div style={{ height: 20 }}></div>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          <Grid item xs={12} md={5}>
            <RegionSection />
          </Grid>
          <Grid item xs={12} md={7}>
            <FeedsSection />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div style={{ height: 50 }}></div>
      </Grid>
      <Grid item xs={12}>
        <GeneralStatsSection />
      </Grid>
      <Grid item xs={12}>
        <div style={{ height: 50 }}></div>
      </Grid>
      <Grid item xs={12}>
        <CountriesSection />
      </Grid>
      <Grid item xs={12}>
        <div style={{ height: 50 }}></div>
      </Grid>
      <Grid item xs={12}>
        <RecentUsersSection />
      </Grid>
      <Grid item xs={12}>
        <div style={{ height: 50 }}></div>
      </Grid>
      <Grid item xs={12}>
        <RecentCommentsSection />
      </Grid>
      <Grid item xs={12}>
        <div style={{ height: 50 }}></div>
      </Grid>
      <Grid item xs={12}>
        <MeasurementsSection />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
