import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

class Computer extends React.Component {
  constructor() {
    super()
    this.state = {
      status: 'off'
    }
  }
  clickComputer() {
    this.setState({
      status: this.state.status === 'off' ? 'on' : 'off'
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.clickComputer.bind(this)}>开关</button>
        <Screen
          showContent={this.state.status === 'on' ? '显示器亮了' : '显示器关了'}
        />
      </div>
    )
  }
}

class Screen extends React.Component {
  static defaultProps = {
    showContent: '无内容'
  }
  render() {
    return <div className="screen">{this.props.showContent}</div>
  }
}

ReactDOM.render(<Computer />, document.getElementById('root'))
registerServiceWorker()
