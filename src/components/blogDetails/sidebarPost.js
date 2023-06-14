import { Link } from 'gatsby';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { specificBlog } from '../../redux/features/blogSlice';

const SidebarPost = () => {
    const sidebarBlogs = useSelector(state => state.blogs.blogs);
    const dispatch = useDispatch();
    return (
        <div className="widget_-latest-posts mb-30">
            <h4 className="bs-widget-title mb-25"> Latest Posts </h4>
            <div className="sidebar__widget-content">
                {sidebarBlogs.slice(3, 6).map(blog => (
                    <div className="rc-post d-flex mb-15" key={blog.id}>
                        <div className="rc-thumb" onClick={() => dispatch(specificBlog(blog.id))}>
                            <Link to="/blog-details"><img src={blog.image} alt="blog-img" /></Link>
                        </div>
                        <div className="rc-text">
                            <div className="kblog-meta">
                                <Link to="/blog-details" onClick={() => dispatch(specificBlog(blog.id))}><i className="fal fa-user-circle"></i> {blog.user}</Link>
                            </div>
                            <h5 onClick={() => dispatch(specificBlog(blog.id))}>
                                <Link to="/blog-details">{blog.title.substring(0, 30)}...</Link>
                            </h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SidebarPost;