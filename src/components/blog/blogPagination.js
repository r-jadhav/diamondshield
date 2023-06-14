import React from 'react';

const BlogPagination = () => {
    return (
        <div className="row">
            <div className="col-xxl-12">
                <div className="basic-pagination wow fadeInUp mt-30" data-wow-delay=".2s">
                    <ul className="d-flex align-items-center">
                        <li className="prev">
                            <button type='button' className="link-btn link-prev">
                                <i className="far fa-long-arrow-left"></i>
                            </button>
                        </li>
                        <li>
                            <button type='button' className="active">1</button>
                        </li>
                        <li>
                            <button type='button'>2</button>
                        </li>
                        <li>
                            <button type='button'>3</button>
                        </li>
                        <li className="next">
                            <button type='button' className="link-btn">
                                <i className="far fa-long-arrow-right"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogPagination;