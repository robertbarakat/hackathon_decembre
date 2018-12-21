import React, { Component } from 'react';
import Database from '../Database';
import {
  Container, Row, Col, Card, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';
import './Sheet.scss';

class Sheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Database,
      databis: Database,
    }
  }

  /* componentDidMount() {
    window.scrollTo(0,0);
    fetch(`http://10.99.139.200:8000/api/products/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => this.setState({ data }));
    fetch('http://10.99.139.200:8000/api/products/')
      .then(res => res.json())
      .then(databis => this.setState({ databis: databis["hydra:member"] }));
  } */
  
  componentDidMount(){
    window.scrollTo(0,0);
    const num = this.props.match.params.id - 270;
    this.setState({data: Database[num]})
  }


  render() {
    const amovible = (this.state.data.batteryMovable) ? "Oui" : "Non";
    const comparaison = this.state.databis.filter(item => (item.category === this.state.data.category && item.energyClass === "A"));
    console.log(this.state.data);
    const { data } = this.state;
    return (
      <Container className="Sheet">
      <h2 className="text-center">Fiche détaillée</h2>
        <Row className="prod align-items-center mt-3">
          <Col className="imgprod" lg="6" md="6" sm="12">
            <img src={data.image} className="img-fluid" alt="" />
          </Col>
          <Col lg="6" md="6" sm="12">
            <p>{data.description}</p>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="12">
            <ul>
              <li>Catégorie: {data.category}</li>
              <li>Marque: {data.brand}</li>
              <li>Modèle: {data.model}</li>
              <li>Taille écran: {data.size}</li>
              <li>Prix: {data.price} €</li>
            </ul>
          </Col>
          <Col lg="6" md="6" sm="12">
            <ul>
              <li>Classe énergétique: {data.energyClass}</li>
              <li>Gaz effet de serre: {data.ges}</li>
              <li>Batterie amovible: {amovible}</li>
              <li>Taux de recyclage de la batterie: {data.batteryRecyclability}</li>
              <li>Autonomie: {data.autonomy}</li>
              <li>Note écologique: {data.ecologyNotice}</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="alternative">Produits Alternatifs</h3>
          </Col>
        </Row>
        <Row>
          {comparaison.map(element => (
            <Col sm="12" md="6" xl="4" key={element.id}>
            <Card className="card-element mb-4 mt-2">
              <CardImg className="card-image"
                top
                src={element.image}
                alt="Card image cap"
              />
              <CardBody className="card-text">
                <CardTitle>{element.model}</CardTitle>
                <Row>
                  <Col lg="7" sm="6">
                    <CardSubtitle>{element.category}</CardSubtitle>
                    <CardText>For {element.need}</CardText>
                  </Col>
                  <Col lg="5" sm="6">
                    <CardText>
                      Classe {element.energyClass}
                    </CardText>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Sheet;