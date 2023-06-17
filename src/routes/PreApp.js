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
import Admin from "../pages/Admin";
import ProtectedRoute from "../routes/ProtectedRoute";
function PreApp() {
  const privateRoutes = [
    { path: "/leaderboard", element: Scoreboard },
    { path: "/classics", element: Classic },
    { path: "/news", element: News },
    { path: "/coinflip", element: Coin },
    { path: "/todice", element: Dice },
    { path: "/rps", element: Rps },
    { path: "/roulette", element: Roulette },
    { path: "/swap", element: Swap },
    { path: "/stats", element: Stats },
    { path: "/slot", element: Slot },
    { path: "/slot/abidin", element: Easy },
    { path: "/slot/cakir", element: Medium },
    { path: "/slot/muhterem", element: Hard },
    { path: "/emojify", element: EmojiGame },
    { path: "/emojify/lol", element: LolEmoji },
    { path: "/emojify/valorant", element: ValoEmoji },
    { path: "/emojify/turkis-cities", element: TurkeyEmoji },
    { path: "/emojify/countries", element: CountryEmoji },
    { path: "/quizboxes", element: QuizBox },
    { path: "/quizboxes/valorant", element: ValorantQuizBox },
    { path: "/wheel", element: Wheel },
  ];
  const publicRoutes = [
    { path: "/welcome", element: Welcome },
    { path: "/signup", element: SignUp },
    { path: "/signin", element: SignIn },
    { path: "/reset", element: Reset },
    { path: "/contact", element: Contact },
  ];
  const protectedRoutes = [{ path: "/admin", element: Admin }];
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
                  element={<route.element />}
                />
              ))}
              {privateRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <PrivateRoute>
                      <route.element />
                    </PrivateRoute>
                  }
                />
              ))}
              {protectedRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <ProtectedRoute>
                      <route.element />
                    </ProtectedRoute>
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
