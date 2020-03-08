// import React, { Component } from 'react'
import React, { Component, Fragment } from 'react'


export default class ShopCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [{
        id: '1',
        name: '苹果'
      }]
    }
  }
  cd
  render() {
    return (
      <Fragment>
        {/* 1. */}
        {/* <input type="text" value={this.inputValue} onChange={this.inputChange.bind(this)} /> <button >增加服务</button> */}
        {/* 2. */}
        <input type="text" value={this.state.inputValue} onChange={this.inputChange} /> <button onClick={this.pushList}>增加服务</button>
        <ul>
          {this.state.list.map((n, index) => <li onClick={this.deleteItem.bind(this, index)} key={n.id + n.name + 123}
            dangerouslySetInnerHTML={{ __html: n.name }}
          ></li>)}
        </ul>
      </Fragment>
    )
  }
  // 1.
  // inputChange(e) {
  //   this.setState({ inputValue: e.target.value })
  // }
  // 2. 
  inputChange = (e) => (this.setState({ inputValue: e.target.value }))
  pushList = () => (this.setState({ list: [...this.state.list, { id: this.state.list.length, name: this.state.inputValue }], inputValue: '' }))
  deleteItem(index) {
    let tempList = [...this.state.list]
    tempList.splice(index, 1)
    this.setState({
      list: tempList
    })
  }
} 