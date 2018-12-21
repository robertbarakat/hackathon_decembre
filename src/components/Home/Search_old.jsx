import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Search.scss';
import { Row, Col, Input, Button, Form } from 'reactstrap';

const imgSrc = 'media/ecotheque.jpg';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: [],
      personcapacity: 0,
    };
    this.onChange = this.onChange.bind(this);
  }


  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  pageResult() {
    const { history } = this.props;;
    history.push(`/result?`);
  }

  render() {
    const { search } = this.state;
    return (
      <Row className="search">
        <Col>
          <Form onSubmit={() => this.pageResult()}>
            <div
              className="background"
              style={{ backgroundImage: `url(${imgSrc})` }}
            >
              <h1>
                Sois Eco-Friendly, même avec ta technologie
              </h1>

              <Input
                className="search1"
                placeholder="Recherche"
                style={{ width: '25vw' }}
                value={search}
                onChange={this.onChange}
                name="search"
              />
              <Button tag={Link} to="./resultat-list" className="search-button btn-submit">Rechercher</Button>
            </div>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Search;