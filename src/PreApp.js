import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./comps/Footer/Footer";
import Header from "./comps/Header/Header";
import Homepage from "./pages/Homepage";
import ClassicPage from "./pages/ClassicsPage";
import NewsPage from "./pages/NewsPage";
import Scoreboard from "./comps/Scoreboard/Scoreboard";
import Tombala from "./comps/Tombala/Tombala";
import CoinFlip from "./comps/CoinFlip/CoinFlip";
import ToDice from "./comps/ToDice/ToDice";
import Roulette from "./comps/Roulette/Roulette";
import Slot from "./comps/Slot/SlotGame";
import Slot4 from "./comps/Slot/Slot4";
import Slot5 from "./comps/Slot/Slot5";
import Slot6 from "./comps/Slot/Slot6";
import Rps from "./comps/Rps/Rps";
import EmojiGame from "./comps/Emoji/Emoji";
import QuizBox from "./comps/QuizzBox/Box";
import NotFound from "./comps/NotFound/NotFound";
import SignIn from "./comps/SignIn/SignIn";
import SignUp from "./comps/SignUp/SignUp";
import Reset from "./comps/Reset/Reset";
import Contact from "./comps/Contact/Contact";
import Welcome from "./comps/Welcome/Welcome";
function PreApp() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leaderboard" element={<Scoreboard />} />
        <Route path="/classics" element={<ClassicPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/tombala" element={<Tombala />} />
        <Route path="/coinflip" element={<CoinFlip />} />
        <Route path="/todice" element={<ToDice />} />
        <Route path="/roulette" element={<Roulette />} />
        <Route path="/rps" element={<Rps />} />
        <Route path="/slot" element={<Slot />} />
        <Route path="/slot/muhterem" element={<Slot4 />} />
        <Route path="/slot/cakir" element={<Slot5 />} />
        <Route path="/slot/abidin" element={<Slot6 />} />
        <Route path="/emojify" element={<EmojiGame />} />
        <Route path="/quizboxes" element={<QuizBox />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default PreApp;
