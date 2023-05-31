import React, {useState} from 'react'
import { Link } from "react-router-dom";
import {FaUser, FaShoppingBag, FaArrowRight, FaHome, } from 'react-icons/fa';
import OrderSuccess from "./orderSuccess";

const Cart = ({ cartItems, handleAddButton, handleRemoveButton, setCartItems }) => {
    const [Modal, setModal] = useState(false)
    const [CartMessage, setCartMessage] = useState("No item is in the cart")
    const emptyCart = "Add an item to cart before checing out!"

    const Totalprice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)

    const toogleModal = () => {
        if (Totalprice >= 1) {
            setModal(!Modal)
        } else {
            setCartMessage(emptyCart)
        }
    }
    
  return (
    <section className="w-full min-h-screen relative bg-blue-100 flex flex-col items-center justify-center pt-[13vh]">
        <nav className="w-full h-[12vh] flex items-center justify-between sm:justify-center shadow shadow-[#888] z-40 bg-blue-100 sm:px-12 2smpx-6 px-0 fixed top-0 left-0">
                <div className="sm:w-[95%] 2sm:px-0 px-3 w-full h-[12vh] flex items-center justify-between ">
                    <Link to="/home" className="no-underline text-[23px] bg-[#29b6f6] px-2 rounded-lg text-white flex items-center justify-center gap-[8px] outline-none">Pickie<FaShoppingBag/></Link>
                    <div className="flex items-center justify-center gap-[20px]">
                        <Link to="/" className="text-black outline-none border-[1px] border-black flex items-center justify-center hover:border-[#29b6f6] rounded-md hover:bg-[#29b6f6] no-underline"><button className="hover:text-white w-fit duration-500 gap-[5px] flex items-center outline-none border-none 2sm:p-2 p-1"><FaUser className="2sm:w-[23px] w-[18px] 2sm:h-[23px] h-[18px]"/></button></Link>
                        <Link to="/home" className="text-black outline-none border-[1px] border-black flex items-center justify-center hover:border-[#29b6f6] rounded-md hover:bg-[#29b6f6] no-underline"><button className="hover:text-white w-fit duration-500 gap-[5px] flex items-center outline-none border-none 2sm:p-2 p-1"><FaHome className="2sm:w-[23px] w-[18px] 2sm:h-[23px] h-[18px]"/></button></Link>
                    </div>
                </div>
            </nav>
        <div className='sm:w-[80%] relative w-full  min-h-[80vh] flex flex-col items-center justify-start pt-[5vh] sm:px-0 2sm:px-4 px-1'>
            <h2>Your Cart</h2>
            {Modal && (
                <OrderSuccess Modal={Modal} setCartItems={setCartItems} setModal={setModal} toogleModal={toogleModal}/>
            )
            }
            <div className='w-full flex lg:flex-row flex-col items-start justify-center lg:gap-[0] gap-[30px]'>
                <div className='lg:w-[70%] w-full  min-h-[45vh] max-h-[65vh] bg-blue-200 flex flex-col items-center justify-start overflow-y-scroll overflow-x-hidden py-3 px-2 2sm:px-4 gap-3'>
                {cartItems.length === 0 && (<div>{CartMessage}</div>)}

                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between w-full 2sm:p-3 p-2 bg-white/50 rounded-md">
                        <img src={item.image} alt={item.name} className='w-[50px] h-[50px] flex items-center justify-center object-contain'/>
                        <div className='font-semibold 2sm:mx-0 mx-2'>{item.name}</div>
                        <div className='flex gap-[15px]'>
                          <button className='text-[23px] px-1 2sm:px-2 bg-blue-500 text-white rounded-tl-md rounded-bl-md' onClick={() => handleAddButton(item)}>+</button>
                          <button className='text-[23px] px-1 2sm:px-2 bg-blue-500 text-white rounded-tr-md rounded-br-md' onClick={() => handleRemoveButton(item)}>-</button>
                        </div>
                        <div className='flex gap-[15px] w-[80px] items-center justify-end'>
                          {item.quantity}  ${item.quantity * item.price}
                        </div>
                    </div>
                ))}

                </div>
                <div className='lg:w-[30%] w-full min-h-[45vh] bg-blue-200 flex flex-col items-center justify-start px-3 pb-3'>
                    <div className='w-full flex py-3 capitalize text-[1.5rem]'>
                        order summery
                    </div>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <div className='w-full flex py-1 items-center justify-between'>
                            <p>Shipping</p>
                            <div>Free</div>
                        </div>
                        <div className='w-full flex py-1 items-center justify-between'>
                            <p>Subtotal</p>
                            <divv>${Totalprice}</divv>
                        </div>
                        <div className='w-full py-1 flex items-center justify-between'>
                            <button className='flex active:translate-x-1 text-blue-500 items-center justify-center gap-1'>Coupon Code <FaArrowRight/></button>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-between py-2'>
                        <p>Total price</p>
                        <div>${Totalprice}</div>
                    </div>
                    <button className='w-full py-2 rounded-md text-white active:translate-y-1 text-[1.1rem] bg-blue-500' onClick={toogleModal}>Check Out</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cart