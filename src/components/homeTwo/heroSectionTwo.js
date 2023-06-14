import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Link } from 'gatsby';

const HeroSectionTwo = () => {
    return (
        <section className="slider-area fix position-relative">
            <div className="slider-active slider-active-2">
                <div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                        effect="fade"
                        spaceBetween={30}
                        slidesPerView="auto"
                        autoplaydisableoninteraction={"false"}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1
                            },
                            1200: {
                                slidesPerView: 1,
                            }
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true
                        }}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className="single-slider slider-height-2 swiper-slides d-flex align-items-center" data-swiper-autoplay="10000">
                                <div className="slide-bg" style={{ backgroundImage: "url(/assets/img/slider/slider-3.jpg)" }}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="kslider kslider-2 z-index text-center">
                                                <h4 className="kslider--subtitle__two mb-15">Welcome to digital agency</h4>
                                                <h2 className="kslider--title__two mb-35">Digital Marketing <br />Business</h2>
                                                <div className="kslider--btn">
                                                    <Link to="/services" className="theme-btn">Discover more</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="common-shape-wrapper common-shape-wrapper2">
                                    <div className="common-shape-inner common-shape-inner2"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-slider slider-height-2 swiper-slides d-flex align-items-center" data-swiper-autoplay="10000">
                                <div className="slide-bg" style={{ backgroundImage: "url(/assets/img/slider/slider-2.jpg)" }}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="kslider kslider-2 z-index text-center">
                                                <h4 className="kslider--subtitle__two mb-15">Welcome to digital agency</h4>
                                                <h2 className="kslider--title__two mb-35">Digital Marketing <br />Business</h2>
                                                <div className="kslider--btn">
                                                    <Link to="/services" className="theme-btn">Discover more</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="common-shape-wrapper common-shape-wrapper2">
                                    <div className="common-shape-inner common-shape-inner2"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-slider slider-height-2 swiper-slides d-flex align-items-center" data-swiper-autoplay="10000">
                                <div className="slide-bg" style={{ backgroundImage: "url(/assets/img/slider/slider-1.jpg)" }}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="kslider kslider-2 z-index text-center">
                                                <h4 className="kslider--subtitle__two mb-15">Welcome to digital agency</h4>
                                                <h2 className="kslider--title__two mb-35">Digital Marketing <br />Business</h2>
                                                <div className="kslider--btn">
                                                    <Link to="/services" className="theme-btn">Discover more</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="common-shape-wrapper common-shape-wrapper2">
                                    <div className="common-shape-inner common-shape-inner2"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="slider-paginations slide-dots"></div>
            </div>
        </section>
    );
};

export default HeroSectionTwo;