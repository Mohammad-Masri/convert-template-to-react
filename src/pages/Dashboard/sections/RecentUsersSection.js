import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getRecentUsers } from "../../../data/recent_users";

import styles from "../../../layout/Sidebar/Sidebar.module.css";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const RecentUsersSection = () => {
  const [recentUsers, setRecentUsers] = useState([]);

  useEffect(() => {
    const recent_users = getRecentUsers();
    setRecentUsers(recent_users);
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Grid xs={12}>
        <Typography variant="h6">Recent Users</Typography>
      </Grid>
      <Grid xs={12} style={{ boxShadow: "0 4px 10px 0 rgb(0 0 0 / 20%)" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {recentUsers.map((row) => (
                <TableRow key={row.name}>
                  <TableCell width={25}>
                    <img
                      src={row.profile_image_url}
                      alt="profile image"
                      className={styles.profile_image}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="h5">{row.name}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default RecentUsersSection;
