import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Item from '../Item/Item';

const Service = () => {
    const [subjacts, setSubjacts] = useState([])
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setSubjacts(data))
    }, [])
    return (
        <div className="container">
            <h1 className="text-success m-4"> Our Available Courses</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    subjacts.map(subjact => <Item item={subjact}></Item>)
                }
            </Row>
        </div>
    );
};

export default Service;
