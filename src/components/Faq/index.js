import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import Header from '../header/header';
import FaqAccordion from './faqAccordion';
import FaqForm from './faqForm';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="Faq" breadcrumbSubTitle="Faq" />
                <FaqAccordion />
                <FaqForm />
            </main>
            <Footer />
        </>
    );
};

export default index;