import {FaBars, FaSearch, FaShoppingCart, FaTimes, FaUser, FaFacebookF, FaTwitter, FaInstagram, FaShoppingBag, } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
    

    return ( 
        <section className="w-full min-h-[12vh] flex flex-col items-center justify-between shadow shadow-[#888] fixed z-20 bg-blue-100">
            <div className="w-full  flex items-center justify-between px-[10px] 2sm:px-[20px] md:px-[25px]  bg-blue-100">
            <span className="w-full h-[10vh] md:h-[12vh] flex items-center justify-between ">
            <span className="flex md:hidden w-fit  gap-[15px] 2sm:gap-[20px] items-center justify-center ">
                <button className=" flex lg:hidden"><FaBars className="w-[23px] h-[23px]"/></button>
                <button className="text-[23px] bg-[#29b6f6] px-2 rounded-lg text-white flex items-center justify-center gap-[8px]">Pickie<FaShoppingBag/></button>
            </span>
            <button className="text-[25px] bg-[#29b6f6] px-2 rounded-lg text-white hidden md:flex items-center justify-center gap-[8px]">Pickie<FaShoppingBag/></button>
            <span className="w-[20%] md:w-[50%] hidden md:flex items-center justify-between border rounded-none bg-teal-400 md:rounded-lg overflow-hidden">
                <input type='text' placeholder="What's on your mind" className="w-[87%] hidden sm:flex border-none outline-none px-[15px] py-[8px]"/>
                <button className="w-[34px] sm:w-[13%] h-[41px] text-white bg-[#29b6f6] text-[21px] hidden md:flex items-center justify-center"><FaSearch/></button>
            </span>
            <span className="w-[35%] lg:w-fit hidden  lg:flex items-center  justify-center text-[20px]">
                <ul className="w-full flex items-center justify-between  text-[20px] gap-[15px]">
                    <li><button className="w-[40px] h-[40px] p-[5px] hover:bg-[#29b6f6] hover:text-white duration-500 flex items-center justify-center border border-[#29b6f6] rounded-full text-[#333]"><FaFacebookF/></button></li>
                    <li><button className="w-[40px] h-[40px] p-[5px] hover:bg-[#29b6f6] hover:text-white duration-500 flex items-center justify-center border border-[#29b6f6] rounded-full text-[#333]"><FaTwitter/></button></li>
                    <li><button className="w-[40px] h-[40px] p-[5px] hover:bg-[#29b6f6] hover:text-white duration-500 flex items-center justify-center border border-[#29b6f6] rounded-full text-[#333]"><FaInstagram/></button></li>
                    <Link to="/Cart" className="relative"><button className="w-[40px] h-[40px] p-[5px] hover:bg-[#29b6f6] hover:text-white duration-500 flex items-center justify-center border border-[#29b6f6] rounded-full text-[#333]"><FaShoppingCart/></button></Link>
                    <li><button className="w-[40px] h-[40px] p-[5px] hover:bg-[#29b6f6] hover:text-white duration-500 flex items-center justify-center border border-[#29b6f6] rounded-full text-[#333]"><FaUser/></button></li>
                </ul>
            </span>
                <div className="flex lg:hidden w-fit gap-[20px] items-center justify-center mt-[12px]">
                    <Link to="/" className="no-underline text-black"><button className="flex items-center justify-center lg:hidden"> <FaUser className="w-[23px] h-[23px]"/></button></Link>
                    <Link to="/Cart" className="relative"><button className="w-[40px] h-[40px] p-[5px] hover:bg-[#29b6f6] hover:text-white duration-500 flex items-center justify-center border border-[#29b6f6] rounded-full text-[#333]"><FaShoppingCart className="w-[23px] h-[23px]"/></button></Link>
                </div>
            </span>
            </div>
            <div className="px-[15px] 2sm:px-[0] flex md:hidden w-full h-[8vh] items-center justify-center">
                <input type="text" placeholder="Search Pickie" className="w-[85%] h-[5.5vh] rounded-tl-md rounded-bl-md px-3 outline-none border-none"/>
                <button className="w-[40px] h-[5.5vh] flex items-center justify-center text-white bg-[#29b6f6] rounded-tr-md rounded-br-md"><FaSearch/></button>
            </div>

            <span className="w-full 2sm:w-[80%] h-screen absolute z-30 top-0 right-0 bg-blue-100 shadow-sm shadow-[#888] hidden flex-col p-4">
                <button className="self-end"><FaTimes className="w-[23px] h-[23px] flex md:hidden"/></button>
                <ul className="w-full h-[50%] mt-10 2sm:h-fit flex flex-col items-center 2sm:items-start justify-between text-[20px] gap-[18px]">
                    <li className="list-none relative"><button className="flex items-center gap-[8px] ease-in-out duration-[0.5s] hover:text-[#29b6f6] after:content-[''] after:w-[50%] after:h-[2px] after:bg-[#29b6f6] after:absolute after:duration-500 after:ease-in-out after:bottom-[-4px] after:left-0 text-[#29b6f6]">Home</button></li>
                    <li className="list-none relative"><button className="flex items-center gap-[8px] ease-in-out duration-[0.5s] hover:text-[#29b6f6] hover:after:content-[''] hover:after:w-[50%] hover:after:h-[2px] hover:after:bg-[#29b6f6] hover:after:absolute hover:after:duration-500 hover:after:ease-in-out hover:after:bottom-[-4px] hover:after:left-0">About</button></li>
                    <li className="list-none relative"><button className="flex items-center gap-[8px] ease-in-out duration-[0.5s] hover:text-[#29b6f6] hover:after:content-[''] hover:after:w-[50%] hover:after:h-[2px] hover:after:bg-[#29b6f6] hover:after:absolute hover:after:duration-500 hover:after:ease-in-out hover:after:bottom-[-4px] hover:after:left-0">Shop</button></li>
                    <li className="list-none relative"><button className="flex items-center gap-[8px] ease-in-out duration-[0.5s] hover:text-[#29b6f6] hover:after:content-[''] hover:after:w-[50%] hover:after:h-[2px] hover:after:bg-[#29b6f6] hover:after:absolute hover:after:duration-500 hover:after:ease-in-out hover:after:bottom-[-4px] hover:after:left-0">Blog</button></li>
                    <li className="list-none relative"><button className="flex items-center gap-[8px] ease-in-out duration-[0.5s] hover:text-[#29b6f6] hover:after:content-[''] hover:after:w-[50%] hover:after:h-[2px] hover:after:bg-[#29b6f6] hover:after:absolute hover:after:duration-500 hover:after:ease-in-out hover:after:bottom-[-4px] hover:after:left-0">Contact</button></li>
                    <li className="list-none relative"><button className="flex items-center gap-[8px] ease-in-out duration-[0.5s] hover:text-[#29b6f6] hover:after:content-[''] hover:after:w-[50%] hover:after:h-[2px] hover:after:bg-[#29b6f6] hover:after:absolute hover:after:duration-500 hover:after:ease-in-out hover:after:bottom-[-4px] hover:after:left-0">Cart</button></li>
                    <li className="list-none relative"><button className="flex items-center justify-center ease-in-out duration-[0.5s] bg-[#29b6f6]  py-[4px] px-[8px] rounded-sm gap-[10px]">Account <FaUser/></button></li>

                </ul>
            </span>
        </section>
     );
}
 
export default Navbar;