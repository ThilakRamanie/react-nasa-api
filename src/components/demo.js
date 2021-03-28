import React, { Component} from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Demo extends Component {
  render() {
    return (
      <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home"><Link to="/" style={{ textDecoration: 'none', color:'white' }}>Demo</Link></Navbar.Brand>
    <Nav className="mr-auto">
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e => console.log(e.target.value)} />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br/>
      </div>
    );
  }
}
export default Demo;