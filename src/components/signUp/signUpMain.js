import { Link } from 'gatsby';
import React from 'react';

const SignUpMain = () => {
    return (
        <div className="signup-page-area pt-120 pb-120">
            <div className="signup-page-area-wrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-10">
                            <form action="#">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="signup-box text-center">
                                            <div className="signup-text">
                                                <h3>Sign up</h3>
                                            </div>
                                            <div className="signup-message">
                                                <img src="/assets/img/bg/sign-up-message.png" alt="img not found" />
                                            </div>
                                            <div className="signup-thumb">
                                                <img src="/assets/img/bg/sign-up.png" alt="img not found" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="signup-form-wrapper">
                                            <div className="signup-input-wrapper">
                                                <input type="text" placeholder="First Name" />
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                            <div className="signup-wrapper">
                                                <input type="text" placeholder="Email" />
                                            </div>
                                            <div className="signup-wrapper">
                                                <input type="text" placeholder="Username" />
                                            </div>
                                            <div className="signup-wrapper">
                                                <input type="text" placeholder="Password" />
                                            </div>
                                            <div className="signup-action">
                                                <div className="course-sidebar-list">
                                                    <input className="signup-checkbo" type="checkbox" id="sing-up" />
                                                    <label className="sign-check" htmlFor="sing-up"><span>Accept the terms and <a href="#">Privacy Policy</a></span></label>
                                                </div>
                                            </div>
                                            <div className="sing-buttom mb-20">
                                                <button type='submit' className="theme-btn theme-btn-small border-btn">Register now</button>
                                            </div>
                                            <div className="acount-login text-center">
                                                <span>Already have an account? <Link to="/signin">Log in</Link></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpMain;