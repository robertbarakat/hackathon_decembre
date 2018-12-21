import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './Concept.scss';

class Concept extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Container>
        <Row className="Concept">
          <Col classname="imgconc" xs="6">
            <img src="http://www.jobingenieur.com/Jobingenieur/environnement/images/iStock_000059159292_Full.jpg" alt="envi" height="600px"/> 
          </Col>
          <Col xs="6">
            <h2>Le Concept</h2>
            <br />
            <p>
            Saviez-vous que ?

L’empreinte carbone de l’IT professionnel représente 2,5% des émissions mondiales de Gaz à Effet de Serre (GES), 40% pour les seuls postes de travail et plus de 20% pour les Datacenters soit les émissions de GES de l’aéronautique civile mondiale !
Les émissions de GES générées pendant la fabrication et le recyclage d’un ordinateur équivalent à une utilisation de ce même ordinateur pendant 48 ans.
Sur l’ensemble du cycle de vie d’un smartphone, l’impact environnemental est réalisé à 60% par la fabrication. La phase d’usage constitue 30% du total.
Une puce électronique de 1 gramme nécessite 16 kilogrammes de matières premières pour sa fabrication, et il peut y en avoir plusieurs par ordinateur.
Une carte mémoire de 6 pouces utilise 8 600 litres d’eau dans sa fabrication.
720 millions de téléphones portables sont jetés chaque année dans le monde. Cela représente plus de 60% des 1,2 milliard d’unités vendues annuellement.
De nombreuses anecdotes similaires à celles-ci attestent clairement la nécessité d’agir et d’intégrer dans les stratégies d’achat la notion de « Green IT ».
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Concept;