export const API =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/api"
    : process.env.REACT_APP_QUIZZARD_API;