import {Navbar, NavItem} from 'react-materialize';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route,} from 'react-router-dom';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

class Navigation extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar brand='Karen Burgos' left>

          <Link to="/about"><NavItem>About</NavItem></Link>
          <Link to="/projects"><NavItem>Projects</NavItem></Link>
          <Link to="/contact"><NavItem>Contact</NavItem></Link>

        </Navbar>
        <Route path ="/about" component={About}/>
        <Route path ="/projects" component={Projects}/>
        <Route path ="/contact" component={Contact}/>
        </div>
        </Router>
    )
  }
}

export default Navigation;
