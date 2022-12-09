import React from 'react';
import {NavBar} from 'antd-mobile';
class Home extends React.Component{
  render(){
    return(
      <div id='NavBar'>
        <NavBar backArrow={null}>首页</NavBar>
      </div>
    )
  }
}
export default Home;
