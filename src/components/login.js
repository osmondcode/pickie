import { FaShoppingBag } from "react-icons/fa";
import FormSidebar from "./formSidebar";
import { Link } from 'react-router-dom';

const Login = () => {
    return ( 
        <section className="w-full h-screen flex items-center justify-center relative">
            <div className="w-[50%] h-screen hidden md:flex">
                <FormSidebar/>
            </div>
            <span className="absolute w-[150px] overflow-hidden h-[60px] flex items-center justify-center gap-[15px]  top-[3%] lg:right-[1.5%] right-[40%.5%]">
            <button className="text-[23px] bg-[#29b6f6] px-2 rounded-lg text-white flex items-center justify-center gap-[8px]">Pickie<FaShoppingBag/></button>
            </span>
            <div className="w-[85%]  lg:w-1/2 py-4 flex flex-col items-center">
                <h1 className="text-[#4128b8] text-[1.6rem] font-bold">Welcome back!</h1>
                <form className="text-[#333] w-full 2sm:w-3/4 sm:w-2/3 text-start px-2 mt-3">
                    <label htmlFor="email">Email</label><br/>
                    <input className="w-full h-[35px] border border-[#888] rounded-sm mb-2 text-[22px] px-2 py-1  outline-[#00c0ff]" type="email" id="email" /><br/>
                    <label htmlFor="password">Password</label><br/>
                    <input className="w-full h-[35px] border border-[#888] rounded-sm mb-2 text-[22px] px-2 py-1  outline-[#00c0ff]" type="password" id="password" /><br/>
                    <button className="w-full bg-[#00c0ff] text-white py-2 text-[18px] rounded-sm mt-4">
                        <Link to="home">SIGN IN</Link>
                    </button>
                </form>
                <span className="text-[#4128b8] my-2 sm:text-[16px] text-[14px]">
                    Don't remember your password? <span className="underline cursor-pointer">Reset it now</span>
                </span>
                <h1 className="text-[22px] mt-5 text-[#231951]">New to Pickie? <Link to="Form" className="underline cursor-pointer">Sign Up</Link></h1>
            </div>
        </section>
     );
}
 
export default Login;