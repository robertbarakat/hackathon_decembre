import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Row, 
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import './EcoSystemEvaluation.scss';

const evalu = 'media/eval.png';
const search = 'media/search.png';

class EcoSystemEvaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Row className="EcoSystemEvaluation">
        <Col xs="12" md="6">
          <Card mb-1 className="card-element" tag={Link} to="./evaluation-produits">
            <CardImg className="card-image"
              src={evalu}
              alt="Card image"
            />
            <CardBody className="card-truc">
              <CardTitle>Evaluez votre matériel numérique</CardTitle>
              <CardSubtitle>Découvrez l'impact environnemental de votre écosystème</CardSubtitle>
              <Link to="/evaluation-produits"><button className="button-submit">J'évalue mon matériel</button></Link>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6">
          <Card className="card-element" tag={Link} to="./formulaire-besoins">
            <CardImg className="card-image"
              src={search}
              alt="Card image cap"
            />
            <CardBody className="card-truc">
              <CardTitle>Choisissez un outil informatique écologique</CardTitle>
              <CardSubtitle>Trouvez le bon équilibre entre technologie et ecologie</CardSubtitle>
              <Link to="/formulaire-besoins"><button className="button-submit">J'ai un besoin matériel</button></Link>
            </CardBody>
          </Card>
        </Col>
      </Row> 
    );
  }
}
 
export default EcoSystemEvaluation;