import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';
import './Footer.scss';

const Footer = () => (
  <Container className="Footer" fluid>
    <Row className="compoFoot">
      <Col xs={{ size: 3, offset: 4 }}>
        <li>
          <Link to=""><i class="fab fa-facebook-square fa-3x social fb"></i></Link>
        </li>
      </Col>
      <Col xs="3">
        <li>
          <Link to=""><i class="fab fa-instagram fa-3x social insta"></i></Link>
        </li>
      </Col>
    </Row>
  </Container>
);

export default Footer;
