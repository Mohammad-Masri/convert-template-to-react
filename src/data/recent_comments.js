const recent_comments = [
  {
    name: "John",
    profile_image_url: "https://www.w3schools.com/w3images/avatar3.png",
    text: "Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    created_at: "2014-09-29 21:12",
  },
  {
    name: "Bo",
    profile_image_url: "https://www.w3schools.com/w3images/avatar1.png",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    created_at: "2014-09-28 20:15",
  },
];

export const getRecentComments = () => {
  return recent_comments;
};
