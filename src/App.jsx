import { useState } from 'react';
import Navbar from './components/NavBar/navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Shop from './pages/Shop'; // ✅ Added
import ShopCategory from './pages/ShopCategory'; // ✅ Added
import Product from './pages/Product'; // ✅ Added
import Cart from './pages/Cart'; // ✅ Added
import LoginSignup from './pages/LoginSignup'; // ✅ Added
import banner_mens from  './components/Assets/banner_mens.png'
import banner_women from  './components/Assets/banner_women.png'
import banner_kids from  './components/Assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner = {banner_mens} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner = {banner_women}  category="women" />} />
          <Route path='/kids' element={<ShopCategory  banner = {banner_kids} category="kid" />} />
          {/* <Route path='/product' element={<Product />} />
          <Route path=':productId' element={<Product />} /> */}
          <Route path='/product/:productId' element={<Product />} />

          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;



