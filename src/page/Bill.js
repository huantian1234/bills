import { NavBar, List} from 'antd-mobile';
import React from 'react';
import MoneyList from './component/Money'
import axios from 'axios';
class SecondList extends React.Component{
  constructor(props){
    super(props);
    this.state={data:[]};
  }
  componentDidMount(){
    this.getdata();
  }
  getdata=()=>{
    axios.get('https://mock.apifox.cn/m1/1997824-0-default/api')
      .then((response)=>{
        console.log(response.data);
        this.setState({data:response.data.data});
      })
      .catch(function (error) {
        // 处理错误情况
        console.log(error);
      })
  }
  onChange(e){
    this.props.onChangePage(e);
  }
  render(){
    const name = this.props.name;
    var title;
    if (name == 'staff'){
      title = '员工';
    }
    else if(name == 'boss'){
      title = '老板';
    }
    console.log(this.state.data);
    return(
      <div>
        <div id='NavBar'>
          <NavBar onBack={()=>this.onChange('BillList')}>账单/{title}</NavBar>
        </div>
        <MoneyList data={this.state.data} />
      </div>
    )
  }
}
class BillList extends React.Component{
  constructor(props){
    super(props);
  }
  onChange(e){
    this.props.onChangePage(e);
  }
  render(){
    const list = [
      {
        content:'员工',
        key:'staff',
      },
      {
        content:'老板',
        key:'boss'
      }
    ];
    return(
      <div>
        <div id='NavBar'>
          <NavBar backArrow = {null}>账单</NavBar>
        </div>
        <List mode='card'>
          {list.map(Item=>(
            <List.Item onClick = {()=>this.onChange(Item.key)} arrow={true} clickable={true}>
              {Item.content}
            </List.Item>
          ))}
        </List>
      </div>
    )
  }
}
class Bill extends React.Component{
  constructor(props){
    super(props);
    this.state = {PageName:'BillList'};
    this.onChangePage = this.onChangePage.bind(this);
  }
  onChangePage(e){
    console.log(e);
    this.setState({PageName:e});
  }
  render(){
    var pageName = this.state.PageName;
    var page = <BillList onChangePage = {this.onChangePage}/>;
    if (pageName == 'BillList') {
      var page = <BillList onChangePage = {this.onChangePage}/>;
    }
    else{
      var page = <SecondList onChangePage = {this.onChangePage} name = {pageName} />;
    }
    return (
      <div>
      {page}
      </div>
    )
  }
}

export default Bill;
