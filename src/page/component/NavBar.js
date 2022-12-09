import React from 'react';
import { NavBar } from 'antd-mobile';
class FNavBar extends React.Component{
  constructor(props){
    super(props);
  }
  backUp(){
    this.props.backUp();
  }
  render(){
    return(
      <div id="NavBar">
        <NavBar onBack={()=>this.backUp()}>{this.props.title}</NavBar>
      </div>
    )
  }
}
export default FNavBar;
