import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <div className="comment">
        <div className="comment-user">
          <span>{this.props.comment.username}</span>&nbsp;:&nbsp;
        </div>
        <p>{this.props.comment.content}</p>
      </div>
    )
  }
}
