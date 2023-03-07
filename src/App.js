import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./comps/Footer/Footer";
import Header from "./comps/Header/Header";
import Homepage from "./comps/Homepage/Homepage";
import Tombala from "./comps/Tombala/Tombala";
import CoinFlip from "./comps/CoinFlip/CoinFlip";
import ToDice from "./comps/ToDice/ToDice";
import Roulette from "./comps/Roulette/Roulette";
import Rps from "./comps/Rps/Rps";

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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
