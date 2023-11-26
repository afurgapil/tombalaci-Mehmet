import { USER_API } from "../urls";

export const updateScore = async (userId, email, token, value) => {
  try {
    const response = await fetch(USER_API.SET_SCORE, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({ userId, value, email }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.result;
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.error(error);
  }
};
