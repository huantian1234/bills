import {List} from 'antd-mobile';
import React from 'react';
import {List as VirtualizedList, AutoSizer} from 'react-virtualized';
class MoneyList extends React.Component{
  constructor(props){
    super(props);
    this.rowRenderer=this.rowRenderer.bind(this);
  }
  
  rowRenderer({
    index, // 行索引
    key, // 唯一key
    style, // 用在行元素上的样式对象（用来定位的行元素的）
  }){
    const list = this.props.data;
    const name = list[index].name;
    const money = list[index].money;
    return(
      <List.Item
        key = {key}
        style = {style}
        extra={<p style={{color:'red',fontWeight:'bold'}}>${money}&nbsp;&nbsp;</p>}
        arrow
        clickable
      >
      {name}
      </List.Item>
    )
    }
  render(){
    const height=document.documentElement.clientHeight;
    console.log("height:"+height);
    const height1=document.getElementById("TabBar").offsetHeight;
    const height2=document.getElementById("NavBar").offsetHeight;
    const listHeight = height-height1-height2;
    return(
      <List mode='card'>
        <AutoSizer disableHeight>
          {({width})=>(
            <VirtualizedList
              rowRenderer={this.rowRenderer}
              width={width}
              overscanRowCount={10}
              rowCount = {this.props.data.length}
              height = {listHeight*9/10}
              rowHeight={listHeight/10}
            />
          )}
        </AutoSizer>
      </List>
    )
  }
}

export default MoneyList;
