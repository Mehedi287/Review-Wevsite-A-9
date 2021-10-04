import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div className="bg-success">
            <div className="d-flex  ">
                <img src="https://online.hbs.edu/PublishingImages/icons/hbs_online_logo.svg" className="w-25 p-4 h-25  " alt="" />
                <h1 className="text-center ms-5 mt-5 text-white align-item-center">HARVARD ONLINE SCHOOL</h1>
            </div>
            <div className="mt-2">

            </div>
            <div className="">
                <Nav variant="tabs" className="bg-dark text-center">
                    <Nav.Item className="p-2">

                        <NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} className=" p-3 text-decoration-none fw-bold fs-5" to="/home">Home
                        </NavLink>

                    </Nav.Item>
                    <Nav.Item className="p-2">
                        <NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} className=" color  p-3 text-decoration-none fw-bold fs-5" to="/about">About Us 2</NavLink>
                    </Nav.Item>
                    <Nav.Item className="p-2">
                        <NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} className="  p-3 text-decoration-none fw-bold fs-5" to="/service"> Our services</NavLink>
                    </Nav.Item>
                    <Nav.Item className="p-2">
                        <NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} className="  p-3 text-decoration-none fw-bold fs-5" to="/tutors"> Our Tutors</NavLink>
                    </Nav.Item>
                </Nav></div>

        </div>
    );
};

export default Header;