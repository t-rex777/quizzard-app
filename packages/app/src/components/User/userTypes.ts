import { Player } from "../../context/contextTypes";

export type User = {
  name? : string;
  email: string;
  password: string;
  re_password: string;
};

export type signinResponse = {
  userData: Player;
  accessToken: string;
  refreshToken: string;
};


export type UpdateUser = {
  score: number;
  quiz: string;
};
