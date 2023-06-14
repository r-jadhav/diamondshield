import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import BlogDetailsMain from './blogDetailsMain';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <BlogDetailsMain />
            </main>
            <Footer />
        </>
    );
};

export default index;