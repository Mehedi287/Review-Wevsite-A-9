import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Item = (props) => {
    console.log(props);
    const { name, img, decription, price } = props.item
    return (
        <div className="d-flex">

            <Col className="rounded ">
                <Card >
                    <Card.Img className="img-fluid" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {decription}
                            <p>Price : {price}</p>
                            <button className="btn-primary rounded-pill p-1 ">Enroll Now</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Item;