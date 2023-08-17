import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalStyles from "./Components/Styles/Global.styled";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses";
import Movipic from "./Pages/MoviPic";
import Recommendation from "./Pages/Recommendation";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/movipic" element={<Movipic />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
