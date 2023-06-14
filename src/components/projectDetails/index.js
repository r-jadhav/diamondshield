import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import Header from '../header/header';
import ExperienceSection from './experienceSection';
import PortPagination from './portPagination';
import RecentWok from './recentWok';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="Project Details" breadcrumbSubTitle="Project Details" />
                <ExperienceSection />
                <PortPagination />
                <RecentWok />
            </main>
            <Footer />
        </>
    );
};

export default index;