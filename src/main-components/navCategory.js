const navCategory = () => {
    return ( 
        <section className="w-full top-[18vh] md:top-[11.7vh] flex items-center justify-center font-thin border-t-2 border-[#888] fixed py-2 z-50 bg-blue-100">
            <ul className="w-full hidden md:flex items-center justify-center gap-[18px] lg:gap-[22px]">
                <li className="relative"><button className="after:left-0 after:bottom-[-4px] after:absolute after:w-full after:h-[2px] after:bg-[#888] font-normal">Home</button></li>
                <li><button>Art</button></li>
                <li><button>Books</button></li>
                <li><button>Baby</button></li>
                <li><button>Computers</button></li>
                <li><button>Electronics</button></li>
                <li><button>Gaming</button></li>
                <li><button>Home & Kitchen</button></li>
                <li><button>Men</button></li>
                <li><button>Sell</button></li>
                <li><button>Women</button></li>
            </ul>
            <div  className="w-full md:hidden flex items-center justify-center gap-[18px] lg:gap-[22px]">
                <span className="w-full md:hidden flex items-center gap-[18px] lg:gap-[22px] px-5">
                    <p className="relative"><button className="after:left-0 after:bottom-[-4px] after:absolute after:w-full after:h-[2px] after:bg-[#888] font-normal">Home</button></p>
                    <select className="bg-transparent outline-none">
                        <option>All Categories</option>
                        <option>Art</option>
                        <option>Books</option>
                        <option>Baby</option>
                        <option>Computers</option>
                        <option>Electronics</option>
                        <option>Gaming</option>
                        <option>Home & Kitchen</option>
                        <option>Men</option>
                        <option>Sell</option>
                        <option>Women</option>
                    </select>
                </span>
            </div>
        </section>
     );
}
 
export default navCategory;