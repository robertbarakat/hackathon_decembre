import React, { Component } from 'react';
import Search from './Search';
import EcosystemEvaluation from './EcosystemEvaluation';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() { 
    return ( 
      <div className="home-style">
        <Search />
        <EcosystemEvaluation />
      </div>
    );
  }
}

export default Home;