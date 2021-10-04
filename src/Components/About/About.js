import React from 'react';

const About = () => {
    return (
        <div className="container">
            <h2 className="text-success fw-bold mt-3">Our Tutor</h2>
            <div className="row g-4 m-5">
                <div className="col-md-3 bg-gray ">
                    <img className="rounded" src="https://randomuser.me/api/portraits/men/75.jpg" alt="" />
                    <h4>JK Mahin </h4>
                </div>
                <div className="col-md-3">
                    <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="" />
                    <h4>Soyed Ahamed </h4>
                </div>
                <div className="col-md-3">
                    <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="" />
                    <h4>Naimur Rahaman</h4>
                </div>
                <div className="col-md-3">
                    <img src="https://randomuser.me/api/portraits/men/73.jpg" alt="" />
                    <h4>Mehedi Hasan </h4>
                </div>

            </div>
            <hr />
            <div className="">
                <h2>About Our Courses</h2>
                <p>CORe consists of three courses—Business Analytics, Economics for Managers, and Financial Accounting —and a final exam. Immerse yourself in real challenges faced by seasoned leaders across a variety of industries, develop business intuition through interactive learning exercises, and join a global community of peers. As in the business world, you’ll be evaluated on the quality and timeliness of your work and your contributions to the learning community.</p>
                <p>Complete online coursework on your own schedule while meeting weekly deadlines
                    Complete your final exam at a time convenient for you within a defined time period after the program concludes. The CORe final exam is a three-hour, multiple-choice, closed book assessment created by HBS faculty and delivered via the HBS Online course platform. Due to changing circumstances surrounding the COVID-19 pandemic, the exam may be delivered in-person or online-proctored in the future. More details about exam delivery will be shared at the beginning of each cohort.
                    CORe offers the flexibility of different lengths of study that run throughout the year. Course content and program requirements are identical regardless of the program length. Choose the option that works best for you:</p>
            </div>
        </div>
    );
};

export default About;