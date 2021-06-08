import { quizzardAPI } from "../../utils";
import { User } from "./userTypes";

export const signin = async (user: User) => {
  try {
    const response = await quizzardAPI.post("/signin", {
      ...user,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
