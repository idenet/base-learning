import React, { Component } from 'react'

export default class CommentInput extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }
  usernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }
  contentChange(event) {
    this.setState({
      content: event.target.value
    })
  }
  /**
   * 父组件传过来的获取数据的函数
   */
  handleSubmit() {
    const { username, content } = this.state
    this.props.onSubmit && this.props.onSubmit({ username, content })
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名:</span>
          <div className="comment-field-input">
            <input
              type="text"
              value={this.state.username}
              onChange={this.usernameChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容:</span>
          <div className="comment-field-input">
            <textarea
              value={this.state.content}
              onChange={this.contentChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    )
  }
}
