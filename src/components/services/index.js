import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import BrandSection from '../elements/brands/brandSection';
import Footer from '../footer/footer';
import HeaderTwo from '../header/headerTwo';
import QualitySection from '../home/qualitySection';
import ServiceCategories from './serviceCategories';
import ServiceSectionThree from './serviceSectionThree';
import WhyWeThree from './whyWeThree';

const index = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb breadcrumbTitle="Services" breadcrumbSubTitle="Services" />
                <ServiceSectionThree />
                <WhyWeThree />
                <ServiceCategories />
                <BrandSection brand_space="brand-area3 pt-100 pb-100" />
                <QualitySection />
            </main>
            <Footer />
        </>
    );
};

export default index;