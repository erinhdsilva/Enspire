import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Home2 from './pages/Home2';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Sponsor from './pages/Sponsor';
import Teams from './pages/Teams';
const App = () => {
  return (
 <main className="bg-slate-300/20">
    <Router>
    
        <Routes>
        <Route path="/" element={<Home />} />
             <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/sponsor" element={<Sponsor />} />
        </Routes>
    </Router>
 </main>
  )
}

export default App

