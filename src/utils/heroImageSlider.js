"use client"
import Image from "next/image";
import { images } from "../data/heroImageForSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Autoplay,
    Pagination,
    EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSlider = () => {
    return (
        <div className="relative p-2 w-full h-96 md:h-96 md:p-1">

            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}

                effect="fade"

                fadeEffect={{
                    crossFade: true,
                }}

                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}

                pagination={{
                    clickable: true,
                }}

                loop={true}

                speed={3000}

                className="w-full h-full"
            >

                {images.map((img, index) => (
                    <SwiperSlide key={index}>

                        <div className="relative w-full h-full">

                            <Image
                                src={img}
                                alt="School Banner"
                                fill
                                priority
                                className="object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 z-10"></div>

                            {/* Text */}
                            <div className="absolute z-10 inset-0 flex flex-col items-center justify-center text-white  text-center">

                                <h1 className="text-3xl md:text-3xl font-bold">
                                    Welcome To Vikram Sarabhai School Bardoli
                                </h1>

                                <p className="mt-4 text-lg">
                                    Bright Future Starts Here
                                </p>

                            </div>

                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    );
}

export default HeroSlider;