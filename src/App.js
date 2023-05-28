import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import Footer from "./comps/Footer/Footer";
import Header from "./comps/Header/Header";
function App() {
  return useRoutes(routes);
}

export default App;
