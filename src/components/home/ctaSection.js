import { Link } from 'gatsby';
import React from 'react';

const CtaSection = ({cta_space}) => {
    return (
        <section className={`${cta_space ? cta_space : "cta-area mt--60 z-index"}`} data-aos="fade-up">
            <div className="container">
                <div className="cta-bg bg-theme">
                    <div className="cta-number">
                        <div className="cta-number-icon mr-30">
                            <i className="flaticon-reaction"></i>
                        </div>
                        <div className="cta-number-text fix">
                            <span className="uppercase">Get a Free Consultation</span>
                            <h3><a href="tell:6668880000">666 888 0000</a></h3>
                        </div>
                    </div>
                    <div className="cta-description">
                        <p>Lorem ipsum dolor sit amet nsectetur
                            cing elituspe ndisse suscipit.</p>
                    </div>
                    <div className="cta-btn text-lg-end text-start">
                        <Link className="theme-btn black-btn" to="/services">Discover more</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;