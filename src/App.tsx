import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

import './App.css';
import ProductPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
