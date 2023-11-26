import { USER_API } from "../urls";
export const updateStat = async (userId, email, token, game) => {
  try {
    const response = await fetch(USER_API.SET_STAT, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({ userId, game, email }),
    });
    if (response.ok) {
      const data = await response.json();
      return data.result[0];
    } else {
      const data = await response.json();
      console.log(data.result);
    }
  } catch (error) {
    console.error();
  }
};
