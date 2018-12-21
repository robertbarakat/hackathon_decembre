import React, { Component } from 'react';
import Database from '../Database';
import '../Catalogue/List.scss';

class ChooseProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Database
    }
  }

  
  render() {
    console.log(this.state.data);
    return (
      <div>Fiche évaluation écosystème</div>
    );
  }
}

export default ChooseProducts;