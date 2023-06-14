import { Link } from 'gatsby';
import React from 'react';

const CommentSection = () => {
    return (
        <div className="row pr-15 pl-15">
            <div className="blog-comment-box">
                <div className="comment-title">
                    <h3 className="comment-box-title">
                        <Link to="/blog-details">2 Comments</Link>
                    </h3>
                </div>
                <div className="blog-single-comment d-flex">
                    <div className="blog-comment-img">
                        <Link to="/blog-details"><img src="/assets/img/blog/blog-img-author2.png" alt="blog-img" /></Link>
                    </div>
                    <div className="blog-comment-text">
                        <h4>Kevin Martin</h4>
                        <p>A step-by-step tutorial on adding authentication and authorization to your Next.js apps, with Auth0. We’ll be using a Next.js SDK to connect our application. </p>
                    </div>
                    <div className="reply-btn">
                        <Link to="/blog-details" className="comment-btn">Reply</Link>
                    </div>
                </div>
                <div className="blog-single-comment no-pt d-flex">
                    <div className="blog-comment-img">
                        <Link to="/blog-details"><img src="/assets/img/blog/blog-img-author3.png" alt="blog-img" /></Link>
                    </div>
                    <div className="blog-comment-text">
                        <h4>Jessica Brown</h4>
                        <p>Everything to keep in mind when designing and building a mega-dropdown, common pitfalls, hover entry/exit delays, trajectory triangle technique. </p>
                    </div>
                    <div className="reply-btn">
                        <Link to="/blog-details" className="comment-btn">Reply</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentSection;