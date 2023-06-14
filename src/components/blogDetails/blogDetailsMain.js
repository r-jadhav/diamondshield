import { Link } from 'gatsby';
import React from 'react';
import { useSelector } from 'react-redux';
import BlogAuthor from './blogAuthor';
import BlogCategories from './blogCategories';
import BlogInfo from './blogInfo';
import CommentForm from './commentForm';
import CommentSection from './commentSection';
import SearchBar from './searchBar';
import SidebarPost from './sidebarPost';
import SidebarTags from './sidebarTags';

const BlogDetailsMain = () => {
    const blogItem = useSelector(state => state.blogs.specificItem);
    return (
        <>
            <section className="page-title-area breadcrumb-spacing" style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-bg.jpg)" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-9">
                            <div className="page-title-wrapper text-center">
                                <h3 className="page-title mb-25">{blogItem.title}</h3>
                                <div className="breadcrumb-menu">
                                    <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                        <ul className="trail-items">
                                            <li className="trail-item trail-begin"><Link to="/"><span>Home</span></Link></li>
                                            <li className="trail-item trail-end"><span>{blogItem.title}</span></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-details-area pt-120 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <div className="kblog">
                                <div className="kblog-img">
                                    <img src={blogItem.image} className="img-fluid" alt="blog-img" />
                                    <span>{blogItem.date}</span>
                                </div>
                                <div className="kblog-text kblog-text2 kblog-text22">
                                    <div className="kblog-meta">
                                        <Link to="/blog-details"><i className="fal fa-user-circle"></i> {blogItem.user}</Link>
                                        <Link to="/blog-details"><i className="fal fa-comments"></i> {blogItem.comments}</Link>
                                    </div>
                                    <p className="mb-35">Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. </p>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type simen book. It has survived not only five centuries, but also the leap into electronic typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting industry. orem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into unchanged.</p>
                                </div>
                            </div>
                            <BlogInfo />
                            <BlogAuthor />
                            <CommentSection />
                            <CommentForm />
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-md-40 mt-xs-40">
                            <div className="sidebar-wrap">
                                <SearchBar />
                                <SidebarPost />
                                <BlogCategories />
                                <SidebarTags />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetailsMain;