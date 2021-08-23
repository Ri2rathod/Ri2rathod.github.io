import React from 'react';
import { Container } from 'react-bootstrap';
import TitleComp from './title_comp';
import Heading from './heading';
import Desc from './desc';
import Social from './social';

export default function home_1_myself() {
    return (
        <section className="my_self" id="next">
            <Container>
                <TitleComp bool="false" heading="About My Self"/>
                <Heading text="Hi, Nice To meet You." />
                <Desc/>
                <Social />

            </Container>
        </section>
    )
}
