import { API } from "../../API";
import axios, { AxiosError } from "axios";

export const getAllQuizzes = async () => {
  try {
    const response = await axios.get(`${API}/quizzes`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError;
      if (serverError && serverError.response) {
        return serverError.response.data;
      }
    }
    return { success: false, errorMessage: error.message as String };
  }
};
export const getQuiz = async (quizId: string) => {
  try {
    const response = await axios.get(`${API}/quiz/${quizId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError;
      if (serverError && serverError.response) {
        return serverError.response.data;
      }
    }
    return { success: false, errorMessage: error.message as String };
  }
};
