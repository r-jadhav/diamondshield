import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import { Link } from 'gatsby';

const BlogSliderTwo = () => {
    return (
        <section className="blog-2 pt-75">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-wrapper text-center mb-50">
                            <h5 className="section-subtitle mb-20">recent blog posts</h5>
                            <h2 className="section-title">News & Articles</h2>
                        </div>
                    </div>
                </div>
                <div className="blog-active mb-120">
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
                                    slidesPerView: 2,
                                },
                                1400: {
                                    slidesPerView: 3
                                }
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: true
                            }}
                        >
                            <SwiperSlide>
                                <div className="kblog swiper-slides">
                                    <div className="kblog-img">
                                        <Link to="/blog-details"><img src="/assets/img/blog/blog-img-1.jpg" className="img-fluid" alt="blog-img" /></Link>
                                        <span>20 May</span>
                                    </div>
                                    <div className="kblog-text">
                                        <div className="kblog-meta">
                                            <Link to="/blog-details"><i className="fal fa-user-circle"></i> by Admin</Link>
                                            <Link to="/blog-details"><i className="fal fa-comments"></i> 2 Comments</Link>
                                        </div>
                                        <h3 className="kblog-text-title mb-20">
                                            <Link to="/blog-details">Our Strategy Create Business Growth</Link>
                                        </h3>
                                        <div className="kblog-text-link">
                                            <Link to="/blog-details">Read more <i className="far fa-chevron-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="kblog swiper-slides">
                                    <div className="kblog-img">
                                        <Link to="/blog-details"><img src="/assets/img/blog/blog-img-2.jpg" className="img-fluid" alt="blog-img" /></Link>
                                        <span>21 May</span>
                                    </div>
                                    <div className="kblog-text">
                                        <div className="kblog-meta">
                                            <Link to="/blog-details"><i className="fal fa-user-circle"></i> by Admin</Link>
                                            <Link to="/blog-details"><i className="fal fa-comments"></i> 2 Comments</Link>
                                        </div>
                                        <h3 className="kblog-text-title mb-20">
                                            <Link to="/blog-details">We work with change oriented executives</Link>
                                        </h3>
                                        <div className="kblog-text-link">
                                            <Link to="/blog-details">Read more <i className="far fa-chevron-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="kblog swiper-slides">
                                    <div className="kblog-img">
                                        <Link to="/blog-details"><img src="/assets/img/blog/blog-img-3.jpg" className="img-fluid" alt="blog-img" /></Link>
                                        <span>22 May</span>
                                    </div>
                                    <div className="kblog-text">
                                        <div className="kblog-meta">
                                            <Link to="/blog-details"><i className="fal fa-user-circle"></i> by Admin</Link>
                                            <Link to="/blog-details"><i className="fal fa-comments"></i> 2 Comments</Link>
                                        </div>
                                        <h3 className="kblog-text-title mb-20">
                                            <Link to="/blog-details">From banking and insurance to wealth</Link>
                                        </h3>
                                        <div className="kblog-text-link">
                                            <Link to="/blog-details">Read more <i className="far fa-chevron-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="kblog swiper-slides">
                                    <div className="kblog-img">
                                        <Link to="/blog-details"><img src="/assets/img/blog/blog-img-4.jpg" className="img-fluid" alt="blog-img" /></Link>
                                        <span>24 May</span>
                                    </div>
                                    <div className="kblog-text">
                                        <div className="kblog-meta">
                                            <Link to="/blog-details"><i className="fal fa-user-circle"></i> by Admin</Link>
                                            <Link to="/blog-details"><i className="fal fa-comments"></i> 2 Comments</Link>
                                        </div>
                                        <h3 className="kblog-text-title mb-20">
                                            <Link to="/blog-details">Our Strategy Create Business Growth</Link>
                                        </h3>
                                        <div className="kblog-text-link">
                                            <Link to="/blog-details">Read more <i className="far fa-chevron-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="kblog swiper-slides">
                                    <div className="kblog-img">
                                        <Link to="/blog-details"><img src="/assets/img/blog/blog-img-5.jpg" className="img-fluid" alt="blog-img" /></Link>
                                        <span>25 May</span>
                                    </div>
                                    <div className="kblog-text">
                                        <div className="kblog-meta">
                                            <Link to="/blog-details"><i className="fal fa-user-circle"></i> by Admin</Link>
                                            <Link to="/blog-details"><i className="fal fa-comments"></i> 2 Comments</Link>
                                        </div>
                                        <h3 className="kblog-text-title mb-20">
                                            <Link to="/blog-details">We work with change oriented executives</Link>
                                        </h3>
                                        <div className="kblog-text-link">
                                            <Link to="/blog-details">Read more <i className="far fa-chevron-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSliderTwo;