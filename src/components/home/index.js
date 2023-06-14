import React from 'react';
import AboutSection from './aboutSection';
import CtaSection from './ctaSection';
import HeroSection from './heroSection';
import ProjectSection from './projectSection';
import ServiceSection from './serviceSection';
import VideoSection from './videoSection';
import BrandSection from '../elements/brands/brandSection'
import TestimonialSlider from '../elements/testimonials/testimonialSlider';
import QualitySection from './qualitySection';
import TrustSection from './trustSection';
import Footer from '../footer/footer';
import BlogSlider from '../elements/sliders/blogSlider';
import Header from '../header/header';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <ServiceSection />
                <CtaSection />
                <AboutSection />
                <ProjectSection />
                <VideoSection />
                <TestimonialSlider />
                <BrandSection />
                <TrustSection />
                <BlogSlider />
                <QualitySection />
            </main>
            <Footer />
        </>
    );
};

export default index;