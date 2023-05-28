//layouts
import Footer from "../comps/Footer/Footer";
import Header from "../comps/Header/Header";
//pages
import Homepage from "../pages/Homepage";
import ClassicPage from "../pages/ClassicsPage";
import NewsPage from "../pages/NewsPage";
import ProfilePage from "../pages/ProfilePage";
import NotFound from "../comps/NotFound/NotFound";
import SignIn from "../comps/SignIn/SignIn";
import SignUp from "../comps/SignUp/SignUp";
import Reset from "../comps/Reset/Reset";
import Coin from "../pages/games/CoinFlipGame";
import Dice from "../pages/games/ToDiceGame";
import Rps from "../pages/games/RpsGame";
import Easy from "../pages/games/EasySlotGame";
import Medium from "../pages/games/MediumSlotGame";
import Hard from "../pages/games/HardSlotGame";
import Roulette from "../pages/games/RouletteGame";
//comps
import Scoreboard from "../comps/Scoreboard/Scoreboard";
import Slot from "../comps/Slot/SlotGame";
//emoji
import EmojiGame from "../comps/Emoji/Emoji";
import LolEmoji from "../comps/Emoji/Lol";
import ValoEmoji from "../comps/Emoji/Valorant";
import TurkeyEmoji from "../comps/Emoji/Turkey";
import CountryEmoji from "../comps/Emoji/Country";
import QuizBox from "../comps/QuizzBox/Box";
import ValorantQuizBox from "../comps/QuizzBox/Agents";
import Contact from "../comps/Contact/Contact";
import Welcome from "../comps/Welcome/Welcome";
import Docs from "../comps/Docs/Docs";
import ToDice from "../comps/ToDice/ToDice";

const routes = [
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "docs",
        element: <Docs />,
      },
      {
        path: "welcome",
        element: <Welcome />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "reset",
        element: <Reset />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "leaderboard",
        element: <Scoreboard />,
      },
      {
        path: "classics",
        element: <ClassicPage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "coinflip",
        element: <Coin />,
      },
      {
        path: "todice",
        element: <Dice />,
      },
      {
        path: "rps",
        element: <Rps />,
      },
      {
        path: "roulette",
        element: <Roulette />,
      },
      {
        path: "slot",
        children: [
          { index: true, element: <Slot /> },
          { path: "muhterem", element: <Hard /> },
          { path: "cakir", element: <Medium /> },
          { path: "abidin", element: <Easy /> },
        ],
      },
      {
        path: "/emojify",
        children: [
          { index: true, element: <EmojiGame /> },
          { path: "lol", element: <LolEmoji /> },
          { path: "valorant", element: <ValoEmoji /> },
          {
            path: "turkish-cities",
            element: <TurkeyEmoji />,
          },
          {
            path: "countries",
            element: <CountryEmoji />,
          },
        ],
      },
      {
        path: "/quizboxes",
        children: [
          { index: true, element: <QuizBox key="quizboxes-index" /> },
          {
            path: "valorant",
            element: <ValorantQuizBox key="quizboxes-valo" />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
