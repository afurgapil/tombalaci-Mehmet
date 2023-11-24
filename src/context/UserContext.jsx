import { createContext, useState, useEffect } from "react";
import { USER_API } from "../urls";
import { updateScore } from "../utils/updateScore";
import { updateStat } from "../utils/updateStat";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);
  const [score, setScore] = useState(null);
  const [stats, setStats] = useState({});
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    const storedScore = localStorage.getItem("score");
    const storedStats = localStorage.getItem("stats");
    if (storedUser || storedToken || storedScore || storedStats) {
      setUser(JSON.parse(storedUser));
      setToken(JSON.parse(storedToken));
      setScore(JSON.parse(storedScore));
      setStats(JSON.parse(storedStats));
    }
  }, []);
  const signup = async (name, lastname, email, password) => {
    try {
      const response = await fetch(USER_API.SIGNUP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, lastname, email, password }),
      });

      if (response.ok) {
        console.log("Kullanıcı başarıyla kaydedildi.");
        const data = await response.json();
        console.log(data);
      } else {
        const data = await response.json();
        console.error("Kullanıcı kaydı başarısız:", data.error);
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };
  const signin = async (email, password, isChecked) => {
    try {
      const response = await fetch(USER_API.SIGNIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        setToken(data.token);
        setScore(data.score);
        setStats(data.stats);

        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("score", JSON.stringify(data.score));
        localStorage.setItem("stats", JSON.stringify(data.stats));
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  const signout = () => {
    setUser(null);
    setToken(null);
    setScore(null);
    setStats(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("score");
    localStorage.removeItem("stats");
  };
  const updateScoreContext = (userId, value) => {
    updateScore(userId, value)
      .then((newScore) => {
        setScore(newScore);
        localStorage.setItem("score", JSON.stringify(newScore));
      })
      .catch((error) => {
        console.error("Update score error:", error);
      });
  };
  const updateStatContext = (userId, game) => {
    console.log("stat", userId, game);
    updateStat(userId, game)
      .then((newStat) => {
        setStats(newStat);
        localStorage.setItem("stats", JSON.stringify(newStat));
      })
      .catch((error) => {
        console.error("Update stat error:", error);
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        score,
        stats,
        signup,
        signin,
        signout,
        updateScoreContext,
        updateStatContext,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
