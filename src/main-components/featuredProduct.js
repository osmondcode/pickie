import FProductI from "../images/f1.png";
import FProductII from "../images/f2.png";
import FProductIII from "../images/f3.png";
import FProductIV from "../images/f4.png";
import FProductV from "../images/f5.png";
import FProductVI from "../images/f6.png";
const FeaturedProducts = () => {
    return ( 
        <section className="w-full min-h-[50vh] bg-white flex flex-wrap items-center justify-evenly gap-[25px] xl:py-0 py-[50px] xl:px-0 px-[30px]">
            <div className="w-[180px] flex flex-col items-center justify-center gap-[12px] border border-[#888] py-[25px] px-[15px] rounded cursor-pointer hover:shadow-lg duration-500">
                <img src={FProductI} alt=""/>
                <h3 className="text-[16px] w-fit p-1 px-2 bg-[#fddde4]">Free Shipping</h3>
            </div>
            <div className="w-[180px] flex flex-col items-center justify-center gap-[12px] border border-[#888] py-[25px] px-[15px] rounded cursor-pointer hover:shadow-lg duration-500">
                <img src={FProductII} alt=""/>
                <h3 className="text-[16px] w-fit p-1 px-2 bg-[#cdebbc]">Online Order</h3>
            </div>
            <div className="w-[180px] flex flex-col items-center justify-center gap-[12px] border border-[#888] py-[25px] px-[15px] rounded cursor-pointer hover:shadow-lg duration-500">
                <img src={FProductIII} alt=""/>
                <h3 className="text-[16px] w-fit p-1 px-2 bg-[#d1e8f2]">Save Money</h3>
            </div>
            <div className="w-[180px] flex flex-col items-center justify-center gap-[12px] border border-[#888] py-[25px] px-[15px] rounded cursor-pointer hover:shadow-lg duration-500">
                <img src={FProductIV} alt=""/>
                <h3 className="text-[16px] w-fit p-1 px-2 bg-[#cdd4f8]">Promotions</h3>
            </div>
            <div className="w-[180px] flex flex-col items-center justify-center gap-[12px] border border-[#888] py-[25px] px-[15px] rounded cursor-pointer hover:shadow-lg duration-500">
                <img src={FProductV} alt=""/>
                <h3 className="text-[16px] w-fit p-1 px-2 bg-[#f6dbf6]">Happy Sell</h3>
            </div>
            <div className="w-[180px] flex flex-col items-center justify-center gap-[12px] border border-[#888] py-[25px] px-[15px] rounded cursor-pointer hover:shadow-lg duration-500">
                <img src={FProductVI} alt=""/>
                <h3 className="text-[16px] w-fit p-1 px-2 bg-[#fff2e5]">24/7 Support</h3>
            </div>
        </section>
     );
}
 
export default FeaturedProducts;