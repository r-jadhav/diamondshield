import { Link } from 'gatsby';
import React from 'react';

const PortPagination = () => {
    return (
        <div className="portfolio__pagination-wrapper">
            <div className="container">
                <div className="pagination-border pt-40 pb-40">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="portfolio__pagination">
                                <Link to="/project-details" className="link-btn-2"><i className="far fa-long-arrow-left"></i> Next</Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="portfolio__pagination text-end">
                                <Link to="/project-details" className="link-btn-2">Prev <i className="far fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortPagination;