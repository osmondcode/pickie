import Laptop from "../images/laptop.png";

const HomeBanner3 = () => {
    return ( 
        <section className="w-full h-screen pt-[15vh] flex items-center justify-between">
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center pr-[15px] 2sm:pr-0 pl-[15px] 2sm:pl-[25px] sm:pl-[65px]">
                <h3 className="text-[26px] text-[#111] font-semibold ">Acient Arts</h3>
                <h1 className="text-[2.4rem] 2sm:text-[3rem] mt-3 text-[#111] font-bold text-start leading-[45px]">Work Desk<br/>Surface Studio <span className="text-[#29b6f6]">2018</span></h1>
                <p className="text-[#222] flex items-baseline justify-center gap-[15px] mt-[15px]">Starting at <h1 className="text-[24px] text-[#29b6f6]">£258.75</h1></p>
                <button className="bannerBtn w-[200px] h-[50px] items-center justify-center mt-[18px] ml-[15px]">Shop Now</button>
            </div>
            <div className="w-1/2 h-full hidden md:flex items-start overflow-hidden relative">
                <img src={Laptop} alt=""  className="object-cover xl:absolute left-0 bottom-0 w-full"/>
            </div>
        </section>
     );
}
 
export default HomeBanner3;