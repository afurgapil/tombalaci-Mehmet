import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "./profile.scss";
const Profile = ({ userId }) => {
  const [userStats, setUserStats] = useState({});
  const [name, setName] = useState(null);
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
    <div className="profile">
      <ul className="profile-list">
        <li className="profile-list-item">
          <h2>{name}</h2>
        </li>
        <li className="profile-list-item">
          <p>CoinFlip Wins: {userStats.correctCoinflip || 0}</p>
        </li>
        <li className="profile-list-item">
          <p>ToDice Wins: {userStats.correctDice || 0}</p>
        </li>
        <li className="profile-list-item">
          <p>Rock Paper Scissors Wins: {userStats.correctRps || 0}</p>
        </li>
        <li className="profile-list-item">
          <p>Roulette Wins: {userStats.correctRoulette || 0}</p>
        </li>
        <li className="profile-list-item">
          <p>Slot Wins: {userStats.correctSlot || 0}</p>
        </li>
        <li className="profile-list-item">
          <p>Jackpots: {userStats.correctJackpot || 0}</p>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
