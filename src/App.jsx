/* import { BrowserRouter } from "react-router-dom";
 */import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import Signup from "./components/Signup";
/* import Aboutme from "./components/Aboutme";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import Demo from "./components/Demo";
import Gallery from "./components/Gallery";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer"; */

function App() {
  return (
    <div className="app">
      <Signup/>
     {/*  <BrowserRouter>
        <Navbar />
        <Hero />
        <Aboutme />
        <Services />
        <Gallery />
        <Feedback />
        <Demo />
        <Contacts />
        <Footer />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
