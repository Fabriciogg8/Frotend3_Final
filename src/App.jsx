import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {Routes, Route} from 'react-router-dom';
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";

function App() {
  return (
      <div className="App">
       
          <Routes>
            <Route path="/" element={ <Navbar/>}>
                <Route path="/contact" element={ <Contact/>} />
                <Route path="/detail/:dentistaId" element={ <Detail/>} />
                <Route path="/favs" element={ <Favs/>} />
                <Route path="/" element={ <Home/>} />
                <Route path="*" element={ <Home/>} />
            </Route>
          </Routes>
        
          <Footer/>
      </div>
  );
}

export default App;
