import React,{ useState } from 'react';
import NavBar from './components/NavBar';
import Product from './components/Product';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SearchItem from './components/SearchItem';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import { items } from './components/Data';
function App() {
  const [cart,setCart]=useState([]);
  const [data,setData]=useState([...items]);
  return (
    <>
    <Router>
    <NavBar cart={cart} setData={setData} />
    <Routes>
      <Route path="/" element={<Product cart={cart} setCart={setCart} items={data}/>} />
      <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />}/>
      <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
    </Routes>
    </Router>
    </>
  )
}

export default App
