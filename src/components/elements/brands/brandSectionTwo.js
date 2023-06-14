import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import 'swiper/css/bundle'

const BrandSectionTwo = () => {
    return (
        <div className="brand-area pt-100 pb-100 bg-heading">
            <div className="container">
                <div className="brand-active">
                    <div className="align-items-center">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={30}
                            slidesPerView="auto"
                            speed={1500}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                },
                                550: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 4,
                                },
                                1200: {
                                    slidesPerView: 5,
                                }
                            }}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: true
                            }}
                        >
                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slides wow fadeInUp" data-swiper-autoplay="10000">
                                    <img src="/assets/img/brand/brand-6.png" className="img-fluid" alt="img" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slides wow fadeInUp" data-swiper-autoplay="10000">
                                    <img src="/assets/img/brand/brand-7.png" className="img-fluid" alt="img" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slides wow fadeInUp" data-swiper-autoplay="10000">
                                    <img src="/assets/img/brand/brand-8.png" className="img-fluid" alt="img" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slides wow fadeInUp" data-swiper-autoplay="10000">
                                    <img src="/assets/img/brand/brand-9.png" className="img-fluid" alt="img" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slides wow fadeInUp" data-swiper-autoplay="10000">
                                    <img src="/assets/img/brand/brand-10.png" className="img-fluid" alt="img" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slides wow fadeInUp" data-swiper-autoplay="10000">
                                    <img src="/assets/img/brand/brand-6.png" className="img-fluid" alt="img" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandSectionTwo;