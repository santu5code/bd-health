import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProfileBox from '../../components/ProfileBox';

import ServiceBox from '../../components/ServiceBox';

const SecondPage = () => {
    return (
        <>
            <div className="secondpage-wrapper">
                <Container className="container-fluid">
                    <Row className='mt-5'>
                        <Col md={4} sm={10}><ServiceBox /></Col>
                        <Col md={4} sm={10}><ServiceBox /></Col>
                        <Col md={4} sm={10}><ServiceBox /></Col>
                    </Row>
                    <Row className="profile-container mt-5">
                        <Col md={3} sm={10} className=" mt-3"><ProfileBox /><ProfileBox /></Col>
                        <Col md={3} sm={10} className="mt-5 mr-5"><ProfileBox /><ProfileBox /></Col>
                        <Col  md={6} sm={10} className="mt-3">
                            <div className="profile-text "><h2>Easy Steps And Get Your Solution</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error voluptas
                                 minus eligendi sed sunt perferendis autem deleniti aperiam atque iusto.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default SecondPage
