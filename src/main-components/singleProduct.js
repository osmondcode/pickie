import React from 'react'
import { FaShoppingBag, FaShoppingCart, FaUser, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleProduct = ({handleAddButton, singleItems, setSingleItems}) => {
    
    
    const firstRender = singleItems.map((item) => (
        
        <div key={item.id} className='w-full min-h-[88vh] flex lg:flex-row flex-col items-center justify-center pt-[12vh]'>
            <span className='xl:w-[40%] w-full min-h-[60vh] flex flex-col px-3 py-1 items-center justify-center overflow-hidden bg-blue-200 rounded-md'>
                <img src={item.image[0]} alt={item.name} className='w-[35vh] p-1 h-[35vh] rounded-md my-4 border-[2px] border-[#29b6f6]'/>
                <span className='flex w-full min-h-[20vh] items-center justify-evenly overflow-hidden flex-wrap'>
                    <img src={item.image[0]} alt={item.name} className='sm:w-[100px] w-[80px] sm:h-[100px] h-[80px] my-2 mx-3 border-[2px] p-0.5 border-[#29b6f6] object-contain'/>
                    <img src={item.image[1]} alt={item.name} className='sm:w-[100px] w-[80px] sm:h-[100px] h-[80px] my-2 mx-3 border-[2px] p-0.5 border-[#29b6f6] object-contain'/>
                    <img src={item.image[2]} alt={item.name} className='sm:w-[100px] w-[80px] sm:h-[100px] h-[80px] my-2 mx-3 border-[2px] p-0.5 border-[#29b6f6] object-contain'/>
                    <img src={item.image[3]} alt={item.name} className='sm:w-[100px] w-[80px] sm:h-[100px] h-[80px] my-2 mx-3 border-[2px] p-0.5 border-[#29b6f6] object-contain'/>
                </span>
            </span>
            <span className='xl:w-[40%] w-full lg-py-0 py-[5vh] 2sm:px-5 px-3 flex flex-col lg:items-start items-center justify-center'>
                <h4 className='text-[19px] font-light'>{item.brand}</h4>
                <h2 className='text-[2rem] font-semibold'>{item.name}</h2>
                <p className='text-[25px] font-medium'>${item.price}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor isn reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button className='w-full py-2 text-white active:translate-y-1 rounded-md bg-[#29b6f6]' onClick={() => handleAddButton(item)}>ADD ITEM TO CART</button>
            </span> 
        </div>
))  
        
        const closingIF = () => {
            if (firstRender.length >= 1) {
                setSingleItems([]);
            }
        }
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-blue-100 2sm:pt-0 pt-[8vh]'>
        <nav className="w-full h-[12vh] flex items-center justify-between sm:justify-center shadow shadow-[#888] z-40 bg-blue-100 sm:px-12 2smpx-6 px-0 fixed top-0 left-0">
                <div className="sm:w-[95%] 2sm:px-0 px-3 w-full h-[12vh] flex items-center justify-between ">
                    <Link to="/home" className="no-underline text-[23px] bg-[#29b6f6] px-2 rounded-lg text-white flex items-center justify-center gap-[8px] outline-none">Pickie<FaShoppingBag/></Link>
                    <div className="flex items-center justify-center gap-[20px]">
                        <Link to="/" className="text-black outline-none border-[1px] border-black flex items-center justify-center hover:border-[#29b6f6] rounded-md hover:bg-[#29b6f6] no-underline" onClick={closingIF}><button className="hover:text-white w-fit duration-500 gap-[5px] flex items-center outline-none border-none p-2"><FaUser className="2sm:w-[23px] w-[18px] 2sm:h-[23px] h-[18px]"/></button></Link>
                        <Link to="/home" className="text-black outline-none border-[1px] border-black flex items-center justify-center hover:border-[#29b6f6] rounded-md hover:bg-[#29b6f6] no-underline" onClick={closingIF}><button className="hover:text-white w-fit duration-500 gap-[5px] flex items-center outline-none border-none p-2"><FaHome className="2sm:w-[23px] w-[18px] 2sm:h-[23px] h-[18px]"/></button></Link>
                        <Link to="/cart" className="text-black outline-none border-[1px] border-black flex items-center justify-center hover:border-[#29b6f6] rounded-md hover:bg-[#29b6f6] no-underline"  onClick={closingIF}><button className="hover:text-white w-fit duration-500 gap-[5px] flex items-center outline-none border-none p-2"><FaShoppingCart className="2sm:w-[23px] w-[18px] 2sm:h-[23px] h-[18px]"/></button></Link>
                    </div>
                </div>
            </nav>
            {firstRender}
    </div>
  )
}

export default SingleProduct;