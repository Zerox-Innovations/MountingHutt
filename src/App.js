

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Service from './Components/Service';
import PkgDetails from './Components/PkgDetails';
import Food from './Components/Food';
import Navbar from './Components/Navbar';
import Blogs from './Blogs';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import About from './About';

function App() {
  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Service />} />
          {/* <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/blogcard' element={<BlogCard />} />
          <Route path='/activities' element={<ThingsToDo />} /> */}
          <Route path='/packages' element={<PkgDetails />} />
          <Route path='/food' element={<Food />} />
          <Route path='/nav' element={<Navbar />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/about' element={<About />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
