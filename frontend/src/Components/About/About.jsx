

import React from 'react';


const About = () => {
    return (
        <>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead">

                            Online shopping took over a significant segment of the retail market during the first decade of the 21 st century. As number of personal computers increased and established, retailers began to offer their products over the Internet. Some of the various ways in which online marketing is done in India are company websites, shopping portals, online auction sites. Interestingly, India is expected to be the third largest Internet market in the world in the next five years.

                            A survey by Associated Chambers of Commerce and Industry of India (ASSO CHAM) revealed that shopping trends of Indian consumers have witnessed a significant change as online shopping show more than 55% rise in 201 3 as compared to previous year’s 85%.

                            The key drivers for the boost of online shopping sector are increasing broadband internet penetration/usage, rising standard of living with high disposable income, availability of much wider product range compared to what is available in the market, busy lifestyle leading to lack of time for offline shopping and relatively lower prices of the products. Generally, higher levels of education, metropolitan cities and personal income correspond to more favourable perceptions of shopping online. Delhi ranks first in e-shopping followed by Mumbai and Ahmedabad.
                        </p>
                      
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/aboutus.png" alt="about us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
