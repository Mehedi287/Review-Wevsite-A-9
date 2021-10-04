import React from 'react';

const Contact = () => {
    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-6">
                    <h2>Contuct With Us </h2>
                    <input className="m-3" type="text" name="" id="" placeholder="Fast Name : " />
                    <input className="m-3" type="text" name="" id="" placeholder="Last Name : " />
                    <br />
                    <input className="m-3" type="email" name="" id="" placeholder="Email : " />
                    <input className="m-3" type="text" name="" id="" placeholder="Enter Subjact : " />
                    <br />
                    <textarea w-25 name="" id="" cols="30" rows="10" placeholder="Your Massage"></textarea>
                    <br />
                    <button className="btn-primary m-3 p-2 rounded">Submit</button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid h-75 w-75" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3QaJHye2snB7UBYG25H3jOMwZR9-Tn1ZkQ&usqp=CAU" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;