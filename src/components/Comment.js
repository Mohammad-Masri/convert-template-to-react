import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import moment from "moment";
import React from "react";

const Comment = ({ name, profile_image_url, created_at, text }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item xs={12} sm={12} md={3}>
        <img
          src={profile_image_url}
          alt="profile image"
          style={{ height: 100, width: 100, borderRadius: 50 }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={9}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <strong style={{ fontSize: 20 }}> {name}</strong>
              </Grid>
              <Grid item>
                <div style={{ color: "gray" }}>
                  {moment.utc(created_at).format("LL, hh:mm A   ")}
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {text}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Comment;
