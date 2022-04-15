import Container from '@material-ui/core/Container';
import React from "react";
import Nav from './Nav';

function PageWrapper(props) {
    return (
        <Container maxWidth="xl">
            <Nav/>
            {props.children}
        </Container>
    )
}

export default PageWrapper