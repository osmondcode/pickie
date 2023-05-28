import React from 'react'

const OrderSuccess = ({toogleModal}) => {
    const city = document.getElementById('city')
    const testThis = () => {
        alert(city.innerHTML)
    }

  return (
    <div className='w-full h-screen flex items-center justify-center bg-black/50 fixed top-0 left-auto'>
        <div className='w-[60%] h-[80vh] relative bg-blue-200 flex flex-col items-center justify-center rounded-lg'>
            <button onClick={toogleModal} className='px-3 py-1 bg-red-300 cursor-pointer absolute top-4 right-4'>close</button>
            <div className='py-[20px] h-[70vh] w-[400px] px-[20px] flex flex-col items-center justify-center border-[1px] border-[#333] rounded-sm'>
                <h3 className='mb-4'>Delivery address</h3>
                <form className='w-full flex flex-col items-center justify-center gap-3'>
                    <input className='cursor-text w-[300px] border-[0.5px] border-[#888] outline-none bg-transparent placeholder:text-[#555] p-2' required type='text' value="Nigeria" />
                    <input id='address' className='cursor-text w-[300px] border-[0.5px] border-[#888] outline-none bg-transparent placeholder:text-[#555] p-2' required type='text' placeholder='Address' />
                    <input className='cursor-text w-[300px] border-[0.5px] border-[#888] outline-none bg-transparent placeholder:text-[#555] p-2' type='text' placeholder='Additional information (Optional)' />
                    <input id='city' className='cursor-text w-[300px] border-[0.5px] border-[#888] outline-none bg-transparent placeholder:text-[#555] p-2' required type='text' placeholder='City' />
                    <input id='state' className='cursor-text w-[300px] border-[0.5px] border-[#888] outline-none bg-transparent placeholder:text-[#555] p-2' min={3} required type='text' placeholder='State/ Province/ Region' />
                    <input id='mobile' className='cursor-text w-[300px] border-[0.5px] border-[#888] outline-none bg-transparent placeholder:text-[#555] p-2' min={11} required type="text"  placeholder='Mobile number'/>
                    <button onClick={testThis} className='cursor-pointer w-[300px] py-2 text-white bg-[#29b6f6]'>CONFIRM ORDER</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default OrderSuccess