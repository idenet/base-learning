import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }
  constructor() {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }

  componentWillMount() {
    this._loadUsername()
  }
  componentDidMount() {
    this.textarea.focus()
  }

  _loadUsername() {
    const username = localStorage.getItem('username')
    username && this.setState({ username })
  }
  _saveUsername(username) {
    localStorage.setItem('username', username)
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }
  handleContentChange(event) {
    this.setState({
      content: event.target.value
    })
  }
  handleUsernameBlur(event) {
    this._saveUsername(event.target.value)
  }
  /**
   * 父组件传过来的获取数据的函数
   */
  handleSubmit() {
    this.props.onSubmit &&
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date()
      })
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
              onBlur={this.handleUsernameBlur.bind(this)}
              onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容:</span>
          <div className="comment-field-input">
            <textarea
              ref={textarea => (this.textarea = textarea)}
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)}
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
