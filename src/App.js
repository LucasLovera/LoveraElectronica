import React from 'react';
import './App.css';
import Brand from './component/brand';
import NavBar from'./component/NavBar';
import ItemLisContainer from './pages/Item/Item';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Brand/>
    <NavBar/>
    <Routes>
      <Route path='/' element ={<ItemLisContainer/>} />
      <Route path='category/:category' element ={<ItemLisContainer/>} />
      <Route path="item/:id" element ={<ItemDetailContainer/>} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
 {/* <div className="App">
 
  
  <ItemLisContainer/>
    </div> */}