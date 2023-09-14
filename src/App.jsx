import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Contacts from "./components/Contacts";
import Authentication from "./components/Authentication";
import Demo from "./components/Demo";
import Gallery from "./components/Gallery";
import Feedback from "./components/Feedback";
import User from "./pages/User";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/user" element={<User />} />
        <Route
          path="/dashboard/*"
          element={
            <>
              <Demo />
              <Gallery />
              <Feedback />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
