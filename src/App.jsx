import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import Aboutme from './components/Aboutme.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <div className="app">
      <Header/>
      <Aboutme/>
    </div>
  );
}

export default App;
