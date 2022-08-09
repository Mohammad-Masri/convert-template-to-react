import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import StatisticsCard from "../../../components/StatisticsCard";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShareIcon from "@mui/icons-material/Share";
import GroupsIcon from "@mui/icons-material/Groups";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { getStatistics } from "../../../data/statistics";

const getIconAccordingToStatisticType = (type) => {
  let icon = <AnalyticsIcon sx={{ fontSize: 50 }} />;
  switch (type) {
    case "messages": {
      return <ChatBubbleIcon sx={{ fontSize: 50 }} />;
    }
    case "views": {
      return <RemoveRedEyeIcon sx={{ fontSize: 50 }} />;
    }
    case "shares": {
      return <ShareIcon sx={{ fontSize: 50 }} />;
    }
    case "users": {
      return <GroupsIcon sx={{ fontSize: 50 }} />;
    }

    default: {
      break;
    }
  }

  return icon;
};

const StatisticsSection = () => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    const data = getStatistics();
    setStatistics(data);
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      {statistics.map((s) => {
        const icon = getIconAccordingToStatisticType(s.type);

        return (
          <Grid item xs={12} sm={6} md={3}>
            <StatisticsCard
              backgroundColor={s.background_color}
              color={s.color}
              icon={icon}
              label={s.label}
              count={s.count}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default StatisticsSection;
