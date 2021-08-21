import React from 'react';
import { Container } from 'react-bootstrap';
import Title_comp from './title_comp';

export default function home_1_myself() {
    return (
        <section className="my_self" id="next">
            <Container>
                <Title_comp bool="false"/>
            </Container>
        </section>
    )
}
