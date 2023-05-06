import Navbar from "./main-components/navbar";
import HomeBanner1 from "./main-components/homebanner1";
import HomeBanner2 from "./main-components/homebanner2";
import HomeBanner3 from "./main-components/homebanner3";
import FeaturedProducts from "./main-components/featuredProduct";
import Products from "./main-components/Products";
import Navcategory from "./main-components/navCategory";
import Upcomingseason from "./main-components/upcomingSeason";
import Newsletter from "./main-components/newsletter";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return ( 
        <section className="w-full min-h-screen bg-blue-100 relative overflow-hidden">
            <Navbar/>
            <Navcategory/>
            <div>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <HomeBanner1/>  
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <HomeBanner2/>  
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <HomeBanner3/>  
                    </Carousel.Item>
                </Carousel>
            </div>
            <FeaturedProducts/>
            <Products/>
            <Upcomingseason/>
            <Newsletter/>
        </section>
     );
}
 
export default Home;