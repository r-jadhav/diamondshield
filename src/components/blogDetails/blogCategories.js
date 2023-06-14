import { Link } from 'gatsby';
import React from 'react';

const BlogCategories = () => {
    return (
        <div className="widget_categories grey-bg mb-30">
            <h4 className="bs-widget-title pl-15">Categories</h4>
            <ul>
                <li><Link to="/blogs">Web Developement <i className="far fa-long-arrow-right"></i></Link></li>
                <li><Link to="/blogs">Graphic Design <i className="far fa-long-arrow-right"></i></Link></li>
                <li><Link to="/blogs">SEO &amp; Content Writting <i className="far fa-long-arrow-right"></i></Link></li>
                <li><Link to="/blogs">Digital Marketing <i className="far fa-long-arrow-right"></i></Link></li>
                <li><Link to="/blogs">App Development <i className="far fa-long-arrow-right"></i></Link></li>
            </ul>
        </div>
    );
};

export default BlogCategories;