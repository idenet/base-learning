import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

class Header extends Component {
  constructor() {
    super()
    console.log('constructor')
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  clickH() {
    console.log(this.h1.clientHeight)
  }
  render() {
    console.log('render')
    return (
      <div>
        <h1
          ref={h1 => (this.h1 = h1)}
          className="title"
          onClick={this.clickH.bind(this)}
        >
          React 小书
        </h1>
      </div>
    )
  }
}
class Index extends Component {
  constructor() {
    super()
    this.state = {
      isShowHeader: true
    }
  }
  handleClickShow() {
    this.setState({
      isShowHeader: !this.state.isShowHeader
    })
  }
  render() {
    return (
      <div>
        {this.state.isShowHeader ? <Header /> : null}
        <button onClick={this.handleClickShow.bind(this)}>
          显示或者隐藏标题
        </button>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))
registerServiceWorker()
