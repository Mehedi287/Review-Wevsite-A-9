import React from 'react';


const Footer = () => {
    return (
        <div className="bg-dark h-25 p-5">
            <div className="">
                <a href=""><i class="fab fa-youtube text-white m-3"></i></a>
                <a href=""><i class="fab fa-facebook-square text-white m-3 "></i></a>
                <a href=""><i class="fab fa-twitter-square text-white m-3 "></i></a>
                <a href=""><i class="fab fa-whatsapp-square text-white m-3"></i></a>
            </div>
            <small className="text-white">Copyright © 2021 Akira Store. All Rights Reserved.</small>
        </div>
    );
};

export default Footer;