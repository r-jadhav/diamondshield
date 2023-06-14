import { Link } from 'gatsby';
import React from 'react';

const SignInMain = () => {
    return (
        <div className="signin-page-area pt-120 pb-120">
            <div className="signin-page-area-wrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-10">
                            <form action="#">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="signup-box text-center">
                                            <div className="signup-text">
                                                <h3>Sign in</h3>
                                            </div>
                                            <div className="signup-thumb">
                                                <img src="/assets/img/bg/sign-up.png" alt="img not found" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="signup-form-wrapper">
                                            <div className="signup-wrapper">
                                                <input type="text" placeholder="Email or Username" />
                                            </div>
                                            <div className="signup-wrapper">
                                                <input type="text" placeholder="Password" />
                                            </div>
                                            <div className="signup-action">
                                                <div className="course-sidebar-list">
                                                    <input className="signup-checkbo" type="checkbox" id="sing-in" />
                                                    <label className="sign-check" htmlFor="sing-in"><span>Remember me</span></label>
                                                </div>
                                            </div>
                                            <div className="sing-buttom mb-20">
                                                <button type="submit" className="theme-btn theme-btn-small border-btn">Signin Now</button>
                                            </div>
                                            <div className="registered wrapper">
                                                <div className="not-register">
                                                    <span>Not registered?</span><span><Link to="/signup">Signup</Link></span>
                                                </div>
                                                <div className="forget-password">
                                                    <Link to="/forgot-password">Forgot password?</Link>
                                                </div>
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

export default SignInMain;