import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import Header from '../header/header';
import SignInMain from './signInMain';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="SignIn" breadcrumbSubTitle="SignIn" />
                <SignInMain />
            </main>
            <Footer />
        </>
    );
};

export default index;