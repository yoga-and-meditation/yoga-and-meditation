import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";

/* Components */
import Aboutme from "./components/Aboutme";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import Demo from "./components/Demo";
import Gallery from "./components/Gallery";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      {<Footer />}
    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Aboutme />
      <Services />
      <Contacts />
      <Demo />
      <Gallery />
      <Feedback />
    </>
  );
}

export default App;
