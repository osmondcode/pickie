const upcomingSeason = () => {
    return ( 
        <section className="w-full px-2 sm:px-0 min-h-screen bg-white flex flex-col items-center pt-[4vh]">
            <h1 className="text-[2.3rem] sm:text-[2.6rem] font-semibold mb-2">UPCOMING SEASONS</h1>
            <p className="mb-[30px]">Summer/Winter Collections & Crazy Deals Coming Soon</p>
            <div className="w-[90%] hidden lg:flex items-center justify-between mb-[50px]">
                <span className="crazy-deals w-[46%] h-[43vh] text-white relative cursor-pointer rounded-lg">
                   <div className="w-full absolute bg-black/30 flex flex-col justify-center items-start pl-[20px] h-[43vh]">
                        <h3 className="text-[23px] font-normal">crazy deals</h3>
                        <h1 className="text-[30px]">Get 60% off delivery fee</h1>
                        <p>Save money when you get 60% off your delivery fee</p>
                        <button className="py-2 px-3 border border-white mt-3">Learn More</button>
                   </div>
                </span>
                <span className="crazy-deals2 w-[46%] h-[43vh] text-white relative cursor-pointer rounded-lg">
                   <div className="w-full absolute bg-black/30 flex flex-col justify-center items-start h-[43vh] pl-[20px]">
                        <h3 className="text-[23px] font-normal">Summer/Winter</h3>
                        <h1 className="text-[30px]">Upcoming Season</h1>
                        <p>interesting features and deals that will blow your mind</p>
                        <button className="py-2 px-3 border border-white mt-3">View Collections</button>
                   </div>
                </span>
            </div>
            <div className="w-[90%] min-h-[27vh] flex-wrap flex items-center justify-center lg:justify-between gap-6 lg:gap-0">
                <span className="gaming w-full 2sm:w-[360px] xl:w-[30%] h-[30vh] flex  flex-col text-white items-start justify-center  relative rounded-lg">
                    <div className=" flex flex-col items-start justify-center pl-[20px]  absolute w-full h-[30vh] bg-black/30">
                        <h1 className="text-[25px] font-semibold">GAMING COLLECTIONS</h1>
                        <p>Get 70% OFF Every Gaming Item</p>
                    </div>
                </span>
                <span className="clothing w-full 2sm:w-[360px] xl:w-[30%] h-[30vh] flex flex-col text-white items-start justify-center  relative rounded-lg">
                    <div className=" flex flex-col items-start justify-center pl-[20px] absolute w-full h-[30vh] bg-black/40">
                        <h1  className="text-[25px] font-semibold">BABY CLOTHING</h1>
                        <p>Get Best Offers This Season</p>
                    </div>
                </span>
                <span className="sneakers w-full 2sm:w-[360px] xl:w-[30%] h-[30vh] flex flex-col text-white items-start justify-center  relative rounded-lg my-0 lg:my-4 xl:my-0">
                    <div className=" flex flex-col items-start justify-center pl-[20px] absolute w-full h-[30vh] bg-black/50">
                        <h1  className="text-[25px] font-semibold">SNEAKERS LOVER</h1>
                        <p>NEW TRENDING SNEAKERS</p>
                    </div>
                </span>
            </div>
        </section>
     );
}
export default upcomingSeason;