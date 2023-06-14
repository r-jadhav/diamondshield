import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import Header from '../header/header';
import PricingTab from './pricingTab';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="Pricing Plans" breadcrumbSubTitle="Pricing Plans" />
                <PricingTab />
            </main>
            <Footer />
        </>
    );
};

export default index;