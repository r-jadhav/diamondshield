import React from 'react';
// import BrandSectionTwo from '../elements/brands/brandSectionTwo';
import BlogSliderTwo from '../elements/sliders/blogSliderTwo';
import Footer from '../footer/footer';
import HeaderTwo from '../header/headerTwo';
import CtaSection from '../home/ctaSection';
import TrustSection from '../home/trustSection';
import BenefitsSection from './benefitsSection';
import FactSection from './factSection';
import HeroSectionTwo from './heroSectionTwo';
import IntroductionSection from './introductionSection';
import ProjectTwo from './projectTwo';
import ServiceSectionTwo from './serviceSectionTwo';
import TeamSection from './teamSection';
import WhyWeSection from './whyWeSection';

const index = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <HeroSectionTwo />
                {/* <BrandSectionTwo /> */}
                {/* <IntroductionSection />
                <ServiceSectionTwo />
                <TrustSection />
                <TeamSection />
                <WhyWeSection />
                <ProjectTwo />
                <FactSection />
                <BenefitsSection /> */}
                <BlogSliderTwo />
                <CtaSection cta_space="cta-area mb--60 z-index" />
            </main>
            <Footer footer_space="pt-155 position-relative" />
        </>
    );
};

export default index;