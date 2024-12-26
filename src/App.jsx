

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
import Dashboard from './Components/admin/Dashboard';
import Sidebar from './Components/admin/Sidebar';
import Packages from './Components/admin/Packages/Packages';
import Users from './Components/admin/Users/Users';
import UserDetail from './Components/admin/Users/UserDetail';
import NewPackage from './Components/admin/Packages/NewPackage';
import Package from './Components/Package';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/services' element={<Service />} />
          <Route path='/package' element={<Package />} />
          <Route path='/package/:id' element={<PkgDetails />} />
          <Route path='/food' element={<Food />} />
          <Route path='/nav' element={<Navbar />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/about' element={<About />} />


          {/* <Route path='/' element={<Dashboard />} />  */}
          <Route path="/" element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="/adminpackages" element={<Packages />} />
            <Route path="/adminpackages/new" element={<NewPackage />} />
            <Route path="/customers" element={<Users />} />
            <Route path="/customers/:user_id" element={<UserDetail />} />
          </Route>

          {/* <Route element={<Sidebar />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/packages" element={<Packages />} />
          </Route> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
