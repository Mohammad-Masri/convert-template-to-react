import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Grid,
  IconButton,
  MenuItem,
  MenuList,
  Typography,
  Divider,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupsIcon from "@mui/icons-material/Groups";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CircleIcon from "@mui/icons-material/Circle";
import DiamondIcon from "@mui/icons-material/Diamond";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import RestoreIcon from "@mui/icons-material/Restore";
import { user } from "../../data/user";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const history = useHistory();

  const [menuItems, setMenuItems] = useState([
    {
      id: "overview",
      is_active: true,
      label: "Overview",
      icon: <GroupsIcon fontSize="small" className={styles.btn_black} />,
      link: "#overview",
    },
    {
      id: "views",
      is_active: false,
      label: "Views",
      icon: <VisibilityIcon fontSize="small" className={styles.btn_black} />,
      link: "#views",
    },
    {
      id: "traffic",
      is_active: false,
      label: "Traffic",
      icon: <GroupsIcon fontSize="small" className={styles.btn_black} />,
      link: "#traffic",
    },
    {
      id: "geo",
      is_active: false,
      label: "Geo",
      icon: <CircleIcon fontSize="small" className={styles.btn_black} />,
      link: "#geo",
    },
    {
      id: "orders",
      is_active: false,
      label: "Orders",
      icon: <DiamondIcon fontSize="small" className={styles.btn_black} />,
      link: "#orders",
    },
    {
      id: "news",
      is_active: false,
      label: "News",
      icon: <NotificationsIcon fontSize="small" className={styles.btn_black} />,
      link: "#news",
    },
    {
      id: "General",
      is_active: false,
      label: "General",
      icon: (
        <AccountBalanceIcon fontSize="small" className={styles.btn_black} />
      ),
      link: "#General",
    },
    {
      id: "history",
      is_active: false,
      label: "History",
      icon: <RestoreIcon fontSize="small" className={styles.btn_black} />,
      link: "#history",
    },
    {
      id: "setting",
      is_active: false,
      label: "Setting",
      icon: <SettingsIcon fontSize="small" className={styles.btn_black} />,
      link: "#setting",
    },
  ]);

  const updateActiveMenuItem = (menu_item_id) => {
    const updated = menuItems.map((item) => {
      if (item.id === menu_item_id) {
        item.is_active = true;
      } else {
        item.is_active = false;
      }
      return item;
    });
    setMenuItems(updated);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      className={styles.sidebar}
      spacing={2}
    >
      {/* user details */}
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ padding: 25 }}
        >
          <Grid item xs={3}>
            <img
              src={user.image_url}
              alt="profile image"
              className={styles.profile_image}
            />
          </Grid>
          <Grid item xs={9}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                Welcome, <strong>{user.name} </strong>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <IconButton
                      aria-label="mail"
                      size="small"
                      style={{ color: "black" }}
                    >
                      <MailIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={4}>
                    <IconButton
                      aria-label="profile"
                      size="small"
                      style={{ color: "black" }}
                    >
                      <PersonIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={4}>
                    <IconButton
                      aria-label="setting"
                      size="small"
                      style={{ color: "black" }}
                    >
                      <SettingsIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Divider />
      </Grid>
      <Grid item>
        <Typography variant="h6" style={{ paddingLeft: 20 }}>
          Dashboard
        </Typography>
      </Grid>

      {/* menu list */}
      <Grid item>
        <MenuList>
          {menuItems.map((item) => {
            return (
              <MenuItem
                selected={item.is_active}
                key={item.id}
                onClick={() => {
                  history.push(item.link);
                  updateActiveMenuItem(item.id);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.label} </ListItemText>
              </MenuItem>
            );
          })}
        </MenuList>
      </Grid>
    </Grid>
  );
};
export default Sidebar;
