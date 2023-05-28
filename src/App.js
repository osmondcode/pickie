import './App.css';
import Home from "./home";
import Form from "./form";
import Login from "./components/login"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './main-components/cart';
import Data from "./main-components/data";
import {useState} from 'react'

function App() {
  const { productItems } = Data;
  const [cartItems, setCartItems] = useState([])

  const handleAddButton = (product) => {
    const productExist = cartItems.find(item => item.id === product.id)
    if (productExist) {
        setCartItems(cartItems.map((item) => item.id === product.id ? 
        {...productExist, quantity: productExist.quantity + 1}: item)
        )
    } else{
      setCartItems([...cartItems, {...product, quantity: 1}])
    }

    console.log(productExist);
    console.log(cartItems);
    }
  const handleRemoveButton = (product) => {
    const productExist =cartItems.find(item => item.id === product.id)
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((item) => item.id === product.id ?
        {...productExist, quantity: productExist.quantity - 1}: item
        )
      )
    }
  }
  

  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home productItems={productItems} handleAddButton={handleAddButton}/>} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Cart" element={<Cart handleRemoveButton={handleRemoveButton} handleAddButton={handleAddButton} cartItems={cartItems}/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
