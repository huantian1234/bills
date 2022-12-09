import React from 'react';
import FNavBar from './NavBar';
class Switch extends React.Component{
  constructor(props){
    super(props);
    this.state = {history:[],index:0}
    this.backUp = this.backUp.bind(this);
  }
  backUp(){
    var index=this.state.index;
    this.setState({index:index-1});
  }
  render(){
    return(
      <FNavBar title = {this.state.history[index]} backUp={this.backUp} />
      {this.state.history[this.state.index].content}
    )
  }
}

export default Switch;
