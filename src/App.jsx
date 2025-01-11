

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
import UserProfile from './Components/admin/Users/UserProfile';
import BookingPage from './Components/Pages/Booking/BookingPage';
import Checkout from './Components/Pages/Booking/Checkout';
import BlogList from './Components/Pages/Blogs/BlogCard';
import BlogDetailList from './Components/Pages/Blogs/BlogDetailList';
import { Toaster } from 'react-hot-toast';
import PaymentView from './Components/Pages/Payment/PaymentView';


function App() {
  return (
    <div>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Service />} />
          <Route path='/package' element={<Package />} />
          <Route path='/package/:id' element={<PkgDetails />} />
          <Route path='/food' element={<Food />} />
          <Route path='/nav' element={<Navbar />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/booking/billinginfo" element={<Checkout />} />
          <Route path="/payment-view" element={<PaymentView />} />

          <Route path="/dashboard" element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="adminpackages" element={<Packages />} />
            <Route path="adminpackages/new" element={<NewPackage />} />
            <Route path="customers" element={<Users />} />
            <Route path="customers/:user_id" element={<UserDetail />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
