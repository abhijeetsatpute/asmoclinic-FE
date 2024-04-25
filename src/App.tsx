import Loader from "./components/Loader";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer";
import TelegramButton from "./components/TelegramButton";
import Team from "./components/Pages/Team";
import Gallery from "./components/Pages/Gallery";
import JuxtaposeSlider from "./components/Pages/Result";
import About from "./components/Pages/About";

function App() {
  return (
    <div className="App">
      <Loader />
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/results" element={<JuxtaposeSlider />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <TelegramButton />
    </div>
  );
}

export default App;
