import React from 'react'
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";

const orderConfirmed = ({orderConfirm, toogleModal, setCartItems}) => {
    
    const closeModal = () =>{
        orderConfirm()
        toogleModal()
        setCartItems([])
    }

    
  return (
    <div className='absolute z-40 py-[20px] h-full bg-blue-200 w-full px-[20px] flex flex-col items-center justify-center border-[1px] border-[#333] rounded-sm'>
        <button className='p-2 absolute z-50 top-4 right-6' onClick={closeModal}><FaTimesCircle className='w-[22px] h-[22px]  text-[#29b6f6]'/></button>
        <div className='w-full h-full flex flex-col items-center justify-center text-center'>
            <span className='border-[3px] border-blue-300 w-[120px] h-[120px] rounded-full flex items-center justify-center'><FaCheck className='w-[50px] h-[50px] text-[#29b6f6]'/></span>
            <p className='mt-10'>Your order has been confirmedand is now in the process of being prepared for shipment</p>
            <button onClick={closeModal} className='px-4 py-2 bg-[#29b6f6] mt-4 active:translate-y-1 rounded'><Link to="/home" className='text-white no-underline'>Continue Shopping</Link></button>
        </div>
    </div>
  )
}

export default orderConfirmed