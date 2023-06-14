import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import BurgerMenus from './burgerMenus';
import HeaderSearch from './headerSearch';
import HeaderTop from './headerTop';

const HeaderTwo = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    // Sticky Menu Area start
    useEffect(() => {
        window.addEventListener('scroll', sticky);
        return () => {
            window.removeEventListener('scroll', sticky);
        };
    });

    const sticky = (e) => {
        const header = document.querySelector('.transparent-header');
        const scrollTop = window.scrollY;
        scrollTop >= 1 ? header.classList.add('sticky-header') : header.classList.remove('sticky-header');
    };
    // Sticky Menu Area End

    return (
        <>
            <header>
                <HeaderTop />
                <div className="header-area transparent-header sticky-header2 white-bg">
                    <div className="container-fluid">
                        <div className="header-space">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-8">
                                    <div className="header-logo">
                                        <Link to="/"><img src="/assets/img/logo/logo.svg" className="img-fluid" alt="logo-img" /></Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-4">
                                    <div className="main-menu main-menu-2 d-xl-block d-none">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="menu-item-has-children"><Link to="/">Home</Link>
                                                </li>
                                                <li><Link to="/about">About</Link></li>
                                                <li className="menu-item-has-children"><Link to="/services">Services</Link> </li>
                                                <li className="menu-item-has-children"><Link to="/projects">Projects</Link></li>
                                                <li className="menu-item-has-children"><Link to="/blogs">Blog</Link> </li>
                                                <li><Link to="/contact">Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="side-menu-icon d-xl-none text-end">
                                        <span className="search-btn nav-search search-trigger" onClick={() => { setSearchOpen(!searchOpen) }} role='presentation'><i className="fas fa-search"></i></span>
                                        <button className="side-toggle side-toggle2" onClick={() => { setMenuOpen(!menuOpen) }} role='presentation'><i className="far fa-bars"></i></button>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-none d-xl-block">
                                    <div className="header-right text-end">
                                        <div className="header-social header-social-2">
                                            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                        </div>
                                        <div className="header-search header-search-2">
                                            <span className="search-btn nav-search search-trigger" onClick={() => { setSearchOpen(!searchOpen) }} role='presentation'>
                                                <i className="fas fa-search"></i>
                                            </span>
                                        </div>
                                        <div className="header-btn">
                                            <Link to="/contact" className="theme-btn theme-btn-small border-btn">Free Estimate</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div onClick={() => setMenuOpen(false)} role='presentation' className={menuOpen ? "body-overlay show" : "body-overlay"}></div>

            <HeaderSearch searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
            <div onClick={() => setSearchOpen(false)} role='presentation' className={searchOpen ? "body-overlay show" : "body-overlay"}></div>
        </>
    );
};

export default HeaderTwo;