// import react from 'react';
import "./index.css"
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import About  from './Routes/About';
import {Routes,Route} from 'react-router-dom';
import Services from './Routes/Services';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
    </>
  );
}

export default App;
