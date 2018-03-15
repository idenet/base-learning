import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">{this.props.children}</div>
      </div>
    )
  }
}

ReactDOM.render(
  <Card>
    <div>
      <h2>React.js 小书</h2>
      <div>开源、免费、专业、简单</div>
      订阅：<input />
    </div>
  </Card>,
  document.getElementById('root')
)
registerServiceWorker()
