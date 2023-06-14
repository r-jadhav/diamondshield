import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import Header from '../header/header';
import TeamMain from './teamMain';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="Meet the team" breadcrumbSubTitle="our team" />
                <TeamMain />
            </main>
            <Footer />
        </>
    );
};

export default index;