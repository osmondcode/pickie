import React, { useState } from 'react'
import Confirmed from "./orderConfirmed";
import { FaTimesCircle } from "react-icons/fa";

const OrderSuccess = ({toogleModal, setCartItems}) => {
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [input3, setInput3] = useState("")
    const [input4, setInput4] = useState("")
    const [errorM, setErrorM] = useState("")
    const [successModal, setSuccessModal] = useState(false)


    const orderConfirm = () => {
        setSuccessModal(true)
    }

    const noOrder = (input1, input2, input3, input4, event) => {
        if (input1.length > 2 && input2.length > 2 && input3.length > 2 && input4.length > 10) {
            orderConfirm()
        } else {
            setErrorM("A required address is empty or too short to be an address")
        }
    }
    
    const onSubmit = event => {
        event.preventDefault()
    }
    
    
    const confirmOrderBtn = () => {
        noOrder(input1, input2, input3, input4);
    }
    
  return (
    <div className='w-full h-screen flex items-center justify-center bg-black/50 fixed top-0 left-auto z-50'>
        <div className='md:w-[60%] 2sm:w-[80%] w-full 2sm:min-h-[80vh] min-h-screen relative bg-blue-200 flex flex-col items-center justify-center rounded-lg py-4'>
            {successModal && (
                <Confirmed orderConfirm={orderConfirm} setCartItems={setCartItems} toogleModal={toogleModal} />
            )}
            <button onClick={toogleModal} className='px-3 py-1 cursor-pointer absolute top-4 right-4'><FaTimesCircle className='w-[22px] h-[22px] text-[#29b6f6]'/></button>
            <div className='py-[20px] min-h-[70vh] 2sm:w-[400px] w-full px-[20px] flex flex-col items-center justify-center lg:border-[1px] lg:border-[#333]  rounded-sm '>
                <h3 className='mb-4'>Delivery address</h3>
                <form onSubmit={onSubmit} className='w-full flex flex-col items-center justify-center gap-3'>
                    <input className='cursor-text 2sm:w-[300px] w-[280px] border-[0.5px] border-[#888] outline-none bg-transparent placeholder:text-[#555] p-2' required type='text' value="Nigeria" />
                    <input id='address' className='cursor-text 2sm:w-[300px] w-[280px] border-[0.5px] border-[#888] outline-none bg-transparent placeholder:text-[#555] p-2' required type='text' placeholder='Address' value={input1} onChange={(e) => setInput1(e.target.value)}/>
                    <input className='cursor-text 2sm:w-[300px] w-[280px] border-[0.5px] border-[#888] outline-none bg-transparent placeholder:text-[#555] p-2' type='text' placeholder='Additional information (Optional)' />
                    <input id='city' className='cursor-text 2sm:w-[300px] w-[280px] border-[0.5px] border-[#888] outline-none bg-transparent placeholder:text-[#555] p-2' required type='text' placeholder='City' value={input2} onChange={(e) => setInput2(e.target.value)}/>
                    <input id='state' className='cursor-text 2sm:w-[300px] w-[280px] border-[0.5px] border-[#888] outline-none bg-transparent placeholder:text-[#555] p-2' min={3} required type='text' placeholder='State/ Province/ Region' value={input3} onChange={(e) => setInput3(e.target.value)}/>
                    <input id='mobile' className='cursor-text 2sm:w-[300px] w-[280px] border-[0.5px] border-[#888] outline-none bg-transparent placeholder:text-[#555] p-2' min={11} required type="text"  placeholder='Mobile number' value={input4} onChange={(e) => setInput4(e.target.value)}/>
                    <p className='text-red-500 text-[14px] text-center 2sm:mx-0 mx-2'>{errorM}</p>
                    <button type='submit' onClick={confirmOrderBtn}  className='cursor-pointer 2sm:w-[300px] w-[280px] py-2 text-white bg-[#29b6f6]'>CONFIRM ORDER</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default OrderSuccess