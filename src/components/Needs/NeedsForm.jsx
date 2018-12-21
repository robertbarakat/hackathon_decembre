import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NeedsForm.scss';

class NeedsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "Computer",
      need: "Office",
      price: "500",
    };

    this.handleChangeCategory = this.handleChangeCategory.bind(this)
    this.handleChangeNeed = this.handleChangeNeed.bind(this)
    this.handleChangePrice = this.handleChangePrice.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    window.scrollTo(0,0);
  }

  handleChangeCategory(event) {
    this.setState({
      category: event.target.value,
    });
  }

  handleChangeNeed(event) {
    this.setState({
      need: event.target.value,
    });
  }

  handleChangePrice(event) {
    this.setState({
      price: event.target.value,
    });
  }

  // componentDidMount(){
  //   fetch('http://192.168.1.96:8000')
  //   .then(results => results.json())
  //   .then(data => this.setState({data : data}));
  // }


  handleSubmit(event) {
    event.preventDefault();
    fetch("http://192.168.1.96:8000/filterneed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(response => {
        if (response.error) { alert(response.error) }
      })
      .catch(event => {
        console.error(event);
        alert("ERREUR")
      })
  }

  render() {
    console.log(this.state);
    return (
      <div className="need-form">
        <h1 className="need-form-title">Détaillez votre besoin matériel</h1>

        <form className="form-container">
          <h3 className="title-form">J'ai besoin d'un... </h3>
          <label className="need-type">
            <input type="radio" value="Computer" checked={this.state.category === "Computer"} onChange={this.handleChangeCategory} />
            Ordinateur
          </label>
          <label className="need-type">
            <input type="radio" value="Phone" checked={this.state.category === "Phone"} onChange={this.handleChangeCategory} />
            Smartphone
            </label>
          <label className="need-type">
            <input type="radio" value="Tablet" checked={this.state.category === "Tablet"} onChange={this.handleChangeCategory} />
            Tablette
            </label>
          <label className="need-type">
            <input type="radio" value="Tv" checked={this.state.category === "Tv"} onChange={this.handleChangeCategory} />
            Télévision
            </label>
        </form>


        <form className="form-container">
          <h3 className="title-form">pour faire... </h3>
          <label className="todo-type">
            <input type="radio" value="Office" checked={this.state.need === "Office"} onChange={this.handleChangeNeed} />
            Bureautique
          </label>
          <label className="todo-type">
            <input type="radio" value="Design" checked={this.state.need === "Design"} onChange={this.handleChangeNeed} />
            Design
          </label>
          <label className="todo-type">
            <input type="radio" value="Gaming" checked={this.state.need === "Gaming"} onChange={this.handleChangeNeed} />
            Jeu vidéo
              </label >
          <label className="todo-type">
            <input type="radio" value="Video" checked={this.state.need === "Video"} onChange={this.handleChangeNeed} />
            Vidéo
          </label>
        </form>


        <form className="form-container">
          <h3 className="title-form">au prix de... </h3>
          <select className="select-option" onChange={this.handleChangePrice} value={this.state.price}>
            <option value="500" >inférieur à 500 euros</option>
            <option value="1000" >inférieur à 1000 euros</option>
            <option value="1500" >inférieur à 1500 euros</option>
            <option value="10000" >supérieur à 1500 euros</option>
          </select>
        </form>

        <div>
          <Link to="/fiche-produits/284">
            <button className="needs-submit" >Soumettez vos réponses</button>
          </Link>
        </div>
      </div >
    );
  }
}

export default NeedsForm;