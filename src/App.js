import './App.css';
import Home from "./home";
import Form from "./form";
import Login from "./components/login"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './main-components/cart';

function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
