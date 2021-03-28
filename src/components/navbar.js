import React, { Component} from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import {
  BrowserRouter as Router,
  withRouter,
  Link
} from "react-router-dom";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue:''
    };

    this.handleValueChange = this.handleValueChange.bind(this);
}
  handleValueChange(e) {
    this.setState({searchValue: e.target.value});
 }
 nextPath(path) {
  this.props.history.push(path);
}
handleReset = () => {
  Array.from(document.querySelectorAll("input")).forEach(
    input => (input.value = "")
  );
  this.setState({
    searchValue:""
  });
};
  render() {
    return (
      <div>
        <Router>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <div onClick={() => this.nextPath('/')}>
    <Navbar.Brand href="#home"><Link to="/" style={{ textDecoration: 'none', color:'black' }}>{this.handleReset}{this.props.getTitle.title} (Home)</Link></Navbar.Brand>
    </div>
    <Nav className="mr-auto">
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleValueChange} />
      <Button variant="outline-info" onClick={()=>{
        this.props.handleInputChange(this.state.searchValue)
        this.nextPath('/search')
        this.handleReset()
      }
        }>Search</Button>
    </Form>
  </Navbar>
  </Router>
  <br />
      </div>
    );
  }
}
export default withRouter(NavbarComponent);