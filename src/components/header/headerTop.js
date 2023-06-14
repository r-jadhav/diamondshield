import React from 'react';

const HeaderTop = () => {
    return (
        <div className="header-top bg-heading d-none d-md-block">
            <div className="container-fluid">
                <div className="header-top-space">
                    <div className="row">
                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="welcome-text">
                                <span>Welcome to the Diamond Shield</span>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="header-top-info">
                                <ul>
                                    <li><img src="/assets/img/icon/sidebar-icon-1.png" className="img-fluid" alt="icon_img" />86 broklyn street road, New York</li>
                                    <li><img src="/assets/img/icon/footer-icon-1.png" className="img-fluid" alt="icon-img" /><a href="mailto:diamondshield@company.com">diamondshield@company.com</a></li>
                                    <li><img src="/assets/img/icon/footer-icon-2.png" className="img-fluid" alt="icon-img" /><a href="tel:9988998899">9988998899</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;