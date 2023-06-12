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
import Wheel from "../pages/Wheel";
function PreApp() {
  const privateRoutes = [
    { path: "/leaderboard", component: Scoreboard },
    { path: "/classics", component: Classic },
    { path: "/news", component: News },
    { path: "/coinflip", component: Coin },
    { path: "/todice", component: Dice },
    { path: "/rps", component: Rps },
    { path: "/roulette", component: Roulette },
    { path: "/swap", component: Swap },
    { path: "/stats", component: Stats },
    { path: "/slot", component: Slot },
    { path: "/slot/abidin", component: Easy },
    { path: "/slot/cakir", component: Medium },
    { path: "/slot/muhterem", component: Hard },
    { path: "/emojify", component: EmojiGame },
    { path: "/emojify/lol", component: LolEmoji },
    { path: "/emojify/valorant", component: ValoEmoji },
    { path: "/emojify/turkis-cities", component: TurkeyEmoji },
    { path: "/emojify/countries", component: CountryEmoji },
    { path: "/quizboxes", component: QuizBox },
    { path: "/quizboxes/valorant", component: ValorantQuizBox },
    { path: "/wheel", component: Wheel },
  ];
  const publicRoutes = [
    { path: "/welcome", element: Welcome },
    { path: "/signup", SignUp: SignUp },
    { path: "/signin", element: SignIn },
    { path: "/reset", element: Reset },
    { path: "/contact", element: Contact },
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
              {publicRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
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
