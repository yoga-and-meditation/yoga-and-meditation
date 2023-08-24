import { BrowserRouter,Routes,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";import firebase from 'firebase';

/* import Aboutme from "./components/Aboutme";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import Demo from "./components/Demo";
import Gallery from "./components/Gallery";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer"; */
import SignIn from './components/Signin'
import Signup from './components/Signup';
import Account from './components/Account'
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/account' element={<Account/>}/>
        </Routes>
      {/*  <Navbar />
        <Hero /> 
        <Aboutme />
        <Services />
        <Gallery />
        <Feedback />
        <Demo />
        <Contacts />
        <Footer />  */}
      </BrowserRouter>
    </div>
  );
}

export default App;
