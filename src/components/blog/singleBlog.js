import { Link } from 'gatsby';
import React from 'react';
import { useDispatch } from 'react-redux';
import { specificBlog } from '../../redux/features/blogSlice';

const SingleBlog = ({ blog }) => {
    // distructure items
    const { id, date, title, image, user, comments, button } = blog;
    // dispatch
    const dispatch = useDispatch();
    // handleBlogDetails
    const handleBlogDetails = () => {
        dispatch(specificBlog(id))
    }
    return (
        <div className="kblog">
            <div className="kblog-img">
                <Link to="/blog-details" onClick={handleBlogDetails} role='presentation'>
                    <img src={image} alt="blog-img" className="img-fluid" />
                </Link>
                <span>{date}</span>
            </div>
            <div className="kblog-text">
                <div className="kblog-meta">
                    <Link to="/blog-details" onClick={handleBlogDetails} role='presentation'><i className="fal fa-user-circle"></i> {user}</Link>
                    <Link to="/blog-details" onClick={handleBlogDetails} role='presentation'><i className="fal fa-comments"></i> {comments}</Link>
                </div>
                <h3 className="kblog-text-title mb-20">
                    <Link to="/blog-details" onClick={handleBlogDetails} role='presentation'>{title}</Link>
                </h3>
                <div className="kblog-text-link">
                    <Link to="/blog-details" onClick={handleBlogDetails} role='presentation'>{button} <i className="far fa-chevron-right"></i></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;