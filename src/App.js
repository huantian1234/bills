import React from 'react';
import Home from './page/Home';
import Bill from './page/Bill';
import {Button,AutoCenter,TabBar} from 'antd-mobile';
import './App.css';
import {
  AppOutline,
  BillOutline,
  UserOutline,
} from 'antd-mobile-icons'
class TarbarButtom extends React.Component{
  constructor(props){
    super(props);
  }
  onChange(e){
    this.props.onChangePage(e);
  }
  render(){
    const tabs = [
      {
        key:'home',
        title:'首页',
        icon:<AppOutline />,
      },
      {
        key:'bill',
        title:'账本',
        icon:<BillOutline />,
      },
    ];
    return(
      <div id="TabBar">
        <TabBar onChange={(e) => this.onChange(e)}>
          {tabs.map(Item => (
            <TabBar.Item
              key={Item.key}
              title={Item.title}
              icon={Item.icon}
            />
          ))}
        </TabBar>
      </div>
    );
  }
}
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {Page:0};
    this.onChangePage=this.onChangePage.bind(this);
    //this.plusOne = this.plusOne.bind(this);
  }
  componentDidMount(){
  }
  componentWillUnmount(){
  }
  onChangePage(e){
    console.log(this);
    this.setState({Page:e});
  }
  render() {
    const page = this.state.Page;
    var Page = <Home />;
    if ( page == 'home') {
      Page = <Home />;
    }
    else if( page == 'bill') {
      Page = <Bill />;
    }
    return (
      <div>
        {Page}
        <TarbarButtom onChangePage={this.onChangePage}/>
      </div>
    )
  }
}
export default App;
