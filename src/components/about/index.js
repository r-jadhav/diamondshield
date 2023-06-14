import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import BrandSection from '../elements/brands/brandSection';
import TestimonialSlider from '../elements/testimonials/testimonialSlider';
import Footer from '../footer/footer';
import HeaderTwo from '../header/headerTwo';
import FactSection from '../homeTwo/factSection';
import Mission from './mission';
import TeamTwo from './teamTwo';
import WhyWeTwo from './whyWeTwo';

const index = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb breadcrumbTitle="About" breadcrumbSubTitle="About Us" />
                <Mission />
                <TestimonialSlider testimonial_space="testimonial-area pt-85 pb-85" />
                <FactSection fact_space="fact-area pb-85" />
                <WhyWeTwo />
                <TeamTwo />
                <BrandSection brand_space="brand-area2 bg-grey pt-100 pb-100" />
            </main>
            <Footer />
        </>
    );
};

export default index;