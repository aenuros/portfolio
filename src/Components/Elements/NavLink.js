import {NavItem} from 'react-materialize';
import React, { Component } from 'react';

class NavLink extends Component {
  render() {
    return (
  <Navbar brand='Karen Burgos' right>
    <NavItem href='components.html'>Components</NavItem>
  </Navbar>
    )
  }
}

export default NavLink;
