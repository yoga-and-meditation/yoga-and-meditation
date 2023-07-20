import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";

// import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutme from './components/Aboutme'
import Services from './components/Services'
import Hero from './components/Hero'
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route path="/aboutme" element={<Aboutme/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/hero" element={<Hero/>} />
        <Route path="/contacts" element={<Contacts/>} />

      </Route>
    </Routes>
  </BrowserRouter>
     {/*  <Footer /> */}
    </>
  );
}

export default App;
