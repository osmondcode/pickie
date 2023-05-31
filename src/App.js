import './App.css';
import Home from "./home";
import Form from "./form";
import Login from "./components/login"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './main-components/cart';
import Data from "./main-components/data";
import {useState} from 'react'
import SingleProduct from "./main-components/singleProduct";

function App() {
  const { productItems } = Data;
  const [cartItems, setCartItems] = useState([])
  const [singleItems, setSingleItems] = useState([])

  const handleAddButton = (product) => {
    const productExist = cartItems.find(item => item.id === product.id)
    if (productExist) {
        setCartItems(cartItems.map((item) => item.id === product.id ? 
        {...productExist, quantity: productExist.quantity + 1}: item)
        )
    } else{
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
    }
  const handleAddSingle = (product) => {
    const SingleproductExist = singleItems.find(item => item.id === product.id)
    const productExist = cartItems.find(item => item.id === product.id)
    if (SingleproductExist) {
        setSingleItems(singleItems.map((item) => item.id === product.id ? 
        {...productExist, quantity: productExist.quantity + 1}: item)
        )
    } else{
      setSingleItems([...singleItems, {...product, quantity: 1}])
    }
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
    
    const handleSingle = (product) => {
      const productExist = cartItems.find(item => item.id === product.id)

      if (cartItems.length >= 1) {
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
          <Route path="/home" element={<Home productItems={productItems} handleAddButton={handleAddButton} handleAddSingle={handleAddSingle}/>} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Cart" element={<Cart handleRemoveButton={handleRemoveButton} handleAddButton={handleAddButton} cartItems={cartItems} setCartItems={setCartItems}/>} />
          <Route path="/SinglePro" element={<SingleProduct handleAddButton={handleAddButton} setSingleItems={setSingleItems} singleItems={singleItems}/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
