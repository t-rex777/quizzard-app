import Axios from "axios";
import { API } from './API';

export const quizzardAPI = Axios.create({
  baseURL: API,
});

export const setQuizzardHeader = (token : string) => {
  quizzardAPI.defaults.headers.common["authorization"] = `Bearer ${token}`;
};
