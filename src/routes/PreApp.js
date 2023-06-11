import React from "react";
import { Routes, Route } from "react-router-dom";
//layouts
import Footer from "../comps/Footer";
import Header from "../comps/Header";
//pages
import Home from "../pages/Home";
import Classic from "../pages/Classics";
import News from "../pages/News";
import Swap from "../pages/Swap";
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
import Stats from "../pages/Stats";
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
                path="/swap"
                element={
                  <PrivateRoute>
                    <Swap />
                  </PrivateRoute>
                }
              />
              <Route
                path="/stats"
                element={
                  <PrivateRoute>
                    <Stats />
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
                path="slot"
                element={
                  <PrivateRoute>
                    <Slot />
                  </PrivateRoute>
                }
              />
              <Route
                path="slot/muhterem"
                element={
                  <PrivateRoute>
                    <Hard />
                  </PrivateRoute>
                }
              />
              <Route
                path="slot/abidin"
                element={
                  <PrivateRoute>
                    <Easy />
                  </PrivateRoute>
                }
              />
              <Route
                path="slot/cakir"
                element={
                  <PrivateRoute>
                    <Medium />
                  </PrivateRoute>
                }
              />
              <Route
                path="emojify"
                element={
                  <PrivateRoute>
                    <EmojiGame />
                  </PrivateRoute>
                }
              />
              <Route
                path="/emojify/lol"
                element={
                  <PrivateRoute>
                    <LolEmoji />
                  </PrivateRoute>
                }
              />
              <Route
                path="/emojify/valorant"
                element={
                  <PrivateRoute>
                    <ValoEmoji />
                  </PrivateRoute>
                }
              />
              <Route
                path="/emojify/turkish-cities"
                element={
                  <PrivateRoute>
                    <TurkeyEmoji />
                  </PrivateRoute>
                }
              />
              <Route
                path="/emojify/countries"
                element={
                  <PrivateRoute>
                    <CountryEmoji />
                  </PrivateRoute>
                }
              />
              <Route
                path="/quizboxes"
                element={
                  <PrivateRoute>
                    <QuizBox />
                  </PrivateRoute>
                }
              >
                <Route
                  path="valorant"
                  element={
                    <PrivateRoute>
                      <ValorantQuizBox />
                    </PrivateRoute>
                  }
                />
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
