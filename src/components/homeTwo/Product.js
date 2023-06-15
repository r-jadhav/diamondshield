import React from "react"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/bundle"
import { Link } from "gatsby"

const Product = () => {
  return (
    <section className="blog-2 pt-75">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-wrapper text-center mb-50">
              <h5 className="section-subtitle mb-20">recent product</h5>
              <h2 className="section-title">Products</h2>
            </div>
          </div>
        </div>
        {/* <div className="blog-active mb-120"> */}
          <div className="row mb-5">
            <div className="col-4">
              <div className="kblog swiper-slides">
                <div className="kblog-img">
                  <Link to="/blog-details">
                    <img
                      src="/assets/img/products/Prime_brand.jpg"
                      className="img-fluid"
                      alt="blog-img"
                    />
                  </Link>
                  
                </div>
                <div className="kblog-text">
                  <h3 className="kblog-text-title mb-20">
                    <Link to="/blog-details">
                        AUTOMOTIVE WINDOW TINT
                    </Link>
                  </h3>
                  <div className="kblog-text-link">
                    <Link to="/blog-details">
                      Read more <i className="far fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="kblog swiper-slides">
                <div className="kblog-img">
                  <Link to="/blog-details">
                    <img
                      src="/assets/img/products/Ultimate_brand.jpg"
                      className="img-fluid"
                      alt="blog-img"
                    />
                  </Link>
                 
                </div>
                <div className="kblog-text">
                  <h3 className="kblog-text-title mb-20">
                    <Link to="/blog-details">
                        HIGH GLOSS PAINT PROTECTION FILM
                    </Link>
                  </h3>
                  <div className="kblog-text-link">
                    <Link to="/blog-details">
                      Read more <i className="far fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="kblog swiper-slides">
                <div className="kblog-img">
                  <Link to="/blog-details">
                    <img
                      src="/assets/img/products/Stealth_brand.jpg"
                      className="img-fluid"
                      alt="blog-img"
                    />
                  </Link>
                 
                </div>
                <div className="kblog-text">
                  <h3 className="kblog-text-title mb-20">
                    <Link to="/blog-details">
                        SATIN FINISH PAINT PROTECTION FILM
                    </Link>
                  </h3>
                  <div className="kblog-text-link">
                    <Link to="/blog-details">
                      Read more <i className="far fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-5">

          <div className="col-4">
              <div className="kblog swiper-slides">
                <div className="kblog-img">
                  <Link to="/blog-details">
                    <img
                      src="/assets/img/products/Rx_brand.jpg"
                      className="img-fluid"
                      alt="blog-img"
                    />
                  </Link>
                 
                </div>
                <div className="kblog-text">
                  <h3 className="kblog-text-title mb-20">
                    <Link to="/blog-details">
                        ANTIMICROBIAL PROTECTION FILM
                    </Link>
                  </h3>
                  <div className="kblog-text-link">
                    <Link to="/blog-details">
                      Read more <i className="far fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="kblog swiper-slides">
                <div className="kblog-img">
                  <Link to="/blog-details">
                    <img
                      src="/assets/img/products/Fusion_brand.jpg"
                      className="img-fluid"
                      alt="blog-img"
                    />
                  </Link>
                  
                </div>
                <div className="kblog-text">
                  <h3 className="kblog-text-title mb-20">
                    <Link to="/blog-details">
                        HYDROPHOBIC CERAMIC COATING
                    </Link>
                  </h3>
                  <div className="kblog-text-link">
                    <Link to="/blog-details">
                      Read more <i className="far fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="kblog swiper-slides">
                <div className="kblog-img">
                  <Link to="/blog-details">
                    <img
                      src="/assets/img/products/Vision_brand.jpg"
                      className="img-fluid"
                      alt="blog-img"
                    />
                  </Link>
                  
                </div>
                <div className="kblog-text">
                  <h3 className="kblog-text-title mb-20">
                    <Link to="/blog-details">
                        HOME & OFFICE WINDOW FILM
                    </Link>
                  </h3>
                  <div className="kblog-text-link">
                    <Link to="/blog-details">
                      Read more <i className="far fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
          


        </div>
      {/* </div> */}
    </section>
  )
}

export default Product
