import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import Header from '../header/header';
import ForgotPasswordMain from './forgotPasswordMain';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="Forgot Password" breadcrumbSubTitle="Forgot Password" />
                <ForgotPasswordMain />
            </main>
            <Footer />
        </>
    );
};

export default index;