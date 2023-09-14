import React, { useEffect, useState } from "react";
//firestore
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Helmet } from "react-helmet";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Stats() {
  const [userStats, setUserStats] = useState({});
  const [name, setName] = useState(null);
  const [data, setData] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;
  useEffect(() => {
    if (user) {
      try {
        const userId = user.uid;
        const firestore = getFirestore();
        const userRef = doc(firestore, "users", userId);
        getDoc(userRef)
          .then((doc) => {
            if (doc.exists()) {
              const userData = doc.data();
              setUserStats(userData);
              const displayName = userData.displayName;
              setName(displayName);
              if (userData) {
                const data = [
                  {
                    name: "Coin Flip",
                    Win: userStats.correctCoinflip || 0,
                  },
                  {
                    name: "To Dice",
                    Win: userStats.correctDice || 0,
                  },
                  {
                    name: "RPS",
                    Win: userStats.correctRps || 0,
                  },
                  {
                    name: "Roulette",
                    Win: userStats.correctRoulette || 0,
                  },
                  {
                    name: "Slot",
                    Win: userStats.correctSlot || 0,
                  },
                  {
                    name: "Jackpots",
                    Win: userStats.correctJackpot || 0,
                  },
                ];
                setData(data);
              }
            } else {
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-bg p-4 rounded">
      <Helmet>
        <title>Stats | Tombalaci Mehmet</title>
        <meta name="description" content="user stats page " />
      </Helmet>

      <div className="flex justify-center items-start my-20">
        <ResponsiveContainer width={"100%"} aspect={3}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Win" fill="#00253b" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Stats;
