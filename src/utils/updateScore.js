import { USER_API } from "../urls";
export const updateScore = async (userId, value) => {
  try {
    const response = await fetch(USER_API.SET_SCORE, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, value }),
    });
    if (response.ok) {
      const data = await response.json();
      return data.result;
    } else {
      const data = await response.json();
      console.log(data.result);
    }
  } catch (error) {
    console.error();
  }
};
