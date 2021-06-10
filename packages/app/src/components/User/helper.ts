import { quizzardAPI } from "../../utils";
import { UpdateUser, User } from "./userTypes";

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

export const updateUser = async (userScore: UpdateUser) => {
  try {
    const response = await quizzardAPI.post("/user/update", {
      ...userScore,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
