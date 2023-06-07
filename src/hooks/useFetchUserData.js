import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import {
  setCorrectCoinFlip,
  setCorrectDice,
  setCorrectJackpot,
  setCorrectRoulette,
  setCorrectRps,
  setCorrectSlot,
  setScore,
  setDisplayName,
} from "../store/slicers/user";

export const useFetchUserData = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = auth.currentUser;
  const [userStats, setUserStats] = useState();

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
              dispatch(setCorrectCoinFlip(userData.correctCoinflip));
              dispatch(setCorrectDice(userData.correctDice));
              dispatch(setCorrectJackpot(userData.correctJackpot));
              dispatch(setCorrectRoulette(userData.correctRoulette));
              dispatch(setCorrectRps(userData.correctRps));
              dispatch(setCorrectSlot(userData.correctSlot));
              dispatch(setScore(userData.score));
              dispatch(setDisplayName(userData.displayName));
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
  }, [user, dispatch]);

  return userStats;
};
