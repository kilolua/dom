import React from "react";
import Header from "../Header/Header";
import {Container, Col, Row} from "react-bootstrap";
import LeftMenu from "../left_menu/LeftMenu";
import Cards from "../Cards/Cards";

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Container>
                    <Row >
                        <Col sm={2}><LeftMenu/></Col>
                        <Col sm={10}><Cards/></Col>
                    </Row>
                </Container>
            </div>


            // Main Component
        )
    }
}

export default Main;