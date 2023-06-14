import React from 'react';
import ProjectSlider from '../elements/sliders/projectSlider';

const ProjectSection = () => {
    return (
        <section className="project-area bg-grey pt-115 pb-400 fix" >
            <div className="common-shape-wrapper wow slideInRight animated">
                <div className="common-shape-inner"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="section-title-wrapper mb-45">
                            <h5 className="section-subtitle mb-20">Our recent work</h5>
                            <h2 className="section-title">Work showcase</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="lol text-md-end">
                            <div className="project-button-prev slide-prev"><i className="far fa-long-arrow-left"></i></div>
                            <div className="project-button-next slide-next"><i className="far fa-long-arrow-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectSlider />
        </section>
    );
};

export default ProjectSection;