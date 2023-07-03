import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage'
import Product from './components/Portfolio/Product';
import Products from './components/Portfolio/Products';


const App = () => {
  return (
    <div className="flex justify-center flex-col bg-color">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<Products />}>
            <Route path=":id" element={<Product />} />
          </Route>
          {/* <Route path="/id" element={<MainPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App



