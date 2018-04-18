import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react';
import TextField from 'react-md/lib/TextFields';
import { Button } from 'react-md';
import { SelectionControlGroup } from 'react-md';
import Header from './Header';
import '../assets/styleSheets/createMeasure.scss';
import { Router, browserHistory } from 'react-router';

const CreateMeasureForm = ({ measureName, handleChange, onSubmit, description }) => {
        return(
        <div data-reactroot="" className="app" style={{ width:'80%',margin:'auto' }}>
          <div className="toolbar-group">
           <header className="md-paper md-paper--0 md-toolbar md-toolbar--themed md-toolbar--discrete">
             <h2 className="md-title md-title--toolbar">Measure Details</h2></header></div>  
               <div className="md-paper md-paper--1 login-form md-block-centered">
                 <form className="md-grid" onSubmit={onSubmit}>
                   <div className="icon-measure measureIcon"></div>
                   <div className="inlineStyle">
                    <TextField
                      className="md-cell md-cell--12"
                      id="measureName"
                      errorText="Measure Name is required"
                      placeholder="Enter Measure Name"   
                      type="text"                           
                      value ={measureName}
                      required
                      onChange={value => handleChange('measureName', value)}/></div>
                   <div className="icon-modeEdit editIcon"></div>
                   <div className="inline">
                   <TextField
                     id="description"
                     placeholder="Enter Description"                              
                     className="md-cell md-cell--12" 
                     type="text" 
                     rows={2}
                     value={description}
                     onChange={value => handleChange('description', value)}
                     /></div>
                  <div>
                 </div>
                  <div className="submit">
                  <Button
                  type="submit"
                  id="submit"
                  label="Create Measure"
                  raised
                  /></div>
              </form>
            </div>      
          </div>  
        );
};

CreateMeasureForm.propTypes = {
  measureName: PropTypes.string,
  handleChange: PropTypes.func,
  onSubmit: PropTypes.func,
  description: PropTypes.string,
};

export default CreateMeasureForm;