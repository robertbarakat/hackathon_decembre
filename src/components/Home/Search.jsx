import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Search.scss';
import { Row, Col, Button, Form } from 'reactstrap';

const imgSrc = 'media/ecotheque.jpg';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clef: "",
    };
  }

  render() {
    return (
      <Row className="search">
        <Col>
          <Form>
            <div className="background"
              style={{ backgroundImage: `url(${imgSrc})` }}>
              <h1>
                Sois Eco-Friendly, même avec ta technologie
              </h1>
              
              <Link to="/resultat-list/">
                <Button color="info" size="lg" className="search-button btn-submit">Consulter le catalogue</Button> 
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Search;