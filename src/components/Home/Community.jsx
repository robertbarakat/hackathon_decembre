import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './Community.scss';
class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Container className='Community'>
        <Row>
          <Col>
            <h2>La communauté Ecothèque</h2>
            <p>
            Echotech est convaincu depuis 2018 que les entreprises doivent contribuer positivement à la mutation du monde en se transformant.
Le Groupe favorise l’accélération de la transition et la réduction de la facture environnementale et sociétale afin de relever les grands défis des entreprises en les accompagnant de la stratégie à l’action vers un avenir plus performant, un « Good Future ».
Pour continuer à se développer en France et à l’international et construire les modèles de demain, Echotech a choisi en 2017 de rejoindre Total. Intégrant désormais pleinement la question climatique à ses choix stratégiques, Total investit dans les métiers bas carbone et a créé un secteur d’activités Gas, Renewables & Power pour porter cette ambition. Echotech est rattaché à cette nouvelle branche, au sein de l’entité « innovation et efficacité énergétique ». 
Ce rapprochement doit permettre à Echotech d’accélérer sa mission initiale : relier le plus largement possible l’économie à l’écologie, en faisant de la transition environnementale et sociétale une opportunité, un atout, et un avantage concurrentiel pour les entreprises.
Echotech compte 400 collaborateurs déployés dans 15 bureaux en Europe, pour un chiffre d’affaires en 2017 de plus de 406 millions d’euros. L’entreprise accompagne depuis maintenant 9 ans plus de 700 clients.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Community;