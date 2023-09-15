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
import User from "./pages/user";
import Footer from "./components/Footer";
import Cart from './components/Cart'
import {useState} from 'react'
function App() {

  const [cart,setcart]=useState([])
  const handleClick=(item)=>{
    if(cart.includes(item)){
      alert('item already exist')
    }
else{
setcart([...cart,item])
console.log(setcart)}
  }
  return (
    <div className="app">
      <Navbar size={cart.length}/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/services" element={<Services handleClick={handleClick} />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart cart={cart}setcart={setcart}/>} />

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
