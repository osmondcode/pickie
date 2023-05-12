import React from "react";
import { FaEnvelope, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileInfo = () => {

    
    return ( 
        <section className="w-[230px] hidden h-fit rounded-lg fixed top-[12vh] right-8 bg-[#fff] z-50 ">
            <div className="flex flex-col w-full h-fit relative items-center">
                <div className="hidden flex-col items-center justify-center w-full h-[250px] absolute top-0 left-0 bg-[#fff]">
                    <Link to="/" className="w-[160px] no-underline flex items-baseline justify-center py-2 bg-[#29b6f6] text-white font-medium rounded-md shadow-md shadow-[#d4d2d2]">SIGN IN</Link>
                    <hr className="w-full h-[1px] bg-[#333]"/>
                    <button className="w-full py-2 text-[#333] flex items-center justify-start px-2 gap-[20px] hover:bg-[#d4d2d2] hover:font-medium"><FaUser className="text-[20px]"/> My Account</button>
                    <button className="w-full py-2 text-[#333] flex items-center justify-start px-2 gap-[20px] hover:bg-[#d4d2d2] hover:font-medium my-2"><FaShoppingBag className="text-[20px]"/> Orders</button>
                    <button className="w-full py-2 text-[#333] flex items-center justify-start px-2 gap-[20px] hover:bg-[#d4d2d2] hover:font-medium"><FaHeart className="text-[20px]"/> Saved</button>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-[270px] absolute top-0 left-0 bg-[#fff]">
                    <button className="w-full py-2 text-[#333] flex items-center justify-start px-2 gap-[20px] hover:bg-[#d4d2d2] hover:font-medium"><FaUser className="text-[20px]"/> My Account</button>
                    <button className="w-full py-2 text-[#333] flex items-center justify-start px-2 gap-[20px] hover:bg-[#d4d2d2] hover:font-medium my-2"><FaShoppingBag className="text-[20px]"/> Orders</button>
                    <button className="w-full py-2 text-[#333] flex items-center justify-start px-2 gap-[20px] hover:bg-[#d4d2d2] hover:font-medium mb-2"><FaEnvelope className="text-[20px]"/> Inbox</button>
                    <button className="w-full py-2 text-[#333] flex items-center justify-start px-2 gap-[20px] hover:bg-[#d4d2d2] hover:font-medium"><FaHeart className="text-[20px]"/> Saved</button>
                    <hr className="w-full h-[1px] bg-[#333]"/>
                    <Link to="/" className="no-underline flex items-baseline justify-center p-2 hover:bg-blue-100 text-[#29b6f6] font-medium rounded-md">LOGOUT</Link>
                </div>
            </div>
        </section>
     );
}
  
export default ProfileInfo;