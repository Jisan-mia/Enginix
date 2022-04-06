import React from 'react';
import './Portfolio.css';
import { portfolios } from '../../data'

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h1>Portfolio</h1>
            <p>
            Take a look at some of our successful projects-
            </p>

            <div className="portfolio__list">
                {
                    portfolios.map((item, index) => (
                        <div className="portfolio__item" key={index}>
                            <img src={item.cover} alt="" />
                            <div className="portfolio__item__body">
                                <h1>{item.title}</h1>
                                <p>
                                    {item.detail}
                                </p>
                                <img src={item.logo} alt="" className={item.resize ? 'resize logo' : 'logo'} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Portfolio;