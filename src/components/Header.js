import React,{Component} from 'react';


/*export default class Header extends Component {
    render() {
        return(
          <div style={{ width:'80%',margin:'auto' }}>
           <div className="toolbar-group">
           <header  className="md-paper md-paper--0 md-toolbar md-toolbar--themed md-toolbar--discrete">
             <h2 className="md-title md-title--toolbar">
                
             </h2></header></div>
          </div>
         
        );
    }
}*/

class Header extends Component{
  
  render(){
    return(
       <div>{this.props.measureName}</div>
    );
  }
}

export default Header;



