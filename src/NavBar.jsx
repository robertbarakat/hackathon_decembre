import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import Logo from './components/logo_navbar_ecotheque.png'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <div className="nav-bar">
        <Navbar className="navbar-div" dark expand="md">
          <NavItem className="logo" tag={Link} to="/">
            <img src={Logo} alt="" />
          </NavItem>
          <Nav className="ml-auto" navbar>
            <NavItem tag={Link} to="/Concept">
                Concept
            </NavItem>
            <NavItem tag={Link} to="/Communauté">
                Communauté 
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}