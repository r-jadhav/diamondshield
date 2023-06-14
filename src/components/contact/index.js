import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderTwo from '../header/headerTwo';
import CtaSection from '../home/ctaSection';
import ContactSection from './contactSection';
import MapSection from './mapSection';

const index = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb breadcrumbTitle="Contct" breadcrumbSubTitle="Contct Us" />
                <ContactSection />
                <CtaSection cta_space="cta-area mb--60 z-index" />
                <MapSection />
            </main>
            <Footer />
        </>
    );
};

export default index;