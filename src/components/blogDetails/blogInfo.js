import { Link } from 'gatsby';
import React from 'react';

const BlogInfo = () => {
    return (
        <div className="row pt-30 pb-20">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-7">
                <div className="tag_cloud">
                    <span>Tags: </span>
                    <Link to="/blog-details" className="tag-cloud-link">Graphics,</Link>
                    <Link to="/blog-details" className="tag-cloud-link">Design,</Link>
                    <Link to="/blog-details" className="tag-cloud-link">Business</Link>
                </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-5">
                <div className="blog-social text-sm-end ">
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    );
};

export default BlogInfo;