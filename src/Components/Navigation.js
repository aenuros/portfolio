import {Navbar, NavItem} from 'react-materialize';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route,} from 'react-router-dom';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import { AnimatedSwitch } from 'react-router-transition';

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

        <AnimatedSwitch
           atEnter={{ opacity: 0 }}
           atLeave={{ opacity: 0 }}
           atActive={{ opacity: 1 }}
           className="switch-wrapper"
          >
            <Route path ="/about" component={About}/>
            <Route path ="/contact" component={Contact}/>
            <Route path ="/projects" component={Projects}/>

          </AnimatedSwitch>
        </div>

        </Router>
    )
  }
}

export default Navigation;
