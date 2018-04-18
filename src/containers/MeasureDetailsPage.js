import React,{Component} from 'react';
import MeasureDetailsForm from '../components/MeasureDetailsForm';
import { connect } from 'react-redux';
import { CREATE_MEASURE, } from '../store/CreateMeasure/action';

class MeasureDetailsPage extends Component{

render(){
     return(
        <MeasureDetailsForm measureName={this.props.measureName}/>
     );
  }
}

const mapStateToProps = (state) => { 
  console.log(state.createReducer.measureName);
  return { measureName: state.createReducer.measureName };
};

export default connect(mapStateToProps)(MeasureDetailsPage);