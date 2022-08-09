import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { getFeeds } from "../../../data/feeds";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ComputerIcon from "@mui/icons-material/Computer";
import ShareIcon from "@mui/icons-material/Share";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const getIconAccordingToType = (type, color) => {
  let icon = null;

  switch (type) {
    case "user": {
      return <PersonIcon style={{ color }} />;
      break;
    }
    case "notification": {
      return <NotificationsIcon style={{ color }} />;
      break;
    }
    case "users": {
      return <GroupsIcon style={{ color }} />;
      break;
    }
    case "comments": {
      return <ChatBubbleIcon style={{ color }} />;
      break;
    }
    case "transaction": {
      return <BookmarkIcon style={{ color }} />;
      break;
    }
    case "cpu": {
      return <ComputerIcon style={{ color }} />;
      break;
    }
    case "shares": {
      return <ShareIcon style={{ color }} />;
      break;
    }

    default: {
      break;
    }
  }
};

const FeedsSection = () => {
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    const data = getFeeds();
    setFeeds(data);
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={1}
    >
      <Grid item>
        <Typography variant="h6">Feeds</Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper style={{ width: "100%" }}>
          <TableContainer>
            <Table aria-label="sticky table">
              <TableBody>
                {feeds.map((row) => (
                  <StyledTableRow hover key={row.type}>
                    <StyledTableCell component="th" scope="row">
                      {getIconAccordingToType(row.type, row.icon_color)}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.description}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.time}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FeedsSection;
