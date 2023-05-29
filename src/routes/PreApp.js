import React from "react";
import { Routes, Route } from "react-router-dom";
//layouts
import Footer from "../comps/Footer";
import Header from "../comps/Header";
//pages
import Home from "../pages/Home";
import Classic from "../pages/Classics";
import News from "../pages/News";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Reset from "../pages/Reset";
import Coin from "../pages/CoinFlip";
import Dice from "../pages/ToDice";
import Rps from "../pages/Rps";
import Easy from "../comps/Slot/Slot6";
import Medium from "../comps/Slot/Slot5";
import Hard from "../comps/Slot/Slot4";
import Roulette from "../pages/Roulette";
//comps
import Scoreboard from "../pages/Scoreboard";
import Slot from "../pages/SlotGame";
//emoji
import EmojiGame from "../pages/Emoji";
import LolEmoji from "../comps/Emoji/Lol";
import ValoEmoji from "../comps/Emoji/Valorant";
import TurkeyEmoji from "../comps/Emoji/Turkey";
import CountryEmoji from "../comps/Emoji/Country";
import QuizBox from "../pages/Box";
import ValorantQuizBox from "../comps/QuizzBox/Agents";
import Contact from "../pages/Contact";
import Welcome from "../pages/Welcome";
import Docs from "../pages/Docs";
import PrivateRoute from "./PrivateRoute";
function PreApp() {
  const privateRoutes = [
    { path: "/leaderboard", component: Scoreboard },
    { path: "/classics", component: Classic },
    { path: "/news", component: News },
    { path: "/coinflip", component: Coin },
    { path: "/todice", component: Dice },
    { path: "/rps", component: Rps },
    { path: "/roulette", component: Roulette },
  ];
  return (
    <Routes>
      <Route path="/docs" element={<Docs />} />
      <Route
        path="/*"
        element={
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              {privateRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <PrivateRoute>
                      <route.component />
                    </PrivateRoute>
                  }
                />
              ))}
              <Route
                path="/slot"
                element={
                  <PrivateRoute>
                    <Route index={true} element={<Slot />} />
                    <Route path="muhterem" element={<Hard />} />
                    <Route path="cakir" element={<Medium />} />
                    <Route path="abidin" element={<Easy />} />
                  </PrivateRoute>
                }
              />
              <Route
                path="/emojify"
                element={
                  <PrivateRoute>
                    <Route index={true} element={<EmojiGame />} />
                    <Route path="lol" element={<LolEmoji />} />
                    <Route path="valorant" element={<ValoEmoji />} />
                    <Route path="turkish-cities" element={<TurkeyEmoji />} />
                    <Route path="countries" element={<CountryEmoji />} />
                  </PrivateRoute>
                }
              />
              <Route path="/quizboxes">
                <Route index={true} element={<QuizBox />} />
                <Route path="valorant" element={<ValorantQuizBox />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer></Footer>
          </>
        }
      />
    </Routes>
  );
}

export default PreApp;
