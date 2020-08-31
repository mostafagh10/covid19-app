import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import axios from 'axios';
import './style.css';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faGlobeAmericas);

class World extends Component {

  render(){
  return (
    <div className="World">
    <div className="row">
    <div className="col-md-4">  
    <div className="card confirmed2">
      <FontAwesomeIcon icon="globe-americas" className="icon" />
      <h1>Confirmed</h1>  
      <h3>{this.props.data.confirmed2} cases</h3>
      </div>
    </div>
    <div className="col-md-4">
    <div className="card  recovered2">
    <FontAwesomeIcon icon="globe-americas" className="icon" />
      <h1>Recovered</h1>
      <h3>{this.props.data.recovered2} cases</h3>
      </div>
      </div>
    <div className="col-md-4">
    <div className="card deaths2">
    <FontAwesomeIcon icon="globe-americas" className="icon" />
      <h1>Deaths</h1>
      <h3>{this.props.data.deaths2} cases</h3>
      </div>
    </div>

    </div>
    </div>
  );
  }
}

export default World;
