const feeds = [
  {
    type: "user",
    description: "New record, over 90 views.",
    time: "10 mins",
    icon_color: "#2196F3",
  },
  {
    type: "notification",
    description: "Database error",
    time: "15 mins",
    icon_color: "#f44336",
  },
  {
    type: "users",
    description: "New record, over 40 users.",
    time: "17 mins",
    icon_color: "#d2be0e",
  },
  {
    type: "comments",
    description: "New comments.",
    time: "25 mins",
    icon_color: "f44336",
  },
  {
    type: "transaction",
    description: "Check transactions.",
    time: "28 mins",
    icon_color: "#2196F3",
  },
  {
    type: "cpu",
    description: "CPU overload.",
    time: "35 mins",
    icon_color: "#f44336",
  },
  {
    type: "shares",
    description: "New shares.",
    time: "39 mins",
    icon_color: "#4CAF50",
  },
];

export const getFeeds = () => {
  return feeds;
};
