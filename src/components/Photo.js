import React from 'react'
import {
  BrowserRouter as Router
} from "react-router-dom";
const Photo = (props) => {

  const explanationStyles = {
    fontWeight: 'bold',
  }

  const dateStyles = {
    fontWeight: 'bold',
    textAlign: 'center'
  }

  //function to check to see if nasa api returns video or image
  // and render correct html accordingly
  function renderContentType() {
    if (props.photo.media_type === 'image') {
      return (
        <img
          style={{ marginBottom: '10px' }}
          className="img-fluid rounded"
          src={props.photo.url}
          alt={props.photo.title}
        />
      )
    } else if (props.photo.media_type === 'video') {
      return (
        <iframe
          style={{ marginBottom: '20px' }}
          title="nasa video of the day"
          className="img-fluid rounded"
          src={props.photo.url}
          alt={props.photo.title}
        ></iframe>
      )
    } else {
      return
    }
  }
  return (
    <Router>
    <div className="card card-body bg-light">
      {renderContentType()}
      <p style={explanationStyles}>{props.photo.explanation}</p>
      <hr></hr>
      <p style={dateStyles}><b>Date Published :&nbsp;</b>{props.photo.date}</p>
      <br/>
      <p style={dateStyles}>Copyright &#169; {props.photo.copyright===undefined?'No copyright info provided':props.photo.copyright}</p>
    </div>
    </Router>
  )
}

export default Photo