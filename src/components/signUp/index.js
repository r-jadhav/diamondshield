import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import Header from '../header/header';
import SignUpMain from './signUpMain';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="SignUp" breadcrumbSubTitle="SignUp" />
                <SignUpMain />
            </main>
            <Footer />
        </>
    );
};

export default index;