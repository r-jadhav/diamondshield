import { Link } from 'gatsby';
import React from 'react';

const ServiceSectionThree = () => {
    return (
        <section className="service-2 pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="kservice-2 mb-30 wow fadeInUp">
                            <div className="kservice-text-2">
                                <span>Services</span>
                                <h4 className="kservice-title-2"><Link to="/service-details">Website <br />Development</Link></h4>
                                <i><img src="/assets/img/icon/service-icon-3.png" className="img-fluid" alt="cta-icon" /></i>
                            </div>
                            <div className="kservice-img-2">
                                <img src="/assets/img/service/service-img-1.jpg" alt="service-img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="kservice-2 mb-30 wow fadeInUp">
                            <div className="kservice-text-2">
                                <span>Services</span>
                                <h4 className="kservice-title-2"><Link to="/service-details">Graphic <br />designing</Link></h4>
                                <i><img src="/assets/img/icon/service-icon-4.png" className="img-fluid" alt="cta-icon" /></i>
                            </div>
                            <div className="kservice-img-2">
                                <img src="/assets/img/service/service-img-2.jpg" className="img-fluid" alt="service-img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="kservice-2 mb-30 wow fadeInUp">
                            <div className="kservice-text-2">
                                <span>Services</span>
                                <h4 className="kservice-title-2"><Link to="/service-details">SEO & Content <br />writting</Link></h4>
                                <i><img src="/assets/img/icon/service-icon-5.png" className="img-fluid" alt="cta-icon" /></i>
                            </div>
                            <div className="kservice-img-2">
                                <img src="/assets/img/service/service-img-3.jpg" className="img-fluid" alt="service-img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="kservice-2 mb-30 wow fadeInUp">
                            <div className="kservice-text-2">
                                <span>Services</span>
                                <h4 className="kservice-title-2"><Link to="/service-details">digital <br />marketing</Link></h4>
                                <i><img src="/assets/img/icon/about-icon-2.png" className="img-fluid" alt="cta-icon" /></i>
                            </div>
                            <div className="kservice-img-2">
                                <img src="/assets/img/service/service-img-4.jpg" className="img-fluid" alt="service-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSectionThree;