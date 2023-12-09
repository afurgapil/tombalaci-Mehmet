/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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
import { useStats } from "../hooks/useStats";
function Stats() {
  const [data, setData] = useState([]);
  const stats = useStats();
  useEffect(() => {
    if (stats) {
      const data = [
        {
          name: "Coin Flip",
          Win: stats.correctCoinFlip || 0,
        },
        {
          name: "To Dice",
          Win: stats.correctDice || 0,
        },
        {
          name: "RPS",
          Win: stats.correctRps || 0,
        },
        {
          name: "Roulette",
          Win: stats.correctRoulette || 0,
        },
        {
          name: "Slot",
          Win: stats.correctSlot || 0,
        },
        {
          name: "Jackpots",
          Win: stats.correctJackpot || 0,
        },
      ];
      setData(data);
    }
  }, [stats]);

  return (
    <div className="min-h-screen bg-bg p-4 flex justify-center items-center ">
      <Helmet>
        <title>Stats | Tombalaci Mehmet</title>
        <meta name="description" content="user stats page " />
      </Helmet>

      <div className="flex justify-center items-center md:items-start">
        <ResponsiveContainer width={"100%"} aspect={2}>
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
