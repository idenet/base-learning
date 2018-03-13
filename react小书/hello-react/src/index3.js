import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

class ButtonClick extends React.Component {
  constructor() {
    super()
    this.state = {
      isLiked: false
    }
  }
  /**
   *组件中默认的porps
   */
  static defaultProps = {
    isLiked: '点赞',
    notLiked: '取消'
  }

  handleClickOnLikeButton() {
    this.setState({
      isLiked: !this.state.isLiked
    })
    this.props.onClick && this.props.onClick()
  }

  render() {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? this.props.isLiked : this.props.notLiked}
      </button>
    )
  }
}

class Index extends React.Component {
  render() {
    return (
      <div>
        <ButtonClick
          wordings={{ isLiked: '点赞', notLiked: '取消' }}
          onClick={() => {
            console.log('click on like button')
          }}
        />
      </div>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById('root'))
registerServiceWorker()
