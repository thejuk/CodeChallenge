import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateMeasureForm from '../components/CreateMeasureForm';
import { createMeasure } from '../store/CreateMeasure/action';

class CreateMeasurePage extends Component {

   constructor(props) {
    super(props);
    this.state = {
        measureName :"",
        description:"",
    };     
    }

    handleChange(fieldType, value) {
    this.setState({ [fieldType]: value });
    }

    handleCreateMeasure(e) {
    const { measureName, description } = this.state;
    e.preventDefault();
    const {history, dispatch} = this.props;
    alert("measureName:"+measureName);
    console.log(this.props);
    dispatch(createMeasure(this.state.measureName));
    history.push('/details');
    }

    render() {
        return(
             <CreateMeasureForm
              measureName={this.state.measureName}
              handleChange={(fieldType, value) => this.handleChange(fieldType, value)}
              onSubmit={e => this.handleCreateMeasure(e)}
              description={this.state.description}/>
        );
    }
}

export default connect()(CreateMeasurePage);