import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/Topbar';
import Home from './Pages/home/Home';
import UserList from './Pages/userList/UserList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './Pages/user/User';
import NewUser from './Pages/newUser/NewUser';
import ProductList from './Pages/productList/ProductList';
import Product from './Pages/product/Product';
import NewProduct from './Pages/newProduct/NewProduct';

function App() {
  return (
     <BrowserRouter>                     
     <Topbar/>
     <div className="container">
      <Sidebar/>
      <Routes>
        <Route path = "/" >
          <Route index element={<Home/>}/>
          <Route path="users" element={<UserList/>}/>
          <Route path="users/:userId" element={<User/>}/>
          <Route path="newUser" element={<NewUser/>}/>
          <Route path="products" element={<ProductList/>}/>
          <Route path="product/:productsId" element={<Product/>}/>
          <Route path="newProduct" element={<NewProduct/>}/>
        </Route>
      </Routes>
     </div>
     </BrowserRouter>

  );
}

export default App;


