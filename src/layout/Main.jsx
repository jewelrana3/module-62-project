import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RifgtNav from '../pages/Shared/Rifgtnav/RifgtNav';
import { Outlet } from 'react-router-dom';
import NavigationBer from '../pages/Shared/NavigationBer/NavigationBer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBer></NavigationBer>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RifgtNav></RifgtNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;