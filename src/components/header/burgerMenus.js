import { Link } from 'gatsby';
import React, { useState } from 'react';

const BurgerMenus = ({ setMenuOpen, menuOpen }) => {
    const [home, setHome] = useState(false)
    const [courses, setcourses] = useState(false)
    const [blog, setBlog] = useState(false)
    const [pages, setPages] = useState(false)
    const [project, setProject] = useState(false)

    const openMobileMenu = menu => {

        if (menu === 'home') {
            setHome(!home)
            setcourses(false)
            setBlog(false)
            setPages(false)
            setProject(false)
        }
        else if (menu === 'courses') {
            setHome(false)
            setcourses(!courses)
            setBlog(false)
            setPages(false)
            setProject(false)
        }
        else if (menu === 'blog') {
            setHome(false)
            setcourses(false)
            setBlog(!blog)
            setPages(false)
            setProject(false)
        }
        else if (menu === 'pages') {
            setHome(false)
            setcourses(false)
            setBlog(false)
            setProject(false)
            setPages(!pages)
        }
        else if (menu === 'project') {
            setHome(false)
            setcourses(false)
            setBlog(false)
            setPages(false)
            setProject(!project)
        }
    };

    return (
        <div className="fix">
            <div className={menuOpen ? "side-info info-open" : "side-info"}>
                <button className="side-info-close" onClick={() => setMenuOpen(false)}><i className='far fa-times'></i></button>
                <div className="side-info-content">
                    <div className="mm-menu">
                        <ul>
                            <li className={home ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('home'); }}>Home</a>
                                <ul className={home ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/">Home Style 1</Link></li>
                                    <li><Link to="/homeTwo">Home Style 2</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/about">About</Link></li>
                            <li className={courses ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('courses'); }}>Services</a>
                                <ul className={courses ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/service-details">Services Details</Link></li>
                                </ul>
                            </li>
                            <li className={project ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('project'); }}>Projects</a>
                                <ul className={project ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/projects">Projects</Link></li>
                                    <li><Link to="/project-details">Projects Details</Link></li>
                                </ul>
                            </li>
                            <li className={blog ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('blog'); }}>Blog</a>
                                <ul className={blog ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/blogs">Blog</Link></li>
                                    <li><Link to="/blog-details">Blog Details</Link></li>
                                </ul>
                            </li>
                            <li className={pages ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('pages'); }}>Pages</a>
                                <ul className={pages ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/pricing">Pricing</Link></li>
                                    <li><Link to="/faqs">Faq</Link></li>
                                    <li><Link to="/team">Team</Link></li>
                                    <li><Link to="/team-details">Team Details</Link></li>
                                    <li><Link to="/signin">SignIn</Link></li>
                                    <li><Link to="/forgot-password">Forgot Password</Link></li>
                                    <li><Link to="/signup">SignUp</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="contact-infos mb-30">
                        <div className="contact-list mb-30">
                            <h4>Contact Info</h4>
                            <ul>
                                <li><img src="/assets/img/icon/sidebar-icon-1.png" className="img-fluid" alt="icon-img" />86 broklyn street road, New York</li>
                                <li><img src="/assets/img/icon/footer-icon-1.png" className="img-fluid" alt="icon-img" /><a href="mailto:info@sycho24.com">needhelp@company.com</a></li>
                                <li><img src="/assets/img/icon/footer-icon-2.png" className="img-fluid" alt="icon-img" /><a href="tel:926668880000">92 666 888 0000</a></li>
                            </ul>
                            <div className="sidebar__menu--social">
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenus;