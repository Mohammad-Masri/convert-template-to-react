import { Grid, Typography } from "@mui/material";
import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={styles.footer}
    >
      <Grid item xs={12}>
        <Typography variant="h6" style={{ paddingLeft: 20 }}>
          Footer
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="p" style={{ paddingLeft: 20 }}>
          Powered by
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Footer;
