import React, { Component } from 'react'
//import DateInput from './components/DateInput'
import Photo from './components/Photo.js'
import NavbarComponent from './components/navbar'
import Search from './components/search'
import Loading from './components/loading'
import {
  Route,
  BrowserRouter as Router
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      activePage: 15,
    photo: '',
    query: '',
    results: [],
    loading : false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
}

  getInfo = () => {
    fetch(
        'https://images-api.nasa.gov/search?title='+ this.state.query
      )
      .then((response) => {
        return response.json()
      })
      .then(( data ) => {
        this.setState({
          results: data.collection,
          loading: false
        });
      }).catch(error => {
        console.log('Error fetching and parsing data', error);
        this.setState({
          loading: true
        });
      });
  };

  handleInputChange(search) {
    //e.preventDefault();
    this.setState(
      {
        query: search
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
            this.getInfo();
        } else if (!this.state.query) {
        }
      }
    );
  };
  // lifecycle method that render photo before app renders
  componentDidMount() {
    const monthNames = ["01", "02", "03", "04", "05", "06",
    "07", "08", "09", "10", "11", "12"];
const dateObj = new Date();
const month = monthNames[dateObj.getMonth()];
const day = String(dateObj.getDate()).padStart(2, '0');
const year = dateObj.getFullYear();
const output = year  + '-'+ month  + '-' + day;
console.log(output);
    fetch(`https://api.nasa.gov/planetary/apod?date=${output}&api_key=oUHoJXZWBv0Jpb0sLaU0yPM1G7ihmYMAcsIaZp3y`)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({ photo: json })
        console.log(this.state.photo)
      })
  }
  render() {
    // Style for header
    const headerStyle = {
      textShadow: '1px 1px #282794',
      textAlign: 'center'
    }
    const capitalize = (s) => {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }
    return (
      <div className="container-fluid" style={{margin:0}}>
        <div className="card-body">
          <Router>
          <h2 style={headerStyle}>NASA Media Search</h2>
          <NavbarComponent getTitle= {this.state.photo} handleInputChange={this.handleInputChange}/>
          <Route path="/" exact component={ ()=> <Photo photo={this.state.photo} /> } />
          {
            this.state.loading?<Loading type='spin' color='black' />:
            <div>
            <Route path="/search" exact component={ ()=> <Search data={this.state.results} query={capitalize(this.state.query)} />} />
            </div>
          }
          <br/>
          </Router>
        </div>
      </div>
    )
  }
}
export default App