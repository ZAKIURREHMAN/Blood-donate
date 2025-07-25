import Navbar from "./components/Navbar";
import HomeComponent from "./screen/HomeComponent";
import Donate from "./screen/Donate";
import { navbar } from "./constant/navbar";
import NeedBlood from "./screen/NeedBlood";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./screen/About";

function App() {
  return (
    <BrowserRouter>
    < Navbar />
    <Routes>
      < Route path={navbar[0].path} element={<HomeComponent/>}  />
      < Route path={navbar[1].path} element={<NeedBlood/>}  />
      < Route path={navbar[2].path} element={<Donate/>}  />
      < Route path={navbar[3].path} element={<About/>}  />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
