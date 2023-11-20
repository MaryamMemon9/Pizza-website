import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';
function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' exact Component={Home}/>
    <Route path='/menu' exact Component={Menu}/>
    <Route path='/about' exact Component={About}/>
    <Route path='/contact' exact Component={Contact}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
 
  </>
  );
}

export default App;
