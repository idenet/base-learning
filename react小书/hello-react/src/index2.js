import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

class ButtonClick extends React.Component {
  constructor() {
    super()
    this.state = {
      isLIked: false,
      count: 0
    }
  }
  handleClickOnLikeButton() {
    this.setState({
      isLIked: !this.state.isLIked
    })
    this.setState(preState => {
      return { count: this.state.count + 1 } // count被重新赋值 1
    })
    this.setState(preState => {
      console.log(preState.count)
      return { count: preState.count + 1 } // 2
    })
  }
  render() {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLIked ? '取消' : '点赞'}
      </button>
    )
  }
}

class Index extends React.Component {
  render() {
    return (
      <div>
        <ButtonClick />
      </div>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById('root'))
registerServiceWorker()
