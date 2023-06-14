import { Link } from 'gatsby';
import React from 'react';

const Breadcrumb = ({ breadcrumbTitle, breadcrumbSubTitle }) => {
    return (
        <section className="page-title-area breadcrumb-spacing" style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-bg.jpg)" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-9">
                        <div className="page-title-wrapper text-center">
                            <h3 className="page-title mb-25">{breadcrumbTitle}</h3>
                            <div className="breadcrumb-menu">
                                <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                    <ul className="trail-items">
                                        <li className="trail-item trail-begin"><Link to="/"><span>Home</span></Link></li>
                                        <li className="trail-item trail-end"><span>{breadcrumbSubTitle}</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumb;