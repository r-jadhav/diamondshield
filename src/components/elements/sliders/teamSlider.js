import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import { Link } from 'gatsby';

const TeamSlider = () => {
    return (
        <div className="team-active">
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={30}
                    slidesPerView="auto"
                    speed={1500}
                    autoplaydisableoninteraction={"false"}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        1400: {
                            slidesPerView: 4
                        }
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true
                    }}
                    navigation={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className="kteam swiper-slides mb-30">
                            <div className="kteam-img">
                                <img src="/assets/img/team/team-img-1.jpg" className="img-fluid" alt="team-img" />
                                <div className="kteam-img-social">
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link to="/team-details">sarah albert</Link></h4>
                                <span className="uppercase">designer</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slides mb-30">
                            <div className="kteam-img">
                                <img src="/assets/img/team/team-img-2.jpg" className="img-fluid" alt="team-img" />
                                <div className="kteam-img-social">
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link to="/team-details">Mike Hardson</Link></h4>
                                <span className="uppercase">developer</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slides mb-30">
                            <div className="kteam-img">
                                <img src="/assets/img/team/team-img-3.jpg" className="img-fluid" alt="team-img" />
                                <div className="kteam-img-social">
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link to="/team-details">Christine eve</Link></h4>
                                <span className="uppercase">Programmer</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slides mb-30">
                            <div className="kteam-img">
                                <img src="/assets/img/team/team-img-4.jpg" className="img-fluid" alt="team-img" />
                                <div className="kteam-img-social">
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link to="/team-details">John Smith</Link></h4>
                                <span className="uppercase">artist</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slides mb-30">
                            <div className="kteam-img">
                                <img src="/assets/img/team/team-img-5.jpg" className="img-fluid" alt="team-img" />
                                <div className="kteam-img-social">
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link to="/team-details">melinda albert</Link></h4>
                                <span className="uppercase">writter</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default TeamSlider;