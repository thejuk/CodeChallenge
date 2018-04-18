import React, { Component } from 'react';
import {Router, Route, IndexRoute, hashHistory, withRouter, Switch} from "react-router";
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import CreateMeasurePage from './containers/CreateMeasurePage';
import MeasureDetailsPage from './containers/MeasureDetailsPage';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
         <Switch>
          <Route exact component={CreateMeasurePage} path="/" /> 
          <Route exact component={MeasureDetailsPage} path="/details" />
         </Switch>
       </BrowserRouter>
      </div>
    );
  }
}

export default App;



