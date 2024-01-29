import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../assets/css/swiperStyles.css";
import {useSelector} from "react-redux";
import {SliderCard} from "../components";
function Slider() {
    const products = useSelector((state) => state.products);
    const [fruits, setFruits] = useState(null);

    useEffect(() => {
        setFruits(
            products?.filter((product) => product.product_category === "fruits")
        );
    }, [products]);

    return (
        <div className="w-full pt-24">
            <Swiper
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={30}
                grabCursor={true}
                className="mySwiper"
            >
                {fruits &&
                    fruits.map((fruit) => (
                        <SwiperSlide key={fruit.productId}>
                            <SliderCard data={fruit} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}

export default Slider;
