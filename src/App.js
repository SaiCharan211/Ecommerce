import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductList from './components/ProductsList'
import ProductDetails from './components/ProductsDetails';
import './App.css'
import Header from './components/Header';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>       
          <Route exact path="/" element={<ProductList/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;