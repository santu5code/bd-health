import React from "react";

import Header from "../../components/layout/Header";
import HomeDoctor from "../../assets/home/homedoctor.png";
import { Col, Container, Row } from "react-bootstrap";
import Box from "../../components/Box";
import VectorBox from "../../components/VectorBox";
import GraphData from "../../assets/home/Graphdata.png";
import PercentData from "../../assets/home/percentdata.png";


const Firstpage = () => {
  return (
    <>
      <div className="initial">
        <Container className="container-fluid">
          <Header />
          <Row className="my-row">
            <Col md={6} sm={12} className='left-col'><div className="banner-text text-left">
                  <h1 className="fat-text"> <strong>We always provide </strong> <br />best services</h1>
                  <p className="mt-3 para-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus neque expedita
                       explicabo magnam minima ducimus et quia minus reiciendis rerum!</p>
                    <button className='front-btn'>Make an appointement</button>
              </div>
              <div className="graphs">
              <div className="d-flex"><Box /> <VectorBox /></div>
              <div className="d-flex"><div className="graph-box"> <img className="img-fluid" src={GraphData} alt="graph data" /></div>
              <div className="percent-box"> <img className="img-fluid" src={PercentData} alt="percent data" /></div></div>
              </div></Col>
              
            <Col md={6} sm={10} className="right-col">
              <div className="doc-image d-flex justify-content-end">
                <img className="img-fluid " src={HomeDoctor} alt="home doctor" />
              </div>
              
              </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Firstpage;
