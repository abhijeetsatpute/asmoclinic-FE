import Loader from "./components/Loader";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer";
import TelegramButton from "./components/TelegramButton";
import Team from "./components/Pages/Team";
import Gallery from "./components/Pages/Gallery";
import JuxtaposeSlider from "./components/Pages/Result";
import About from "./components/Pages/About";
import Login from "./components/Pages/Login";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster
        containerStyle={{
          top: 100,
        }}
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            // border: "1px solid #713200",
            padding: "16px",
            // color: "#713200",
            fontWeight: 600,
            height: "20%",
            width: "20%",
          },
        }}
      />
      <Loader />
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/results" element={<JuxtaposeSlider />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <TelegramButton />
    </div>
  );
}

export default App;
