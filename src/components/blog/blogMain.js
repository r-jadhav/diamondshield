import React from 'react';
import { useSelector } from 'react-redux';
import BlogPagination from './blogPagination';
import SingleBlog from './singleBlog';

const BlogMain = () => {
    const blogs = useSelector(state => state.blogs.blogs);
    return (
        <section className="blog-2 pt-120 pb-115">
            <div className="container">
                <div className='row'>
                    {blogs.map(blog =>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30" key={blog.id}>
                            <SingleBlog blog={blog} />
                        </div>
                    )}
                </div>
                <BlogPagination />
            </div>
        </section>
    );
};

export default BlogMain;