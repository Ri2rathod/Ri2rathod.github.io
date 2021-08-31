import React from 'react';
import Logo_white from './../assets/images/svg/logo-white.svg'

function footer() {
    return (
        <footer>
            <div className="container">
                <img src={Logo_white} alt="" />
                <h3>Living, learning, & leveling up one day at a time</h3>
            </div>
        </footer>
    )
}

export default footer
