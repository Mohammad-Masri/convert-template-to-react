const statistics = [
  {
    type: "messages",
    background_color: "#f44336",
    color: "white",
    label: "Messages",
    count: 52,
  },
  {
    type: "views",
    background_color: "#2196F3",
    color: "white",
    label: "Views",
    count: 99,
  },
  {
    type: "shares",
    background_color: "#009688",
    color: "white",
    label: "Shares",
    count: 23,
  },
  {
    type: "users",
    background_color: "#ff9800",
    color: "white",
    label: "Users",
    count: 50,
  },
];

export const getStatistics = () => {
  return statistics;
};
