import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderTwo from '../header/headerTwo';
import ProjectTab from './projectTab';

const index = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb breadcrumbTitle="Projects" breadcrumbSubTitle="Projects" />
                <ProjectTab />
            </main>
            <Footer />
        </>
    );
};

export default index;