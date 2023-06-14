import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderTwo from '../header/headerTwo';
import BlogMain from './blogMain';

const index = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb breadcrumbTitle="Blog" breadcrumbSubTitle="Blog" />
                <BlogMain />
            </main>
            <Footer />
        </>
    );
};

export default index;