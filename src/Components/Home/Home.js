import React from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from "react";
import Item from "../Item/Item"

const Home = () => {
    const [subjacts, setSubjacts] = useState([])
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setSubjacts(data))
    }, [])
    return (
        <div className='container '>
            <div className="row p-3">
                <div className="col-md-6">
                    <h3 className="text-primary">Learn online from the leaders in business education</h3>
                    <p className="mt-2">Expand your business skills and engage with a global network of learners through our flexible, online courses. Wherever you are in your career—or the world—Harvard Business School Online can help you achieve your goals The online Credential of Readiness (CORe) program will prepare you to contribute to business discussions and decision-making, whether you're looking to advance your career, considering graduate school, or exploring new career paths</p>
                </div>
                <div className="col-md-5">
                    <img src="https://codefinity.com/landing/beginners.png" className="img-fluid" alt="" />
                </div>
            </div>
            <hr />
            <div className=" row mb-5 mt-5">

                <div className="col-md-9">
                    <Row xs={1} md={2} className="g-5">
                        {
                            subjacts.slice(0, 4).map(subjact => <Item item={subjact}></Item>)
                        }
                    </Row>
                </div>
                <div className="col-md-3">

                </div>
            </div>

        </div>
    );
};

export default Home;