import React, { Component } from 'react';
import Database from '../Database';
import {
  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col, Row, Container, Button
} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../Catalogue/List.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Database,
      databis: Database,
    }
  }

  filterProduct(product) {
    const byProduct = this.state.databis.filter(item => item.category === product);
    this.setState({ data: byProduct });
  }

  filterEnergy(energy) {
    const byEnergy = this.state.databis.filter(item => item.energyClass === energy);
    this.setState({ data: byEnergy });
  }

  filterBrand(brand) {
    const byBrand = this.state.databis.filter(item => item.brand === brand);
    this.setState({ data: byBrand });
  }

  filterNeed(need) {
    const byNeed = this.state.databis.filter(item => item.need === need);
    this.setState({ data: byNeed });
  }

  resetFilters() {
    this.setState({ data: Database });
  }

  render() {
    console.log(this.state.data);
    console.log(this.state.databis);
    return (
      <Container fluid className="mb-3">
        <Row className="mt-3 mb-2 text-center">
          <Col>
            <h3>Liste de dispositifs</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>Filtrer par catégorie</h6>
            <ul>
              <li className="curseur" onClick={() => this.filterProduct("Computer")}>
                PC
            </li>
              <li className="curseur" onClick={() => this.filterProduct("Tv")}>
                TV
            </li>
              <li className="curseur" onClick={() => this.filterProduct("Phone")}>
                Smartphone
            </li>
              <li className="curseur" onClick={() => this.filterProduct("Tablet")}>
                Tablette
            </li>
            </ul>
          </Col>
          <Col>
            <h6>Filtrer par classe énergétique</h6>
            <ul>
              <li className="curseur" onClick={() => this.filterEnergy("A")}>
                A
            </li>
              <li className="curseur" onClick={() => this.filterEnergy("B")}>
                B
            </li>
              <li className="curseur" onClick={() => this.filterEnergy("C")}>
                C
            </li>
              <li className="curseur" onClick={() => this.filterEnergy("D")}>
                D
            </li>
              <li className="curseur" onClick={() => this.filterEnergy("E")}>
                E
            </li>
              <li className="curseur" onClick={() => this.filterEnergy("F")}>
                F
            </li>
            </ul>
          </Col>
          <Col>
            <h6>Filtrer par type de besoin</h6>
            <ul>
              <li className="curseur" onClick={() => this.filterNeed("Design")}>
              Design
            </li>
              <li className="curseur" onClick={() => this.filterNeed("Gaming")}>
              Gaming
            </li>
              <li className="curseur" onClick={() => this.filterNeed("Office")}>
              Office
            </li>
              <li className="curseur" onClick={() => this.filterNeed("Video")}>
              Video
            </li>
            </ul>
          </Col>
          <Col>
            <h6>Filtrer par Marque</h6>
            <ul>
            <li className="curseur" onClick={() => this.filterBrand("Acer")}>
                Acer
            </li>
              <li className="curseur" onClick={() => this.filterBrand("Apple")}>
                Apple
            </li>
              <li className="curseur" onClick={() => this.filterBrand("Asus")}>
                Asus
            </li>
              <li className="curseur" onClick={() => this.filterBrand("Dell")}>
                Dell
            </li>
              <li className="curseur" onClick={() => this.filterBrand("HP")}>
                HP
            </li>
              <li className="curseur" onClick={() => this.filterBrand("Lenovo")}>
                Lenovo
            </li>
              <li className="curseur" onClick={() => this.filterBrand("Samsung")}>
                Samsung
            </li>
            </ul>
          </Col>
        </Row>
        <Row className="mb-2 text-center">
          <Col>
            <Button color="info" size="sm" onClick={() => this.resetFilters()}>
              Initialiser les filtres
            </Button>
          </Col>
        </Row>
        <Row>
          {this.state.data.map(element => {
            let cssSapin = "";
            if (element.energyClass === "F" || element.energyClass === "E") {
              cssSapin = "text-danger";
            }
            if (element.energyClass === "D" || element.energyClass === "C") {
              cssSapin = "text-warning";
            }
            if (element.energyClass === "B" || element.energyClass === "A") {
              cssSapin = "text-success";
            }
            return (
              <Col sm="12" md="6" xl="4" key={element.id}>
                <Card className="card-element mb-2 mt-2">
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
                          <br />
                          <span className={`${cssSapin} btn-lg`}>
                            <i className="fas fa-tree"></i></span>
                        </CardText>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <Link to={`/fiche-produits/${element.id}`}>
                        <Button color="info" size="sm">Fiche produit</Button> 
                      </Link>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    );
  }
}

export default List;