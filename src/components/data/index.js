import React, { Component } from 'react';
import axios from 'axios'
import './style.css'

class Data extends Component {

  render(){
  return (
    <div className="Data">
    <div className="row">
    <div className="col-md-4">  
    <div className="card confirmed">
      <h1>Confirmed</h1>  
      <h3>{this.props.data.confirmed} cases</h3>
      </div>
    </div>
    <div className="col-md-4">
    <div className="card  recovered">
      <h1>Recovered</h1>
      <h3>{this.props.data.recovered} cases</h3>
      </div>
      </div>
    <div className="col-md-4">
    <div className="card deaths">
      <h1>Deaths</h1>
      <h3>{this.props.data.deaths} cases</h3>
      </div>
    </div>

    </div>
    </div>
  );
  }
}

export default Data;
