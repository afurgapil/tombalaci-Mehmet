import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./comps/Footer/Footer";
import Header from "./comps/Header/Header";
import Homepage from "./comps/Homepage/Homepage";
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
// import Layout from "./comps/Layout/Layout";
import NotFound from "./comps/NotFound/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Homepage />} />
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
          {/* <Route path="/slott" element={<Slot4 />} />
          <Route path="/slot" element={<Slot4 />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
