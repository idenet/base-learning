import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

class Title extends Component {
  static contextTypes = {
    themeColor: PropTypes.string
  }
  render() {
    return <h1 style={{ color: this.context.themeColor }}>React.js 小书标题</h1>
  }
}

class Index extends Component {
  static childContextTypes = {
    themeColor: PropTypes.string
  }
  constructor() {
    super()
    this.state = {
      themeColor: 'red'
    }
  }
  getChildContext() {
    return { themeColor: this.state.themeColor }
  }
  render() {
    return (
      <div>
        <Title />
      </div>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById('root'))
registerServiceWorker()
