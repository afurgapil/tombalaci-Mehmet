import API_URL from "./config";

export const USER_API = {
  SIGNUP: `${API_URL}/user/signup`,
  SIGNIN: `${API_URL}/user/signin`,
  GET_SCORE_ID: `${API_URL}/user/get/score/:id`,
  GET_SCOREBOARD: `${API_URL}/user/get/scoreboard`,
  SET_SCORE: `${API_URL}/user/set/score`,
  SET_STAT: `${API_URL}/user/set/stat`,
  RESET_REQUEST: `${API_URL}/user/reset-password/request`,
  RESET_CHECK: `${API_URL}/user/reset-password/check`,
};
