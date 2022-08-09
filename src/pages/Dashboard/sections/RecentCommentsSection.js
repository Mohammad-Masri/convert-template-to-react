import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Comment from "../../../components/Comment";
import { getRecentComments } from "../../../data/recent_comments";

const RecentCommentsSection = () => {
  const [recentComments, setRecentComments] = useState([]);

  useEffect(() => {
    const recent_comments = getRecentComments();
    setRecentComments(recent_comments);
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
        <Typography variant="h6">Recent Comments</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          {recentComments.map((rc) => {
            return (
              <Grid item xs={12}>
                <Comment
                  name={rc.name}
                  profile_image_url={rc.profile_image_url}
                  created_at={rc.created_at}
                  text={rc.text}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RecentCommentsSection;
