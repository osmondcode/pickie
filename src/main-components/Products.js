import { FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Products = ({productItems, handleAddButton, handleAddSingle}) => {
    return ( 
        <section className="w-full min-h-[100vh] flex flex-col items-center pt-5 bg-white">
            <h1 className="text-[2rem] text-center 2sm:text-[2.4rem] font-semibold mb-2 2sm:mx-2 mx-0">Featured Products</h1>
            <p className="text-center">Winter Collection New Morden Design</p>
            <div className="w-full min-h-screen flex items-center justify-center flex-wrap py-7 px-8 gap-[35px]">
            {productItems.map((item, index) => {return(

                <div key={index} className="no-underline w-[250px] py-[12px] px-[25px] border border-[#888] flex flex-col justify-center rounded-lg text-start cursor-pointer gap-[6px] relative duration-500 hover:shadow-md hover:shadow-[#888]">
                    <Link to="/SinglePro" onClick={() => handleAddSingle(item)}>
                        <img src={item.image} alt={item.name} className="w-full rounded-md h-[220px]"/>
                    </Link>
                    <h6 className="text-[14px] text-[#666]">{item.brand}</h6>
                    <h4 className="font-semibold text-[16px]">{item.name}</h4>
                    <span className="flex gap-[6px] text-yellow-400">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </span>
                    <h3 className="text-[18px] font-semibold text-[#29b6f6]">${item.price}</h3>
                    <button className="w-[40px] h-[40px] bg-blue-100 flex items-center justify-center absolute bottom-2 right-4 rounded-full text-[1.3em] text-[#29b6f6] hover:bg-[#29b6f6] hover:text-white duration-300" onClick={() => handleAddButton(item)}>
                        <FaShoppingCart/>
                    </button>
                </div>
            )})}
            </div>
        </section>
     );
}
 
export default Products;