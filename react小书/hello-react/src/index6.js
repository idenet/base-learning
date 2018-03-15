import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

class Input extends Component {
  handleNumChange(event) {
    this.props.numSubmit && this.props.numSubmit(event.target.value)
  }
  render() {
    return (
      <div>
        <input type="number" onChange={this.handleNumChange.bind(this)} />
      </div>
    )
  }
}

class PercentageShower extends Component {
  static defaultProps = {
    acceptNum: 0
  }

  render() {
    return (
      <div>
        <div>-{(this.props.acceptNum * 100).toFixed(2) + '%'}-</div>
      </div>
    )
  }
}

class PercentageApp extends Component {
  constructor() {
    super()
    this.state = {
      number: 0
    }
  }
  handleNumSubmit(content) {
    this.setState({
      number: content
    })
  }
  render() {
    return (
      <div>
        <Input numSubmit={this.handleNumSubmit.bind(this)} />
        <PercentageShower acceptNum={this.state.number} />
      </div>
    )
  }
}

ReactDOM.render(<PercentageApp />, document.getElementById('root'))
registerServiceWorker()
