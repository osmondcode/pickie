import BannerImg from "../images/banner img.png";
const HomeBanner = () => {
    return ( 
        <section className="w-full h-screen pt-[15vh] flex items-center justify-between">
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center pr-[15px] 2sm:pr-0 pl-[15px] 2sm:pl-[25px] sm:pl-[65px]">
                <h3 className="text-[26px] text-[#111] font-semibold ">Trade-in-offer</h3>
                <h1 className="text-[2.4rem] 2sm:text-[3rem] text-[#111] font-bold text-start leading-[45px]">Super value deals<br/><span className="text-[#29b6f6]">On all products</span></h1>
                <p className="text-[#222] text-start">Save more width coupons & up to 70% off!</p>
                <button className="bannerBtn w-[200px] h-[50px] items-center justify-center mt-[18px] ml-[15px]">Shop Now</button>
            </div>
            <div className="w-1/2 h-full hidden md:flex items-start overflow-hidden relative pt-9">
                <img src={BannerImg} alt="" className="object-cover xl:absolute left-0 bottom-[-20px] "/>
            </div>
        </section>
     );
}
 
export default HomeBanner;