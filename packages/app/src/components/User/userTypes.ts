import { Player } from "../../context/contextTypes";

export type User = {
    email: string;
    password: string;
    re_password: string;
  };

export type signinResponse = {
  userData: Player;
  accessToken: string;
  refreshToken: string;
}