import { FaApple, FaFacebookF, FaGooglePlay, FaInstagram, FaPinterest, FaShoppingBag, FaTwitter, FaYoutube } from "react-icons/fa";
import Payment from "../images/pay/pay.png";
const Newsletter = () => {
    return ( 
        <section className=" w-full min-h-[80vh] bg-white flex flex-col items-center justify-center pt-[5vh]">
            <div className="newsletter bg-[#041e42] w-full h-[29vh] 2sm:h-[26vh] md:h-[22vh] flex flex-col md:flex-row  items-start md:items-center md:justify-between justify-center gap-2 md:gap-5 lg:gap-0 px-[3%] xl:px-[6%] text-white">
                <span className="text-start flex flex-col items-start justify-center gap-0 md:gap-[5px]">
                    <h2 className="text-[24px] lg:text-[28px] font-semibold">Sign Up For Newsletter</h2>
                    <p className="text-slate-300 text-[16px] lg:text-[18px] font-medium">Get E-mail updates about our latest shop and <span className="text-[#fdac14]">special offers</span></p>
                </span>
                <span className="flex items-center justify-center w-full h-fit 2sm:h-fit 2sm:w-[400px] lg:w-[500px]">
                    <input type="email" placeholder="Your email address"  className="w-[70%] 2sm:w-[80%] py-2 px-3 lg:p-3 rounded-tl-lg rounded-bl-lg text-[#222] outline-none border-none"/>
                    <button className="w-[30%] 2sm:w-[20%] py-2 lg:py-3 bg-[#29b6f6] rounded-tr-lg rounded-br-lg">Sign Up</button>
                </span>
            </div>
            <footer className="w-full min-h-[60vh]  flex items-center justify-center flex-wrap pt-[5vh] xl:pt-0 gap-[30px] xl:gap-0">
                <div className="w-[500px] flex flex-col items-start justify-center gap-[10px] md:gap-[20px] pl-4 2sm:pl-0">
                    <button className="text-[23px] bg-[#29b6f6] px-2 rounded-lg text-white flex items-center justify-center gap-[8px]">Pickie<FaShoppingBag/></button>
                    <h2 className="text-[18px] font-semibold">Contact</h2>
                    <span className="flex items-start justify-center gap-[10px]">
                        <h3 className="text-[20px] font-semibold">Address:</h3>
                        <p>520 N Michigan Ave, Chicago, IL 60611, United States</p>
                    </span>
                    <span className="flex items-start gap-[10px]">
                        <h3 className="text-[20px] font-semibold">Phone:</h3>
                        <p>+234 903 3811 434</p>
                    </span>
                    <span className="flex items-start gap-[10px]">
                        <h3 className="text-[20px] font-semibold">Hours:</h3>
                        <p>24/7</p>
                    </span>
                    <span className="flex flex-col items-start gap-[10px]">
                        <h4 className="text-[20px] font-semibold">Follow us</h4>
                        <span className="flex items-start gap-3">
                            <button><FaFacebookF/></button>
                            <button><FaTwitter/></button>
                            <button><FaInstagram/></button>
                            <button><FaPinterest/></button>
                            <button><FaYoutube/></button>
                        </span>
                    </span>
                </div>
                    <span className="w-[180px] flex flex-col items-start text-start gap-1 flex-wrap">
                        <h2 className="font-semibold text-[18px]">About</h2>
                        <button className="text-[14px]">About Us</button>
                        <button className="text-[14px]">Delivery Information</button>
                        <button className="text-[14px]">Privacy Policy</button>
                        <button className="text-[14px]">Terms & Conditions</button>
                        <button className="text-[14px]">Contact Us</button>
                    </span>
                    <span className="w-[180px] flex flex-col items-start text-start gap-1">
                        <h2 className="font-semibold text-[18px]">My Account</h2>
                        <button className="text-[14px]">Profile Settings</button>
                        <button className="text-[14px]">Veiw Cart</button>
                        <button className="text-[14px]">My Wishlist</button>
                        <button className="text-[14px]">Track My Order</button>
                        <button className="text-[14px]">Help</button>
                    </span>
                    <span className="w-full 2sm:w-fit flex flex-col items-start text-start gap-1 px-2 2sm:px-0">
                        <h2 className="font-semibold text-[18px]">Install App</h2>
                        <p className="my-3 text-[18px] text-[#465b52]">From App Store or Google Play</p>
                        <span className="w-full 2sm:w-fit flex gap-2 flex-col 2sm:flex-row">
                            <div className="text-center flex items-start justify-center py-2 2sm:py-0 gap-[7px] border border-[#29b6f6] w-[70%] 2sm:w-[160px] rounded-lg cursor-pointer hover:bg-[#29b6f6] hover:text-white duration-500">
                                <FaApple className="text-[22px]"/>
                                <h4 className="text-[17px]">App Store</h4>
                            </div>
                            <div className="text-center flex items-start justify-center py-2 2sm:py-0 gap-[7px] border border-[#29b6f6] w-[70%] 2sm:w-[180px] rounded-lg cursor-pointer hover:bg-[#29b6f6] hover:text-white duration-500">
                                <FaGooglePlay className="text-[20px]"/>
                                    <h4 className="text-[17px]">Google Play</h4>
                            </div>
                        </span>
                        <p className="text-[#465b52] my-3 text-[18px]">Secured Payment Gateway</p>
                        <span>
                            <img src={Payment} alt=""/>
                        </span>
                    </span>
            </footer>
        </section>
     );
}
 
export default Newsletter;