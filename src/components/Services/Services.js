import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section className="services">
            <div className="services__container">
                <h1>Services</h1>
                <p>
                    Enginix specializes designing and development of highly engaging
                    <br />
                    and effective websites and apps for your digital entity. We let you
                    <br />
                    emerge from an idea to an actual product.
                </p>

                <div className="services__list">
                    <div className="service__item">
                        <img src="/assets/services/1.png" alt="" />
                        <h1>
                            Product
                            <br />
                            Design (UI/UX)
                        </h1>
                        <p>
                            We design your products through
                            <br />
                            effective user research and come up
                            <br />
                            with great user experience.
                        </p>
                        <button>Start a Project</button>
                    </div>

                    <div className="service__item">
                        <img src="/assets/services/2.png" alt="" />
                        <h1>
                            Web Application
                            <br />
                            Development
                        </h1>
                        <p>
                            Get customized & high-performing    
                            <br />
                            industry-specific web applications
                            <br />
                            cost-effectively.

                             

                        </p>
                        <button>Start a Project</button>
                    </div>

                    <div className="service__item">
                        <img src="/assets/services/3.png" alt="" />
                        <h1>
                            Mobile App
                            <br />
                            Development
                        </h1>
                        <p>
                            Reach customers via Android, iOS, or 
                            <br />
                            cross-platform solutions and satisfy
                            <br />
                            your mobile users.
                        </p>

                         

                        <button>Start a Project</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;