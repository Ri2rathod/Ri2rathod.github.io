import React from 'react';
import Home1Banner from './components/home_1_banner';
import Home1Myself from './components/home_1_myself';

import {Helmet} from 'react-helmet';


export default function main() {
    return (
        <>
        <Helmet>
            <title>
                Ri2 portfolio - Home
            </title>
        </Helmet>
        <main className="main">
            <Home1Banner />
            <Home1Myself />
        </main>
        </>
    )
}