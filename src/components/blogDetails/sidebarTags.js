import { Link } from 'gatsby';
import React from 'react';

const SidebarTags = () => {
    return (
        <div className="widget_tag_cloud">
            <h4 className="bs-widget-title mb-25"> Tags </h4>
            <div className="tagcloud">
                <Link to="/blogs" className="tag-cloud-link">Graphics</Link>
                <Link to="/blogs" className="tag-cloud-link">Design</Link>
                <Link to="/blogs" className="tag-cloud-link">Business</Link>
                <Link to="/blogs" className="tag-cloud-link">Development</Link>
                <Link to="/blogs" className="tag-cloud-link">Technology</Link>
                <Link to="/blogs" className="tag-cloud-link">Content</Link>
            </div>
        </div>
    );
};

export default SidebarTags;